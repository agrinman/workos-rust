use std::error::Error;

use async_trait::async_trait;

use crate::sso::{Profile, Sso};

pub struct GetProfileOptions<'a> {
    pub access_token: &'a str,
}

#[async_trait]
pub trait GetProfile {
    async fn get_profile(&self, options: &GetProfileOptions<'_>)
        -> Result<Profile, Box<dyn Error>>;
}

#[async_trait]
impl<'a> GetProfile for Sso<'a> {
    async fn get_profile(
        &self,
        options: &GetProfileOptions<'_>,
    ) -> Result<Profile, Box<dyn Error>> {
        let &GetProfileOptions { access_token } = options;

        let client = reqwest::Client::new();
        let url = self.workos.base_url().join("/sso/profile")?;
        let response = client.get(url).bearer_auth(access_token).send().await?;
        let profile = response.json::<Profile>().await?;

        Ok(profile)
    }
}

#[cfg(test)]
mod test {
    use crate::WorkOs;

    use super::*;

    use mockito::{self, mock};
    use serde_json::json;
    use tokio;

    #[tokio::test]
    async fn it_calls_the_get_profile_endpoint() {
        let workos = WorkOs::builder(&"sk_example_123456789")
            .base_url(&mockito::server_url())
            .unwrap()
            .build();

        let _mock = mock("GET", "/sso/profile")
            .match_header("Authorization", "Bearer 01DMEK0J53CVMC32CK5SE0KZ8Q")
            .with_status(200)
            .with_body(
                json!({
                  "id": "prof_01DMC79VCBZ0NY2099737PSVF1",
                  "connection_id": "conn_01E4ZCR3C56J083X43JQXF3JK5",
                  "connection_type": "okta",
                  "email": "todd@foo-corp.com",
                  "first_name": "Todd",
                  "idp_id": "00u1a0ufowBJlzPlk357",
                  "last_name": "Rundgren",
                  "object": "profile",
                  "raw_attributes": {}
                })
                .to_string(),
            )
            .create();

        let profile = workos
            .sso()
            .get_profile(&GetProfileOptions {
                access_token: "01DMEK0J53CVMC32CK5SE0KZ8Q",
            })
            .await
            .unwrap();

        assert_eq!(profile.id, "prof_01DMC79VCBZ0NY2099737PSVF1")
    }
}