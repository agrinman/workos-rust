(function() {var implementors = {};
implementors["workos"] = [{"text":"impl&lt;E&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"https://docs.rs/url/2.2.2/url/parser/enum.ParseError.html\" title=\"enum url::parser::ParseError\">ParseError</a>&gt; for <a class=\"enum\" href=\"workos/enum.WorkOsError.html\" title=\"enum workos::WorkOsError\">WorkOsError</a>&lt;E&gt;","synthetic":false,"types":["workos::core::error::WorkOsError"]},{"text":"impl&lt;E&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://docs.rs/reqwest/0.11.11/reqwest/error/struct.Error.html\" title=\"struct reqwest::error::Error\">Error</a>&gt; for <a class=\"enum\" href=\"workos/enum.WorkOsError.html\" title=\"enum workos::WorkOsError\">WorkOsError</a>&lt;E&gt;","synthetic":false,"types":["workos::core::error::WorkOsError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.61.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt; for <a class=\"struct\" href=\"workos/struct.ApiKey.html\" title=\"struct workos::ApiKey\">ApiKey</a>","synthetic":false,"types":["workos::core::types::api_key::ApiKey"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;'_ <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.61.0/std/primitive.str.html\">str</a>&gt; for <a class=\"struct\" href=\"workos/struct.ApiKey.html\" title=\"struct workos::ApiKey\">ApiKey</a>","synthetic":false,"types":["workos::core::types::api_key::ApiKey"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"workos/directory_sync/enum.DeleteDirectoryError.html\" title=\"enum workos::directory_sync::DeleteDirectoryError\">DeleteDirectoryError</a>&gt; for <a class=\"enum\" href=\"workos/enum.WorkOsError.html\" title=\"enum workos::WorkOsError\">WorkOsError</a>&lt;<a class=\"enum\" href=\"workos/directory_sync/enum.DeleteDirectoryError.html\" title=\"enum workos::directory_sync::DeleteDirectoryError\">DeleteDirectoryError</a>&gt;","synthetic":false,"types":["workos::core::error::WorkOsError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"workos/directory_sync/enum.GetDirectoryError.html\" title=\"enum workos::directory_sync::GetDirectoryError\">GetDirectoryError</a>&gt; for <a class=\"enum\" href=\"workos/enum.WorkOsError.html\" title=\"enum workos::WorkOsError\">WorkOsError</a>&lt;<a class=\"enum\" href=\"workos/directory_sync/enum.GetDirectoryError.html\" title=\"enum workos::directory_sync::GetDirectoryError\">GetDirectoryError</a>&gt;","synthetic":false,"types":["workos::core::error::WorkOsError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"workos/directory_sync/enum.GetDirectoryGroupError.html\" title=\"enum workos::directory_sync::GetDirectoryGroupError\">GetDirectoryGroupError</a>&gt; for <a class=\"enum\" href=\"workos/enum.WorkOsError.html\" title=\"enum workos::WorkOsError\">WorkOsError</a>&lt;<a class=\"enum\" href=\"workos/directory_sync/enum.GetDirectoryGroupError.html\" title=\"enum workos::directory_sync::GetDirectoryGroupError\">GetDirectoryGroupError</a>&gt;","synthetic":false,"types":["workos::core::error::WorkOsError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.61.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt; for <a class=\"struct\" href=\"workos/directory_sync/struct.DirectoryId.html\" title=\"struct workos::directory_sync::DirectoryId\">DirectoryId</a>","synthetic":false,"types":["workos::directory_sync::types::directory::DirectoryId"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;'_ <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.61.0/std/primitive.str.html\">str</a>&gt; for <a class=\"struct\" href=\"workos/directory_sync/struct.DirectoryId.html\" title=\"struct workos::directory_sync::DirectoryId\">DirectoryId</a>","synthetic":false,"types":["workos::directory_sync::types::directory::DirectoryId"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.61.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt; for <a class=\"struct\" href=\"workos/directory_sync/struct.DirectoryGroupId.html\" title=\"struct workos::directory_sync::DirectoryGroupId\">DirectoryGroupId</a>","synthetic":false,"types":["workos::directory_sync::types::directory_group::DirectoryGroupId"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;'_ <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.61.0/std/primitive.str.html\">str</a>&gt; for <a class=\"struct\" href=\"workos/directory_sync/struct.DirectoryGroupId.html\" title=\"struct workos::directory_sync::DirectoryGroupId\">DirectoryGroupId</a>","synthetic":false,"types":["workos::directory_sync::types::directory_group::DirectoryGroupId"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.61.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt; for <a class=\"struct\" href=\"workos/directory_sync/struct.DirectoryUserId.html\" title=\"struct workos::directory_sync::DirectoryUserId\">DirectoryUserId</a>","synthetic":false,"types":["workos::directory_sync::types::directory_user::DirectoryUserId"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;'_ <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.61.0/std/primitive.str.html\">str</a>&gt; for <a class=\"struct\" href=\"workos/directory_sync/struct.DirectoryUserId.html\" title=\"struct workos::directory_sync::DirectoryUserId\">DirectoryUserId</a>","synthetic":false,"types":["workos::directory_sync::types::directory_user::DirectoryUserId"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"workos/mfa/enum.EnrollFactorError.html\" title=\"enum workos::mfa::EnrollFactorError\">EnrollFactorError</a>&gt; for <a class=\"enum\" href=\"workos/enum.WorkOsError.html\" title=\"enum workos::WorkOsError\">WorkOsError</a>&lt;<a class=\"enum\" href=\"workos/mfa/enum.EnrollFactorError.html\" title=\"enum workos::mfa::EnrollFactorError\">EnrollFactorError</a>&gt;","synthetic":false,"types":["workos::core::error::WorkOsError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.61.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt; for <a class=\"struct\" href=\"workos/mfa/struct.AuthenticationChallengeId.html\" title=\"struct workos::mfa::AuthenticationChallengeId\">AuthenticationChallengeId</a>","synthetic":false,"types":["workos::mfa::types::authentication_challenge::AuthenticationChallengeId"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;'_ <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.61.0/std/primitive.str.html\">str</a>&gt; for <a class=\"struct\" href=\"workos/mfa/struct.AuthenticationChallengeId.html\" title=\"struct workos::mfa::AuthenticationChallengeId\">AuthenticationChallengeId</a>","synthetic":false,"types":["workos::mfa::types::authentication_challenge::AuthenticationChallengeId"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.61.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt; for <a class=\"struct\" href=\"workos/mfa/struct.AuthenticationFactorId.html\" title=\"struct workos::mfa::AuthenticationFactorId\">AuthenticationFactorId</a>","synthetic":false,"types":["workos::mfa::types::authentication_factor::AuthenticationFactorId"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;'_ <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.61.0/std/primitive.str.html\">str</a>&gt; for <a class=\"struct\" href=\"workos/mfa/struct.AuthenticationFactorId.html\" title=\"struct workos::mfa::AuthenticationFactorId\">AuthenticationFactorId</a>","synthetic":false,"types":["workos::mfa::types::authentication_factor::AuthenticationFactorId"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.61.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt; for <a class=\"struct\" href=\"workos/mfa/struct.MfaCode.html\" title=\"struct workos::mfa::MfaCode\">MfaCode</a>","synthetic":false,"types":["workos::mfa::types::mfa_code::MfaCode"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;'_ <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.61.0/std/primitive.str.html\">str</a>&gt; for <a class=\"struct\" href=\"workos/mfa/struct.MfaCode.html\" title=\"struct workos::mfa::MfaCode\">MfaCode</a>","synthetic":false,"types":["workos::mfa::types::mfa_code::MfaCode"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"workos/organizations/enum.CreateOrganizationError.html\" title=\"enum workos::organizations::CreateOrganizationError\">CreateOrganizationError</a>&gt; for <a class=\"enum\" href=\"workos/enum.WorkOsError.html\" title=\"enum workos::WorkOsError\">WorkOsError</a>&lt;<a class=\"enum\" href=\"workos/organizations/enum.CreateOrganizationError.html\" title=\"enum workos::organizations::CreateOrganizationError\">CreateOrganizationError</a>&gt;","synthetic":false,"types":["workos::core::error::WorkOsError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"workos/organizations/enum.DeleteOrganizationError.html\" title=\"enum workos::organizations::DeleteOrganizationError\">DeleteOrganizationError</a>&gt; for <a class=\"enum\" href=\"workos/enum.WorkOsError.html\" title=\"enum workos::WorkOsError\">WorkOsError</a>&lt;<a class=\"enum\" href=\"workos/organizations/enum.DeleteOrganizationError.html\" title=\"enum workos::organizations::DeleteOrganizationError\">DeleteOrganizationError</a>&gt;","synthetic":false,"types":["workos::core::error::WorkOsError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"workos/organizations/enum.GetOrganizationError.html\" title=\"enum workos::organizations::GetOrganizationError\">GetOrganizationError</a>&gt; for <a class=\"enum\" href=\"workos/enum.WorkOsError.html\" title=\"enum workos::WorkOsError\">WorkOsError</a>&lt;<a class=\"enum\" href=\"workos/organizations/enum.GetOrganizationError.html\" title=\"enum workos::organizations::GetOrganizationError\">GetOrganizationError</a>&gt;","synthetic":false,"types":["workos::core::error::WorkOsError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.61.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt; for <a class=\"struct\" href=\"workos/organizations/struct.OrganizationId.html\" title=\"struct workos::organizations::OrganizationId\">OrganizationId</a>","synthetic":false,"types":["workos::organizations::types::organization::OrganizationId"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;'_ <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.61.0/std/primitive.str.html\">str</a>&gt; for <a class=\"struct\" href=\"workos/organizations/struct.OrganizationId.html\" title=\"struct workos::organizations::OrganizationId\">OrganizationId</a>","synthetic":false,"types":["workos::organizations::types::organization::OrganizationId"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.61.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt; for <a class=\"struct\" href=\"workos/organizations/struct.OrganizationDomainId.html\" title=\"struct workos::organizations::OrganizationDomainId\">OrganizationDomainId</a>","synthetic":false,"types":["workos::organizations::types::organization::OrganizationDomainId"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;'_ <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.61.0/std/primitive.str.html\">str</a>&gt; for <a class=\"struct\" href=\"workos/organizations/struct.OrganizationDomainId.html\" title=\"struct workos::organizations::OrganizationDomainId\">OrganizationDomainId</a>","synthetic":false,"types":["workos::organizations::types::organization::OrganizationDomainId"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.61.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt; for <a class=\"struct\" href=\"workos/passwordless/struct.PasswordlessSessionId.html\" title=\"struct workos::passwordless::PasswordlessSessionId\">PasswordlessSessionId</a>","synthetic":false,"types":["workos::passwordless::types::passwordless_session::PasswordlessSessionId"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;'_ <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.61.0/std/primitive.str.html\">str</a>&gt; for <a class=\"struct\" href=\"workos/passwordless/struct.PasswordlessSessionId.html\" title=\"struct workos::passwordless::PasswordlessSessionId\">PasswordlessSessionId</a>","synthetic":false,"types":["workos::passwordless::types::passwordless_session::PasswordlessSessionId"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"workos/sso/enum.DeleteConnectionError.html\" title=\"enum workos::sso::DeleteConnectionError\">DeleteConnectionError</a>&gt; for <a class=\"enum\" href=\"workos/enum.WorkOsError.html\" title=\"enum workos::WorkOsError\">WorkOsError</a>&lt;<a class=\"enum\" href=\"workos/sso/enum.DeleteConnectionError.html\" title=\"enum workos::sso::DeleteConnectionError\">DeleteConnectionError</a>&gt;","synthetic":false,"types":["workos::core::error::WorkOsError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"workos/sso/enum.GetConnectionError.html\" title=\"enum workos::sso::GetConnectionError\">GetConnectionError</a>&gt; for <a class=\"enum\" href=\"workos/enum.WorkOsError.html\" title=\"enum workos::WorkOsError\">WorkOsError</a>&lt;<a class=\"enum\" href=\"workos/sso/enum.GetConnectionError.html\" title=\"enum workos::sso::GetConnectionError\">GetConnectionError</a>&gt;","synthetic":false,"types":["workos::core::error::WorkOsError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.61.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt; for <a class=\"struct\" href=\"workos/sso/struct.AccessToken.html\" title=\"struct workos::sso::AccessToken\">AccessToken</a>","synthetic":false,"types":["workos::sso::types::access_token::AccessToken"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;'_ <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.61.0/std/primitive.str.html\">str</a>&gt; for <a class=\"struct\" href=\"workos/sso/struct.AccessToken.html\" title=\"struct workos::sso::AccessToken\">AccessToken</a>","synthetic":false,"types":["workos::sso::types::access_token::AccessToken"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.61.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt; for <a class=\"struct\" href=\"workos/sso/struct.AuthorizationCode.html\" title=\"struct workos::sso::AuthorizationCode\">AuthorizationCode</a>","synthetic":false,"types":["workos::sso::types::authorization_code::AuthorizationCode"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;'_ <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.61.0/std/primitive.str.html\">str</a>&gt; for <a class=\"struct\" href=\"workos/sso/struct.AuthorizationCode.html\" title=\"struct workos::sso::AuthorizationCode\">AuthorizationCode</a>","synthetic":false,"types":["workos::sso::types::authorization_code::AuthorizationCode"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.61.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt; for <a class=\"struct\" href=\"workos/sso/struct.ClientId.html\" title=\"struct workos::sso::ClientId\">ClientId</a>","synthetic":false,"types":["workos::sso::types::client_id::ClientId"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;'_ <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.61.0/std/primitive.str.html\">str</a>&gt; for <a class=\"struct\" href=\"workos/sso/struct.ClientId.html\" title=\"struct workos::sso::ClientId\">ClientId</a>","synthetic":false,"types":["workos::sso::types::client_id::ClientId"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.61.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt; for <a class=\"struct\" href=\"workos/sso/struct.ConnectionId.html\" title=\"struct workos::sso::ConnectionId\">ConnectionId</a>","synthetic":false,"types":["workos::sso::types::connection::ConnectionId"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;'_ <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.61.0/std/primitive.str.html\">str</a>&gt; for <a class=\"struct\" href=\"workos/sso/struct.ConnectionId.html\" title=\"struct workos::sso::ConnectionId\">ConnectionId</a>","synthetic":false,"types":["workos::sso::types::connection::ConnectionId"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.61.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt; for <a class=\"struct\" href=\"workos/sso/struct.ProfileId.html\" title=\"struct workos::sso::ProfileId\">ProfileId</a>","synthetic":false,"types":["workos::sso::types::profile::ProfileId"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;'_ <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.61.0/std/primitive.str.html\">str</a>&gt; for <a class=\"struct\" href=\"workos/sso/struct.ProfileId.html\" title=\"struct workos::sso::ProfileId\">ProfileId</a>","synthetic":false,"types":["workos::sso::types::profile::ProfileId"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()