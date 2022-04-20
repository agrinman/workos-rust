use async_trait::async_trait;
use serde::Deserialize;
use thiserror::Error;

use crate::sso::{AccessToken, AuthorizationCode, ClientId, Profile, Sso};
use crate::WorkOsResult;

#[derive(Debug)]
pub struct GetProfileAndTokenOptions<'a> {
    pub client_id: &'a ClientId,
    pub code: &'a AuthorizationCode,
}

#[derive(Debug, Deserialize)]
pub struct GetProfileAndTokenResponse {
    pub access_token: AccessToken,
    pub profile: Profile,
}

#[derive(Debug, Error)]
pub enum GetProfileAndTokenError {}

#[async_trait]
pub trait GetProfileAndToken {
    /// [WorkOS Docs: Get a Profile and Token](https://workos.com/docs/reference/sso/profile/token)
    async fn get_profile_and_token(
        &self,
        options: &GetProfileAndTokenOptions<'_>,
    ) -> WorkOsResult<GetProfileAndTokenResponse, GetProfileAndTokenError>;
}

#[async_trait]
impl<'a> GetProfileAndToken for Sso<'a> {
    async fn get_profile_and_token(
        &self,
        options: &GetProfileAndTokenOptions<'_>,
    ) -> WorkOsResult<GetProfileAndTokenResponse, GetProfileAndTokenError> {
        let &GetProfileAndTokenOptions { client_id, code } = options;

        let url = self.workos.base_url().join("/sso/token")?;
        let params = [
            ("client_id", &client_id.to_string()),
            ("client_secret", self.workos.api_key()),
            ("grant_type", &"authorization_code".to_string()),
            ("code", &code.to_string()),
        ];
        let response = self.workos.client().post(url).form(&params).send().await?;
        let get_profile_and_token_response = response.json::<GetProfileAndTokenResponse>().await?;

        Ok(get_profile_and_token_response)
    }
}

#[cfg(test)]
mod test {
    use crate::WorkOs;

    use super::*;

    use mockito::{self, mock, Matcher};
    use serde_json::json;
    use tokio;

    #[tokio::test]
    async fn it_calls_the_token_endpoint() {
        let workos = WorkOs::builder(&"sk_example_123456789")
            .base_url(&mockito::server_url())
            .unwrap()
            .build();

        let _mock = mock("POST", "/sso/token")
            .match_body(Matcher::AllOf(vec![
                Matcher::UrlEncoded("client_id".to_string(), "client_1234".to_string()),
                Matcher::UrlEncoded(
                    "client_secret".to_string(),
                    "sk_example_123456789".to_string(),
                ),
                Matcher::UrlEncoded("grant_type".to_string(), "authorization_code".to_string()),
                Matcher::UrlEncoded("code".to_string(), "abc123".to_string()),
            ]))
            .with_status(200)
            .with_body(
                json!({
                  "access_token": "01DMEK0J53CVMC32CK5SE0KZ8Q",
                  "profile": {
                    "id": "prof_01DMC79VCBZ0NY2099737PSVF1",
                    "connection_id": "conn_01E4ZCR3C56J083X43JQXF3JK5",
                    "connection_type": "okta",
                    "email": "todd@foo-corp.com",
                    "first_name": "Todd",
                    "idp_id": "00u1a0ufowBJlzPlk357",
                    "last_name": "Rundgren",
                    "object": "profile",
                    "raw_attributes": {}
                  }
                })
                .to_string(),
            )
            .create();

        let response = workos
            .sso()
            .get_profile_and_token(&GetProfileAndTokenOptions {
                client_id: &ClientId::from("client_1234"),
                code: &AuthorizationCode::from("abc123"),
            })
            .await
            .unwrap();

        assert_eq!(
            response.access_token,
            AccessToken::from("01DMEK0J53CVMC32CK5SE0KZ8Q")
        );
        assert_eq!(response.profile.id, "prof_01DMC79VCBZ0NY2099737PSVF1")
    }
}
