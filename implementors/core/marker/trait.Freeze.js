(function() {var implementors = {};
implementors["workos"] = [{"text":"impl&lt;E&gt; Freeze for <a class=\"enum\" href=\"workos/enum.WorkOsError.html\" title=\"enum workos::WorkOsError\">WorkOsError</a>&lt;E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: Freeze,&nbsp;</span>","synthetic":true,"types":["workos::core::error::WorkOsError"]},{"text":"impl Freeze for <a class=\"struct\" href=\"workos/struct.ApiKey.html\" title=\"struct workos::ApiKey\">ApiKey</a>","synthetic":true,"types":["workos::core::types::api_key::ApiKey"]},{"text":"impl&lt;T&gt; Freeze for <a class=\"struct\" href=\"workos/struct.PaginatedList.html\" title=\"struct workos::PaginatedList\">PaginatedList</a>&lt;T&gt;","synthetic":true,"types":["workos::core::types::paginated_list::PaginatedList"]},{"text":"impl Freeze for <a class=\"struct\" href=\"workos/struct.ListMetadata.html\" title=\"struct workos::ListMetadata\">ListMetadata</a>","synthetic":true,"types":["workos::core::types::paginated_list::ListMetadata"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"workos/struct.PaginationParams.html\" title=\"struct workos::PaginationParams\">PaginationParams</a>&lt;'a&gt;","synthetic":true,"types":["workos::core::types::pagination_params::PaginationParams"]},{"text":"impl Freeze for <a class=\"enum\" href=\"workos/enum.PaginationOrder.html\" title=\"enum workos::PaginationOrder\">PaginationOrder</a>","synthetic":true,"types":["workos::core::types::pagination_params::PaginationOrder"]},{"text":"impl Freeze for <a class=\"struct\" href=\"workos/struct.RawAttributes.html\" title=\"struct workos::RawAttributes\">RawAttributes</a>","synthetic":true,"types":["workos::core::types::raw_attributes::RawAttributes"]},{"text":"impl Freeze for <a class=\"struct\" href=\"workos/struct.Timestamp.html\" title=\"struct workos::Timestamp\">Timestamp</a>","synthetic":true,"types":["workos::core::types::timestamps::Timestamp"]},{"text":"impl Freeze for <a class=\"struct\" href=\"workos/struct.Timestamps.html\" title=\"struct workos::Timestamps\">Timestamps</a>","synthetic":true,"types":["workos::core::types::timestamps::Timestamps"]},{"text":"impl&lt;K, U&gt; Freeze for <a class=\"enum\" href=\"workos/enum.KnownOrUnknown.html\" title=\"enum workos::KnownOrUnknown\">KnownOrUnknown</a>&lt;K, U&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;U: Freeze,&nbsp;</span>","synthetic":true,"types":["workos::known_or_unknown::KnownOrUnknown"]},{"text":"impl Freeze for <a class=\"struct\" href=\"workos/struct.WorkOs.html\" title=\"struct workos::WorkOs\">WorkOs</a>","synthetic":true,"types":["workos::workos::WorkOs"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"workos/struct.WorkOsBuilder.html\" title=\"struct workos::WorkOsBuilder\">WorkOsBuilder</a>&lt;'a&gt;","synthetic":true,"types":["workos::workos::WorkOsBuilder"]},{"text":"impl Freeze for <a class=\"enum\" href=\"workos/admin_portal/enum.AdminPortalIntent.html\" title=\"enum workos::admin_portal::AdminPortalIntent\">AdminPortalIntent</a>","synthetic":true,"types":["workos::admin_portal::operations::generate_portal_link::AdminPortalIntent"]},{"text":"impl Freeze for <a class=\"enum\" href=\"workos/admin_portal/enum.AdminPortalTarget.html\" title=\"enum workos::admin_portal::AdminPortalTarget\">AdminPortalTarget</a>","synthetic":true,"types":["workos::admin_portal::operations::generate_portal_link::AdminPortalTarget"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"workos/admin_portal/struct.GeneratePortalLinkParams.html\" title=\"struct workos::admin_portal::GeneratePortalLinkParams\">GeneratePortalLinkParams</a>&lt;'a&gt;","synthetic":true,"types":["workos::admin_portal::operations::generate_portal_link::GeneratePortalLinkParams"]},{"text":"impl Freeze for <a class=\"struct\" href=\"workos/admin_portal/struct.GeneratePortalLinkResponse.html\" title=\"struct workos::admin_portal::GeneratePortalLinkResponse\">GeneratePortalLinkResponse</a>","synthetic":true,"types":["workos::admin_portal::operations::generate_portal_link::GeneratePortalLinkResponse"]},{"text":"impl Freeze for <a class=\"enum\" href=\"workos/admin_portal/enum.GeneratePortalLinkError.html\" title=\"enum workos::admin_portal::GeneratePortalLinkError\">GeneratePortalLinkError</a>","synthetic":true,"types":["workos::admin_portal::operations::generate_portal_link::GeneratePortalLinkError"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"workos/admin_portal/struct.AdminPortal.html\" title=\"struct workos::admin_portal::AdminPortal\">AdminPortal</a>&lt;'a&gt;","synthetic":true,"types":["workos::admin_portal::AdminPortal"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"workos/directory_sync/struct.DeleteDirectoryParams.html\" title=\"struct workos::directory_sync::DeleteDirectoryParams\">DeleteDirectoryParams</a>&lt;'a&gt;","synthetic":true,"types":["workos::directory_sync::operations::delete_directory::DeleteDirectoryParams"]},{"text":"impl Freeze for <a class=\"enum\" href=\"workos/directory_sync/enum.DeleteDirectoryError.html\" title=\"enum workos::directory_sync::DeleteDirectoryError\">DeleteDirectoryError</a>","synthetic":true,"types":["workos::directory_sync::operations::delete_directory::DeleteDirectoryError"]},{"text":"impl Freeze for <a class=\"enum\" href=\"workos/directory_sync/enum.GetDirectoryError.html\" title=\"enum workos::directory_sync::GetDirectoryError\">GetDirectoryError</a>","synthetic":true,"types":["workos::directory_sync::operations::get_directory::GetDirectoryError"]},{"text":"impl Freeze for <a class=\"enum\" href=\"workos/directory_sync/enum.GetDirectoryGroupError.html\" title=\"enum workos::directory_sync::GetDirectoryGroupError\">GetDirectoryGroupError</a>","synthetic":true,"types":["workos::directory_sync::operations::get_directory_group::GetDirectoryGroupError"]},{"text":"impl Freeze for <a class=\"enum\" href=\"workos/directory_sync/enum.GetDirectoryUserError.html\" title=\"enum workos::directory_sync::GetDirectoryUserError\">GetDirectoryUserError</a>","synthetic":true,"types":["workos::directory_sync::operations::get_directory_user::GetDirectoryUserError"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"workos/directory_sync/struct.ListDirectoriesParams.html\" title=\"struct workos::directory_sync::ListDirectoriesParams\">ListDirectoriesParams</a>&lt;'a&gt;","synthetic":true,"types":["workos::directory_sync::operations::list_directories::ListDirectoriesParams"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"enum\" href=\"workos/directory_sync/enum.DirectoryGroupsFilter.html\" title=\"enum workos::directory_sync::DirectoryGroupsFilter\">DirectoryGroupsFilter</a>&lt;'a&gt;","synthetic":true,"types":["workos::directory_sync::operations::list_directory_groups::DirectoryGroupsFilter"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"workos/directory_sync/struct.ListDirectoryGroupsParams.html\" title=\"struct workos::directory_sync::ListDirectoryGroupsParams\">ListDirectoryGroupsParams</a>&lt;'a&gt;","synthetic":true,"types":["workos::directory_sync::operations::list_directory_groups::ListDirectoryGroupsParams"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"enum\" href=\"workos/directory_sync/enum.DirectoryUsersFilter.html\" title=\"enum workos::directory_sync::DirectoryUsersFilter\">DirectoryUsersFilter</a>&lt;'a&gt;","synthetic":true,"types":["workos::directory_sync::operations::list_directory_users::DirectoryUsersFilter"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"workos/directory_sync/struct.ListDirectoryUsersParams.html\" title=\"struct workos::directory_sync::ListDirectoryUsersParams\">ListDirectoryUsersParams</a>&lt;'a&gt;","synthetic":true,"types":["workos::directory_sync::operations::list_directory_users::ListDirectoryUsersParams"]},{"text":"impl Freeze for <a class=\"struct\" href=\"workos/directory_sync/struct.DirectoryId.html\" title=\"struct workos::directory_sync::DirectoryId\">DirectoryId</a>","synthetic":true,"types":["workos::directory_sync::types::directory::DirectoryId"]},{"text":"impl Freeze for <a class=\"enum\" href=\"workos/directory_sync/enum.DirectoryState.html\" title=\"enum workos::directory_sync::DirectoryState\">DirectoryState</a>","synthetic":true,"types":["workos::directory_sync::types::directory::DirectoryState"]},{"text":"impl Freeze for <a class=\"struct\" href=\"workos/directory_sync/struct.Directory.html\" title=\"struct workos::directory_sync::Directory\">Directory</a>","synthetic":true,"types":["workos::directory_sync::types::directory::Directory"]},{"text":"impl Freeze for <a class=\"struct\" href=\"workos/directory_sync/struct.DirectoryGroupId.html\" title=\"struct workos::directory_sync::DirectoryGroupId\">DirectoryGroupId</a>","synthetic":true,"types":["workos::directory_sync::types::directory_group::DirectoryGroupId"]},{"text":"impl Freeze for <a class=\"struct\" href=\"workos/directory_sync/struct.DirectoryGroup.html\" title=\"struct workos::directory_sync::DirectoryGroup\">DirectoryGroup</a>","synthetic":true,"types":["workos::directory_sync::types::directory_group::DirectoryGroup"]},{"text":"impl Freeze for <a class=\"enum\" href=\"workos/directory_sync/enum.DirectoryType.html\" title=\"enum workos::directory_sync::DirectoryType\">DirectoryType</a>","synthetic":true,"types":["workos::directory_sync::types::directory_type::DirectoryType"]},{"text":"impl Freeze for <a class=\"struct\" href=\"workos/directory_sync/struct.DirectoryUserId.html\" title=\"struct workos::directory_sync::DirectoryUserId\">DirectoryUserId</a>","synthetic":true,"types":["workos::directory_sync::types::directory_user::DirectoryUserId"]},{"text":"impl&lt;TCustomAttributes&gt; Freeze for <a class=\"struct\" href=\"workos/directory_sync/struct.DirectoryUser.html\" title=\"struct workos::directory_sync::DirectoryUser\">DirectoryUser</a>&lt;TCustomAttributes&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;TCustomAttributes: Freeze,&nbsp;</span>","synthetic":true,"types":["workos::directory_sync::types::directory_user::DirectoryUser"]},{"text":"impl Freeze for <a class=\"enum\" href=\"workos/directory_sync/enum.DirectoryUserState.html\" title=\"enum workos::directory_sync::DirectoryUserState\">DirectoryUserState</a>","synthetic":true,"types":["workos::directory_sync::types::directory_user::DirectoryUserState"]},{"text":"impl Freeze for <a class=\"struct\" href=\"workos/directory_sync/struct.DirectoryUserEmail.html\" title=\"struct workos::directory_sync::DirectoryUserEmail\">DirectoryUserEmail</a>","synthetic":true,"types":["workos::directory_sync::types::directory_user::DirectoryUserEmail"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"workos/directory_sync/struct.DirectorySync.html\" title=\"struct workos::directory_sync::DirectorySync\">DirectorySync</a>&lt;'a&gt;","synthetic":true,"types":["workos::directory_sync::DirectorySync"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"enum\" href=\"workos/mfa/enum.ChallengeAuthenticationFactorType.html\" title=\"enum workos::mfa::ChallengeAuthenticationFactorType\">ChallengeAuthenticationFactorType</a>&lt;'a&gt;","synthetic":true,"types":["workos::mfa::operations::challenge_factor::ChallengeAuthenticationFactorType"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"workos/mfa/struct.ChallengeFactorParams.html\" title=\"struct workos::mfa::ChallengeFactorParams\">ChallengeFactorParams</a>&lt;'a&gt;","synthetic":true,"types":["workos::mfa::operations::challenge_factor::ChallengeFactorParams"]},{"text":"impl Freeze for <a class=\"enum\" href=\"workos/mfa/enum.ChallengeFactorError.html\" title=\"enum workos::mfa::ChallengeFactorError\">ChallengeFactorError</a>","synthetic":true,"types":["workos::mfa::operations::challenge_factor::ChallengeFactorError"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"enum\" href=\"workos/mfa/enum.EnrollFactorParams.html\" title=\"enum workos::mfa::EnrollFactorParams\">EnrollFactorParams</a>&lt;'a&gt;","synthetic":true,"types":["workos::mfa::operations::enroll_factor::EnrollFactorParams"]},{"text":"impl Freeze for <a class=\"enum\" href=\"workos/mfa/enum.EnrollFactorError.html\" title=\"enum workos::mfa::EnrollFactorError\">EnrollFactorError</a>","synthetic":true,"types":["workos::mfa::operations::enroll_factor::EnrollFactorError"]},{"text":"impl Freeze for <a class=\"struct\" href=\"workos/mfa/struct.VerifyFactorResponse.html\" title=\"struct workos::mfa::VerifyFactorResponse\">VerifyFactorResponse</a>","synthetic":true,"types":["workos::mfa::operations::verify_factor::VerifyFactorResponse"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"workos/mfa/struct.VerifyFactorParams.html\" title=\"struct workos::mfa::VerifyFactorParams\">VerifyFactorParams</a>&lt;'a&gt;","synthetic":true,"types":["workos::mfa::operations::verify_factor::VerifyFactorParams"]},{"text":"impl Freeze for <a class=\"enum\" href=\"workos/mfa/enum.VerifyFactorError.html\" title=\"enum workos::mfa::VerifyFactorError\">VerifyFactorError</a>","synthetic":true,"types":["workos::mfa::operations::verify_factor::VerifyFactorError"]},{"text":"impl Freeze for <a class=\"struct\" href=\"workos/mfa/struct.AuthenticationChallengeId.html\" title=\"struct workos::mfa::AuthenticationChallengeId\">AuthenticationChallengeId</a>","synthetic":true,"types":["workos::mfa::types::authentication_challenge::AuthenticationChallengeId"]},{"text":"impl Freeze for <a class=\"struct\" href=\"workos/mfa/struct.AuthenticationChallenge.html\" title=\"struct workos::mfa::AuthenticationChallenge\">AuthenticationChallenge</a>","synthetic":true,"types":["workos::mfa::types::authentication_challenge::AuthenticationChallenge"]},{"text":"impl Freeze for <a class=\"struct\" href=\"workos/mfa/struct.AuthenticationFactorId.html\" title=\"struct workos::mfa::AuthenticationFactorId\">AuthenticationFactorId</a>","synthetic":true,"types":["workos::mfa::types::authentication_factor::AuthenticationFactorId"]},{"text":"impl Freeze for <a class=\"struct\" href=\"workos/mfa/struct.AuthenticationFactor.html\" title=\"struct workos::mfa::AuthenticationFactor\">AuthenticationFactor</a>","synthetic":true,"types":["workos::mfa::types::authentication_factor::AuthenticationFactor"]},{"text":"impl Freeze for <a class=\"enum\" href=\"workos/mfa/enum.AuthenticationFactorType.html\" title=\"enum workos::mfa::AuthenticationFactorType\">AuthenticationFactorType</a>","synthetic":true,"types":["workos::mfa::types::authentication_factor::AuthenticationFactorType"]},{"text":"impl Freeze for <a class=\"struct\" href=\"workos/mfa/struct.MfaCode.html\" title=\"struct workos::mfa::MfaCode\">MfaCode</a>","synthetic":true,"types":["workos::mfa::types::mfa_code::MfaCode"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"workos/mfa/struct.Mfa.html\" title=\"struct workos::mfa::Mfa\">Mfa</a>&lt;'a&gt;","synthetic":true,"types":["workos::mfa::Mfa"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"workos/organizations/struct.CreateOrganizationParams.html\" title=\"struct workos::organizations::CreateOrganizationParams\">CreateOrganizationParams</a>&lt;'a&gt;","synthetic":true,"types":["workos::organizations::operations::create_organization::CreateOrganizationParams"]},{"text":"impl Freeze for <a class=\"enum\" href=\"workos/organizations/enum.CreateOrganizationError.html\" title=\"enum workos::organizations::CreateOrganizationError\">CreateOrganizationError</a>","synthetic":true,"types":["workos::organizations::operations::create_organization::CreateOrganizationError"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"workos/organizations/struct.DeleteOrganizationParams.html\" title=\"struct workos::organizations::DeleteOrganizationParams\">DeleteOrganizationParams</a>&lt;'a&gt;","synthetic":true,"types":["workos::organizations::operations::delete_organization::DeleteOrganizationParams"]},{"text":"impl Freeze for <a class=\"enum\" href=\"workos/organizations/enum.DeleteOrganizationError.html\" title=\"enum workos::organizations::DeleteOrganizationError\">DeleteOrganizationError</a>","synthetic":true,"types":["workos::organizations::operations::delete_organization::DeleteOrganizationError"]},{"text":"impl Freeze for <a class=\"enum\" href=\"workos/organizations/enum.GetOrganizationError.html\" title=\"enum workos::organizations::GetOrganizationError\">GetOrganizationError</a>","synthetic":true,"types":["workos::organizations::operations::get_organization::GetOrganizationError"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"workos/organizations/struct.DomainFilters.html\" title=\"struct workos::organizations::DomainFilters\">DomainFilters</a>&lt;'a&gt;","synthetic":true,"types":["workos::organizations::operations::list_organizations::DomainFilters"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"workos/organizations/struct.ListOrganizationsParams.html\" title=\"struct workos::organizations::ListOrganizationsParams\">ListOrganizationsParams</a>&lt;'a&gt;","synthetic":true,"types":["workos::organizations::operations::list_organizations::ListOrganizationsParams"]},{"text":"impl Freeze for <a class=\"enum\" href=\"workos/organizations/enum.ListOrganizationsError.html\" title=\"enum workos::organizations::ListOrganizationsError\">ListOrganizationsError</a>","synthetic":true,"types":["workos::organizations::operations::list_organizations::ListOrganizationsError"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"workos/organizations/struct.UpdateOrganizationParams.html\" title=\"struct workos::organizations::UpdateOrganizationParams\">UpdateOrganizationParams</a>&lt;'a&gt;","synthetic":true,"types":["workos::organizations::operations::update_organization::UpdateOrganizationParams"]},{"text":"impl Freeze for <a class=\"enum\" href=\"workos/organizations/enum.UpdateOrganizationError.html\" title=\"enum workos::organizations::UpdateOrganizationError\">UpdateOrganizationError</a>","synthetic":true,"types":["workos::organizations::operations::update_organization::UpdateOrganizationError"]},{"text":"impl Freeze for <a class=\"struct\" href=\"workos/organizations/struct.OrganizationId.html\" title=\"struct workos::organizations::OrganizationId\">OrganizationId</a>","synthetic":true,"types":["workos::organizations::types::organization::OrganizationId"]},{"text":"impl Freeze for <a class=\"struct\" href=\"workos/organizations/struct.Organization.html\" title=\"struct workos::organizations::Organization\">Organization</a>","synthetic":true,"types":["workos::organizations::types::organization::Organization"]},{"text":"impl Freeze for <a class=\"struct\" href=\"workos/organizations/struct.OrganizationDomainId.html\" title=\"struct workos::organizations::OrganizationDomainId\">OrganizationDomainId</a>","synthetic":true,"types":["workos::organizations::types::organization::OrganizationDomainId"]},{"text":"impl Freeze for <a class=\"struct\" href=\"workos/organizations/struct.OrganizationDomain.html\" title=\"struct workos::organizations::OrganizationDomain\">OrganizationDomain</a>","synthetic":true,"types":["workos::organizations::types::organization::OrganizationDomain"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"workos/organizations/struct.Organizations.html\" title=\"struct workos::organizations::Organizations\">Organizations</a>&lt;'a&gt;","synthetic":true,"types":["workos::organizations::Organizations"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"enum\" href=\"workos/passwordless/enum.CreatePasswordlessSessionType.html\" title=\"enum workos::passwordless::CreatePasswordlessSessionType\">CreatePasswordlessSessionType</a>&lt;'a&gt;","synthetic":true,"types":["workos::passwordless::operations::create_passwordless_session::CreatePasswordlessSessionType"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"workos/passwordless/struct.CreatePasswordlessSessionParams.html\" title=\"struct workos::passwordless::CreatePasswordlessSessionParams\">CreatePasswordlessSessionParams</a>&lt;'a&gt;","synthetic":true,"types":["workos::passwordless::operations::create_passwordless_session::CreatePasswordlessSessionParams"]},{"text":"impl Freeze for <a class=\"enum\" href=\"workos/passwordless/enum.CreatePasswordlessSessionError.html\" title=\"enum workos::passwordless::CreatePasswordlessSessionError\">CreatePasswordlessSessionError</a>","synthetic":true,"types":["workos::passwordless::operations::create_passwordless_session::CreatePasswordlessSessionError"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"workos/passwordless/struct.SendPasswordlessSessionParams.html\" title=\"struct workos::passwordless::SendPasswordlessSessionParams\">SendPasswordlessSessionParams</a>&lt;'a&gt;","synthetic":true,"types":["workos::passwordless::operations::send_passwordless_session::SendPasswordlessSessionParams"]},{"text":"impl Freeze for <a class=\"enum\" href=\"workos/passwordless/enum.SendPasswordlessSessionError.html\" title=\"enum workos::passwordless::SendPasswordlessSessionError\">SendPasswordlessSessionError</a>","synthetic":true,"types":["workos::passwordless::operations::send_passwordless_session::SendPasswordlessSessionError"]},{"text":"impl Freeze for <a class=\"struct\" href=\"workos/passwordless/struct.PasswordlessSessionId.html\" title=\"struct workos::passwordless::PasswordlessSessionId\">PasswordlessSessionId</a>","synthetic":true,"types":["workos::passwordless::types::passwordless_session::PasswordlessSessionId"]},{"text":"impl Freeze for <a class=\"enum\" href=\"workos/passwordless/enum.PasswordlessSessionType.html\" title=\"enum workos::passwordless::PasswordlessSessionType\">PasswordlessSessionType</a>","synthetic":true,"types":["workos::passwordless::types::passwordless_session::PasswordlessSessionType"]},{"text":"impl Freeze for <a class=\"struct\" href=\"workos/passwordless/struct.PasswordlessSession.html\" title=\"struct workos::passwordless::PasswordlessSession\">PasswordlessSession</a>","synthetic":true,"types":["workos::passwordless::types::passwordless_session::PasswordlessSession"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"workos/passwordless/struct.Passwordless.html\" title=\"struct workos::passwordless::Passwordless\">Passwordless</a>&lt;'a&gt;","synthetic":true,"types":["workos::passwordless::Passwordless"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"workos/sso/struct.DeleteConnectionParams.html\" title=\"struct workos::sso::DeleteConnectionParams\">DeleteConnectionParams</a>&lt;'a&gt;","synthetic":true,"types":["workos::sso::operations::delete_connection::DeleteConnectionParams"]},{"text":"impl Freeze for <a class=\"enum\" href=\"workos/sso/enum.DeleteConnectionError.html\" title=\"enum workos::sso::DeleteConnectionError\">DeleteConnectionError</a>","synthetic":true,"types":["workos::sso::operations::delete_connection::DeleteConnectionError"]},{"text":"impl Freeze for <a class=\"enum\" href=\"workos/sso/enum.Provider.html\" title=\"enum workos::sso::Provider\">Provider</a>","synthetic":true,"types":["workos::sso::operations::get_authorization_url::Provider"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"enum\" href=\"workos/sso/enum.ConnectionSelector.html\" title=\"enum workos::sso::ConnectionSelector\">ConnectionSelector</a>&lt;'a&gt;","synthetic":true,"types":["workos::sso::operations::get_authorization_url::ConnectionSelector"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"workos/sso/struct.GetAuthorizationUrlParams.html\" title=\"struct workos::sso::GetAuthorizationUrlParams\">GetAuthorizationUrlParams</a>&lt;'a&gt;","synthetic":true,"types":["workos::sso::operations::get_authorization_url::GetAuthorizationUrlParams"]},{"text":"impl Freeze for <a class=\"enum\" href=\"workos/sso/enum.GetConnectionError.html\" title=\"enum workos::sso::GetConnectionError\">GetConnectionError</a>","synthetic":true,"types":["workos::sso::operations::get_connection::GetConnectionError"]},{"text":"impl Freeze for <a class=\"enum\" href=\"workos/sso/enum.GetProfileError.html\" title=\"enum workos::sso::GetProfileError\">GetProfileError</a>","synthetic":true,"types":["workos::sso::operations::get_profile::GetProfileError"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"workos/sso/struct.GetProfileAndTokenParams.html\" title=\"struct workos::sso::GetProfileAndTokenParams\">GetProfileAndTokenParams</a>&lt;'a&gt;","synthetic":true,"types":["workos::sso::operations::get_profile_and_token::GetProfileAndTokenParams"]},{"text":"impl Freeze for <a class=\"struct\" href=\"workos/sso/struct.GetProfileAndTokenResponse.html\" title=\"struct workos::sso::GetProfileAndTokenResponse\">GetProfileAndTokenResponse</a>","synthetic":true,"types":["workos::sso::operations::get_profile_and_token::GetProfileAndTokenResponse"]},{"text":"impl Freeze for <a class=\"struct\" href=\"workos/sso/struct.GetProfileAndTokenError.html\" title=\"struct workos::sso::GetProfileAndTokenError\">GetProfileAndTokenError</a>","synthetic":true,"types":["workos::sso::operations::get_profile_and_token::GetProfileAndTokenError"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"workos/sso/struct.ListConnectionsParams.html\" title=\"struct workos::sso::ListConnectionsParams\">ListConnectionsParams</a>&lt;'a&gt;","synthetic":true,"types":["workos::sso::operations::list_connections::ListConnectionsParams"]},{"text":"impl Freeze for <a class=\"struct\" href=\"workos/sso/struct.AccessToken.html\" title=\"struct workos::sso::AccessToken\">AccessToken</a>","synthetic":true,"types":["workos::sso::types::access_token::AccessToken"]},{"text":"impl Freeze for <a class=\"struct\" href=\"workos/sso/struct.AuthorizationCode.html\" title=\"struct workos::sso::AuthorizationCode\">AuthorizationCode</a>","synthetic":true,"types":["workos::sso::types::authorization_code::AuthorizationCode"]},{"text":"impl Freeze for <a class=\"struct\" href=\"workos/sso/struct.ClientId.html\" title=\"struct workos::sso::ClientId\">ClientId</a>","synthetic":true,"types":["workos::sso::types::client_id::ClientId"]},{"text":"impl Freeze for <a class=\"struct\" href=\"workos/sso/struct.ConnectionId.html\" title=\"struct workos::sso::ConnectionId\">ConnectionId</a>","synthetic":true,"types":["workos::sso::types::connection::ConnectionId"]},{"text":"impl Freeze for <a class=\"enum\" href=\"workos/sso/enum.ConnectionState.html\" title=\"enum workos::sso::ConnectionState\">ConnectionState</a>","synthetic":true,"types":["workos::sso::types::connection::ConnectionState"]},{"text":"impl Freeze for <a class=\"struct\" href=\"workos/sso/struct.Connection.html\" title=\"struct workos::sso::Connection\">Connection</a>","synthetic":true,"types":["workos::sso::types::connection::Connection"]},{"text":"impl Freeze for <a class=\"enum\" href=\"workos/sso/enum.ConnectionType.html\" title=\"enum workos::sso::ConnectionType\">ConnectionType</a>","synthetic":true,"types":["workos::sso::types::connection_type::ConnectionType"]},{"text":"impl Freeze for <a class=\"struct\" href=\"workos/sso/struct.ProfileId.html\" title=\"struct workos::sso::ProfileId\">ProfileId</a>","synthetic":true,"types":["workos::sso::types::profile::ProfileId"]},{"text":"impl Freeze for <a class=\"struct\" href=\"workos/sso/struct.Profile.html\" title=\"struct workos::sso::Profile\">Profile</a>","synthetic":true,"types":["workos::sso::types::profile::Profile"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"workos/sso/struct.Sso.html\" title=\"struct workos::sso::Sso\">Sso</a>&lt;'a&gt;","synthetic":true,"types":["workos::sso::Sso"]},{"text":"impl Freeze for <a class=\"enum\" href=\"workos/webhooks/enum.DirectoryState.html\" title=\"enum workos::webhooks::DirectoryState\">DirectoryState</a>","synthetic":true,"types":["workos::webhooks::types::directory::DirectoryState"]},{"text":"impl Freeze for <a class=\"struct\" href=\"workos/webhooks/struct.Directory.html\" title=\"struct workos::webhooks::Directory\">Directory</a>","synthetic":true,"types":["workos::webhooks::types::directory::Directory"]},{"text":"impl Freeze for <a class=\"struct\" href=\"workos/webhooks/struct.ConnectionActivatedWebhook.html\" title=\"struct workos::webhooks::ConnectionActivatedWebhook\">ConnectionActivatedWebhook</a>","synthetic":true,"types":["workos::webhooks::types::events::connection_activated::ConnectionActivatedWebhook"]},{"text":"impl Freeze for <a class=\"struct\" href=\"workos/webhooks/struct.ConnectionDeactivatedWebhook.html\" title=\"struct workos::webhooks::ConnectionDeactivatedWebhook\">ConnectionDeactivatedWebhook</a>","synthetic":true,"types":["workos::webhooks::types::events::connection_deactivated::ConnectionDeactivatedWebhook"]},{"text":"impl Freeze for <a class=\"struct\" href=\"workos/webhooks/struct.ConnectionDeletedWebhook.html\" title=\"struct workos::webhooks::ConnectionDeletedWebhook\">ConnectionDeletedWebhook</a>","synthetic":true,"types":["workos::webhooks::types::events::connection_deleted::ConnectionDeletedWebhook"]},{"text":"impl Freeze for <a class=\"struct\" href=\"workos/webhooks/struct.DirectoryActivatedWebhook.html\" title=\"struct workos::webhooks::DirectoryActivatedWebhook\">DirectoryActivatedWebhook</a>","synthetic":true,"types":["workos::webhooks::types::events::directory_activated::DirectoryActivatedWebhook"]},{"text":"impl Freeze for <a class=\"struct\" href=\"workos/webhooks/struct.DirectoryDeactivatedWebhook.html\" title=\"struct workos::webhooks::DirectoryDeactivatedWebhook\">DirectoryDeactivatedWebhook</a>","synthetic":true,"types":["workos::webhooks::types::events::directory_deactivated::DirectoryDeactivatedWebhook"]},{"text":"impl Freeze for <a class=\"struct\" href=\"workos/webhooks/struct.DirectoryDeletedWebhook.html\" title=\"struct workos::webhooks::DirectoryDeletedWebhook\">DirectoryDeletedWebhook</a>","synthetic":true,"types":["workos::webhooks::types::events::directory_deleted::DirectoryDeletedWebhook"]},{"text":"impl Freeze for <a class=\"struct\" href=\"workos/webhooks/struct.DirectoryUserCreatedWebhook.html\" title=\"struct workos::webhooks::DirectoryUserCreatedWebhook\">DirectoryUserCreatedWebhook</a>","synthetic":true,"types":["workos::webhooks::types::events::directory_user_created::DirectoryUserCreatedWebhook"]},{"text":"impl Freeze for <a class=\"struct\" href=\"workos/webhooks/struct.DirectoryUserDeletedWebhook.html\" title=\"struct workos::webhooks::DirectoryUserDeletedWebhook\">DirectoryUserDeletedWebhook</a>","synthetic":true,"types":["workos::webhooks::types::events::directory_user_deleted::DirectoryUserDeletedWebhook"]},{"text":"impl Freeze for <a class=\"struct\" href=\"workos/webhooks/struct.DirectoryUserWithPreviousAttributes.html\" title=\"struct workos::webhooks::DirectoryUserWithPreviousAttributes\">DirectoryUserWithPreviousAttributes</a>","synthetic":true,"types":["workos::webhooks::types::events::directory_user_updated::DirectoryUserWithPreviousAttributes"]},{"text":"impl Freeze for <a class=\"struct\" href=\"workos/webhooks/struct.DirectoryUserUpdatedWebhook.html\" title=\"struct workos::webhooks::DirectoryUserUpdatedWebhook\">DirectoryUserUpdatedWebhook</a>","synthetic":true,"types":["workos::webhooks::types::events::directory_user_updated::DirectoryUserUpdatedWebhook"]},{"text":"impl Freeze for <a class=\"struct\" href=\"workos/webhooks/struct.WebhookId.html\" title=\"struct workos::webhooks::WebhookId\">WebhookId</a>","synthetic":true,"types":["workos::webhooks::types::webhook::WebhookId"]},{"text":"impl Freeze for <a class=\"struct\" href=\"workos/webhooks/struct.Webhook.html\" title=\"struct workos::webhooks::Webhook\">Webhook</a>","synthetic":true,"types":["workos::webhooks::types::webhook::Webhook"]},{"text":"impl Freeze for <a class=\"enum\" href=\"workos/webhooks/enum.WebhookEvent.html\" title=\"enum workos::webhooks::WebhookEvent\">WebhookEvent</a>","synthetic":true,"types":["workos::webhooks::types::webhook_event::WebhookEvent"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()