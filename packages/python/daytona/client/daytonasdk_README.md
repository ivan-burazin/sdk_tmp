# daytonasdk
Daytona Server API

The `daytonasdk` package is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: v0.0.0-dev
- Package version: 1.0.0
- Generator version: 7.10.0
- Build package: org.openapitools.codegen.languages.PythonClientCodegen

## Requirements.

Python 3.8+

## Installation & Usage

This python library package is generated without supporting files like setup.py or requirements files

To be able to use it, you will need these dependencies in your own package that uses this library:

* urllib3 >= 1.25.3, < 3.0.0
* python-dateutil >= 2.8.2
* pydantic >= 2
* typing-extensions >= 4.7.1

## Getting Started

In your own code, to use this library to connect and interact with daytonasdk,
you can run the following:

```python

import daytonasdk
from daytonasdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:3986
# See configuration.py for a list of all supported configuration parameters.
configuration = daytonasdk.Configuration(
    host = "http://localhost:3986"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'


# Enter a context with an instance of the API client
with daytonasdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = daytonasdk.ApiKeyApi(api_client)
    api_key_name = 'api_key_name_example' # str | API key name

    try:
        # Generate an API key
        api_response = api_instance.generate_api_key(api_key_name)
        print("The response of ApiKeyApi->generate_api_key:\n")
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling ApiKeyApi->generate_api_key: %s\n" % e)

```

## Documentation for API Endpoints

All URIs are relative to *http://localhost:3986*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*ApiKeyApi* | [**generate_api_key**](daytonasdk/docs/ApiKeyApi.md#generate_api_key) | **POST** /apikey/{apiKeyName} | Generate an API key
*ApiKeyApi* | [**list_client_api_keys**](daytonasdk/docs/ApiKeyApi.md#list_client_api_keys) | **GET** /apikey | List API keys
*ApiKeyApi* | [**revoke_api_key**](daytonasdk/docs/ApiKeyApi.md#revoke_api_key) | **DELETE** /apikey/{apiKeyName} | Revoke API key
*BuildApi* | [**create_build**](daytonasdk/docs/BuildApi.md#create_build) | **POST** /build | Create a build
*BuildApi* | [**delete_all_builds**](daytonasdk/docs/BuildApi.md#delete_all_builds) | **DELETE** /build | Delete ALL builds
*BuildApi* | [**delete_build**](daytonasdk/docs/BuildApi.md#delete_build) | **DELETE** /build/{buildId} | Delete build
*BuildApi* | [**delete_builds_from_prebuild**](daytonasdk/docs/BuildApi.md#delete_builds_from_prebuild) | **DELETE** /build/prebuild/{prebuildId} | Delete builds
*BuildApi* | [**get_build**](daytonasdk/docs/BuildApi.md#get_build) | **GET** /build/{buildId} | Get build data
*BuildApi* | [**list_builds**](daytonasdk/docs/BuildApi.md#list_builds) | **GET** /build | List builds
*ContainerRegistryApi* | [**get_container_registry**](daytonasdk/docs/ContainerRegistryApi.md#get_container_registry) | **GET** /container-registry/{server} | Get container registry credentials
*ContainerRegistryApi* | [**list_container_registries**](daytonasdk/docs/ContainerRegistryApi.md#list_container_registries) | **GET** /container-registry | List container registries
*ContainerRegistryApi* | [**remove_container_registry**](daytonasdk/docs/ContainerRegistryApi.md#remove_container_registry) | **DELETE** /container-registry/{server} | Remove a container registry credentials
*ContainerRegistryApi* | [**set_container_registry**](daytonasdk/docs/ContainerRegistryApi.md#set_container_registry) | **PUT** /container-registry/{server} | Set container registry credentials
*DefaultApi* | [**health_check**](daytonasdk/docs/DefaultApi.md#health_check) | **GET** /health | Health check
*GitProviderApi* | [**get_git_context**](daytonasdk/docs/GitProviderApi.md#get_git_context) | **POST** /gitprovider/context | Get Git context
*GitProviderApi* | [**get_git_provider**](daytonasdk/docs/GitProviderApi.md#get_git_provider) | **GET** /gitprovider/{gitProviderId} | Get Git provider
*GitProviderApi* | [**get_git_provider_id_for_url**](daytonasdk/docs/GitProviderApi.md#get_git_provider_id_for_url) | **GET** /gitprovider/id-for-url/{url} | Get Git provider ID
*GitProviderApi* | [**get_git_user**](daytonasdk/docs/GitProviderApi.md#get_git_user) | **GET** /gitprovider/{gitProviderId}/user | Get Git context
*GitProviderApi* | [**get_namespaces**](daytonasdk/docs/GitProviderApi.md#get_namespaces) | **GET** /gitprovider/{gitProviderId}/namespaces | Get Git namespaces
*GitProviderApi* | [**get_repo_branches**](daytonasdk/docs/GitProviderApi.md#get_repo_branches) | **GET** /gitprovider/{gitProviderId}/{namespaceId}/{repositoryId}/branches | Get Git repository branches
*GitProviderApi* | [**get_repo_prs**](daytonasdk/docs/GitProviderApi.md#get_repo_prs) | **GET** /gitprovider/{gitProviderId}/{namespaceId}/{repositoryId}/pull-requests | Get Git repository PRs
*GitProviderApi* | [**get_repositories**](daytonasdk/docs/GitProviderApi.md#get_repositories) | **GET** /gitprovider/{gitProviderId}/{namespaceId}/repositories | Get Git repositories
*GitProviderApi* | [**get_url_from_repository**](daytonasdk/docs/GitProviderApi.md#get_url_from_repository) | **POST** /gitprovider/context/url | Get URL from Git repository
*GitProviderApi* | [**list_git_providers**](daytonasdk/docs/GitProviderApi.md#list_git_providers) | **GET** /gitprovider | List Git providers
*GitProviderApi* | [**list_git_providers_for_url**](daytonasdk/docs/GitProviderApi.md#list_git_providers_for_url) | **GET** /gitprovider/for-url/{url} | List Git providers for url
*GitProviderApi* | [**remove_git_provider**](daytonasdk/docs/GitProviderApi.md#remove_git_provider) | **DELETE** /gitprovider/{gitProviderId} | Remove Git provider
*GitProviderApi* | [**set_git_provider**](daytonasdk/docs/GitProviderApi.md#set_git_provider) | **PUT** /gitprovider | Set Git provider
*PrebuildApi* | [**delete_prebuild**](daytonasdk/docs/PrebuildApi.md#delete_prebuild) | **DELETE** /project-config/{configName}/prebuild/{prebuildId} | Delete prebuild
*PrebuildApi* | [**get_prebuild**](daytonasdk/docs/PrebuildApi.md#get_prebuild) | **GET** /project-config/{configName}/prebuild/{prebuildId} | Get prebuild
*PrebuildApi* | [**list_prebuilds**](daytonasdk/docs/PrebuildApi.md#list_prebuilds) | **GET** /project-config/prebuild | List prebuilds
*PrebuildApi* | [**list_prebuilds_for_project_config**](daytonasdk/docs/PrebuildApi.md#list_prebuilds_for_project_config) | **GET** /project-config/{configName}/prebuild | List prebuilds for project config
*PrebuildApi* | [**process_git_event**](daytonasdk/docs/PrebuildApi.md#process_git_event) | **POST** /project-config/prebuild/process-git-event | ProcessGitEvent
*PrebuildApi* | [**set_prebuild**](daytonasdk/docs/PrebuildApi.md#set_prebuild) | **PUT** /project-config/{configName}/prebuild | Set prebuild
*ProfileApi* | [**delete_profile_data**](daytonasdk/docs/ProfileApi.md#delete_profile_data) | **DELETE** /profile | Delete profile data
*ProfileApi* | [**get_profile_data**](daytonasdk/docs/ProfileApi.md#get_profile_data) | **GET** /profile | Get profile data
*ProfileApi* | [**set_profile_data**](daytonasdk/docs/ProfileApi.md#set_profile_data) | **PUT** /profile | Set profile data
*ProjectConfigApi* | [**delete_project_config**](daytonasdk/docs/ProjectConfigApi.md#delete_project_config) | **DELETE** /project-config/{configName} | Delete project config data
*ProjectConfigApi* | [**get_default_project_config**](daytonasdk/docs/ProjectConfigApi.md#get_default_project_config) | **GET** /project-config/default/{gitUrl} | Get project configs by git url
*ProjectConfigApi* | [**get_project_config**](daytonasdk/docs/ProjectConfigApi.md#get_project_config) | **GET** /project-config/{configName} | Get project config data
*ProjectConfigApi* | [**list_project_configs**](daytonasdk/docs/ProjectConfigApi.md#list_project_configs) | **GET** /project-config | List project configs
*ProjectConfigApi* | [**set_default_project_config**](daytonasdk/docs/ProjectConfigApi.md#set_default_project_config) | **PATCH** /project-config/{configName}/set-default | Set project config to default
*ProjectConfigApi* | [**set_project_config**](daytonasdk/docs/ProjectConfigApi.md#set_project_config) | **PUT** /project-config | Set project config data
*ProviderApi* | [**get_target_manifest**](daytonasdk/docs/ProviderApi.md#get_target_manifest) | **GET** /provider/{provider}/target-manifest | Get provider target manifest
*ProviderApi* | [**install_provider**](daytonasdk/docs/ProviderApi.md#install_provider) | **POST** /provider/install | Install a provider
*ProviderApi* | [**list_providers**](daytonasdk/docs/ProviderApi.md#list_providers) | **GET** /provider | List providers
*ProviderApi* | [**uninstall_provider**](daytonasdk/docs/ProviderApi.md#uninstall_provider) | **POST** /provider/{provider}/uninstall | Uninstall a provider
*SampleApi* | [**list_samples**](daytonasdk/docs/SampleApi.md#list_samples) | **GET** /sample | List samples
*ServerApi* | [**generate_network_key**](daytonasdk/docs/ServerApi.md#generate_network_key) | **POST** /server/network-key | Generate a new authentication key
*ServerApi* | [**get_config**](daytonasdk/docs/ServerApi.md#get_config) | **GET** /server/config | Get the server configuration
*ServerApi* | [**get_server_log_files**](daytonasdk/docs/ServerApi.md#get_server_log_files) | **GET** /server/logs | List server log files
*ServerApi* | [**set_config**](daytonasdk/docs/ServerApi.md#set_config) | **POST** /server/config | Set the server configuration
*TargetApi* | [**list_targets**](daytonasdk/docs/TargetApi.md#list_targets) | **GET** /target | List targets
*TargetApi* | [**remove_target**](daytonasdk/docs/TargetApi.md#remove_target) | **DELETE** /target/{target} | Remove a target
*TargetApi* | [**set_default_target**](daytonasdk/docs/TargetApi.md#set_default_target) | **PATCH** /target/{target}/set-default | Set target to default
*TargetApi* | [**set_target**](daytonasdk/docs/TargetApi.md#set_target) | **PUT** /target | Set a target
*WorkspaceApi* | [**create_workspace**](daytonasdk/docs/WorkspaceApi.md#create_workspace) | **POST** /workspace | Create a workspace
*WorkspaceApi* | [**get_workspace**](daytonasdk/docs/WorkspaceApi.md#get_workspace) | **GET** /workspace/{workspaceId} | Get workspace info
*WorkspaceApi* | [**list_workspaces**](daytonasdk/docs/WorkspaceApi.md#list_workspaces) | **GET** /workspace | List workspaces
*WorkspaceApi* | [**remove_workspace**](daytonasdk/docs/WorkspaceApi.md#remove_workspace) | **DELETE** /workspace/{workspaceId} | Remove workspace
*WorkspaceApi* | [**set_project_state**](daytonasdk/docs/WorkspaceApi.md#set_project_state) | **POST** /workspace/{workspaceId}/{projectId}/state | Set project state
*WorkspaceApi* | [**start_project**](daytonasdk/docs/WorkspaceApi.md#start_project) | **POST** /workspace/{workspaceId}/{projectId}/start | Start project
*WorkspaceApi* | [**start_workspace**](daytonasdk/docs/WorkspaceApi.md#start_workspace) | **POST** /workspace/{workspaceId}/start | Start workspace
*WorkspaceApi* | [**stop_project**](daytonasdk/docs/WorkspaceApi.md#stop_project) | **POST** /workspace/{workspaceId}/{projectId}/stop | Stop project
*WorkspaceApi* | [**stop_workspace**](daytonasdk/docs/WorkspaceApi.md#stop_workspace) | **POST** /workspace/{workspaceId}/stop | Stop workspace
*WorkspaceToolboxApi* | [**fs_create_folder**](daytonasdk/docs/WorkspaceToolboxApi.md#fs_create_folder) | **POST** /workspace/{workspaceId}/{projectId}/toolbox/files/createfolder | Create folder
*WorkspaceToolboxApi* | [**fs_delete_file**](daytonasdk/docs/WorkspaceToolboxApi.md#fs_delete_file) | **DELETE** /workspace/{workspaceId}/{projectId}/toolbox/files | Delete file
*WorkspaceToolboxApi* | [**fs_download_file**](daytonasdk/docs/WorkspaceToolboxApi.md#fs_download_file) | **GET** /workspace/{workspaceId}/{projectId}/toolbox/files/download | Download file
*WorkspaceToolboxApi* | [**fs_find_in_files**](daytonasdk/docs/WorkspaceToolboxApi.md#fs_find_in_files) | **GET** /workspace/{workspaceId}/{projectId}/toolbox/files/find | Search for text/pattern in files
*WorkspaceToolboxApi* | [**fs_get_file_details**](daytonasdk/docs/WorkspaceToolboxApi.md#fs_get_file_details) | **GET** /workspace/{workspaceId}/{projectId}/toolbox/files/info | Get file info
*WorkspaceToolboxApi* | [**fs_list_files**](daytonasdk/docs/WorkspaceToolboxApi.md#fs_list_files) | **GET** /workspace/{workspaceId}/{projectId}/toolbox/files | List files
*WorkspaceToolboxApi* | [**fs_move_file**](daytonasdk/docs/WorkspaceToolboxApi.md#fs_move_file) | **POST** /workspace/{workspaceId}/{projectId}/toolbox/files/move | Create folder
*WorkspaceToolboxApi* | [**fs_replace_in_files**](daytonasdk/docs/WorkspaceToolboxApi.md#fs_replace_in_files) | **POST** /workspace/{workspaceId}/{projectId}/toolbox/files/replace | Repleace text/pattern in files
*WorkspaceToolboxApi* | [**fs_search_files**](daytonasdk/docs/WorkspaceToolboxApi.md#fs_search_files) | **GET** /workspace/{workspaceId}/{projectId}/toolbox/files/search | Search for files
*WorkspaceToolboxApi* | [**fs_set_file_permissions**](daytonasdk/docs/WorkspaceToolboxApi.md#fs_set_file_permissions) | **POST** /workspace/{workspaceId}/{projectId}/toolbox/files/permissions | Set file owner/group/permissions
*WorkspaceToolboxApi* | [**fs_upload_file**](daytonasdk/docs/WorkspaceToolboxApi.md#fs_upload_file) | **POST** /workspace/{workspaceId}/{projectId}/toolbox/files/upload | Upload file
*WorkspaceToolboxApi* | [**get_project_dir**](daytonasdk/docs/WorkspaceToolboxApi.md#get_project_dir) | **GET** /workspace/{workspaceId}/{projectId}/toolbox/projectdir | Get project dir
*WorkspaceToolboxApi* | [**git_add_files**](daytonasdk/docs/WorkspaceToolboxApi.md#git_add_files) | **POST** /workspace/{workspaceId}/{projectId}/toolbox/git/add | Add files
*WorkspaceToolboxApi* | [**git_branch_list**](daytonasdk/docs/WorkspaceToolboxApi.md#git_branch_list) | **GET** /workspace/{workspaceId}/{projectId}/toolbox/git/branchs | Get branch list
*WorkspaceToolboxApi* | [**git_clone_repository**](daytonasdk/docs/WorkspaceToolboxApi.md#git_clone_repository) | **POST** /workspace/{workspaceId}/{projectId}/toolbox/git/clone | Clone git repository
*WorkspaceToolboxApi* | [**git_commit_changes**](daytonasdk/docs/WorkspaceToolboxApi.md#git_commit_changes) | **POST** /workspace/{workspaceId}/{projectId}/toolbox/git/commit | Commit changes
*WorkspaceToolboxApi* | [**git_commit_history**](daytonasdk/docs/WorkspaceToolboxApi.md#git_commit_history) | **GET** /workspace/{workspaceId}/{projectId}/toolbox/git/history | Get commit history
*WorkspaceToolboxApi* | [**git_create_branch**](daytonasdk/docs/WorkspaceToolboxApi.md#git_create_branch) | **POST** /workspace/{workspaceId}/{projectId}/toolbox/git/branchs | Create branch
*WorkspaceToolboxApi* | [**git_git_status**](daytonasdk/docs/WorkspaceToolboxApi.md#git_git_status) | **GET** /workspace/{workspaceId}/{projectId}/toolbox/git/status | Get git status
*WorkspaceToolboxApi* | [**git_pull_changes**](daytonasdk/docs/WorkspaceToolboxApi.md#git_pull_changes) | **POST** /workspace/{workspaceId}/{projectId}/toolbox/git/pull | Pull changes
*WorkspaceToolboxApi* | [**git_push_changes**](daytonasdk/docs/WorkspaceToolboxApi.md#git_push_changes) | **POST** /workspace/{workspaceId}/{projectId}/toolbox/git/push | Push changes
*WorkspaceToolboxApi* | [**lsp_completions**](daytonasdk/docs/WorkspaceToolboxApi.md#lsp_completions) | **POST** /workspace/{workspaceId}/{projectId}/toolbox/lsp/completions | Get Lsp Completions
*WorkspaceToolboxApi* | [**lsp_did_close**](daytonasdk/docs/WorkspaceToolboxApi.md#lsp_did_close) | **POST** /workspace/{workspaceId}/{projectId}/toolbox/lsp/didclose | Call Lsp DidClose
*WorkspaceToolboxApi* | [**lsp_did_open**](daytonasdk/docs/WorkspaceToolboxApi.md#lsp_did_open) | **POST** /workspace/{workspaceId}/{projectId}/toolbox/lsp/didopen | Call Lsp DidOpen
*WorkspaceToolboxApi* | [**lsp_document_symbols**](daytonasdk/docs/WorkspaceToolboxApi.md#lsp_document_symbols) | **GET** /workspace/{workspaceId}/{projectId}/toolbox/lsp/documentsymbols | Call Lsp DocumentSymbols
*WorkspaceToolboxApi* | [**lsp_start**](daytonasdk/docs/WorkspaceToolboxApi.md#lsp_start) | **POST** /workspace/{workspaceId}/{projectId}/toolbox/lsp/start | Start Lsp server
*WorkspaceToolboxApi* | [**lsp_stop**](daytonasdk/docs/WorkspaceToolboxApi.md#lsp_stop) | **POST** /workspace/{workspaceId}/{projectId}/toolbox/lsp/stop | Stop Lsp server
*WorkspaceToolboxApi* | [**lsp_workspace_symbols**](daytonasdk/docs/WorkspaceToolboxApi.md#lsp_workspace_symbols) | **GET** /workspace/{workspaceId}/{projectId}/toolbox/lsp/workspaceSymbols | Call Lsp WorkspaceSymbols
*WorkspaceToolboxApi* | [**process_execute_command**](daytonasdk/docs/WorkspaceToolboxApi.md#process_execute_command) | **POST** /workspace/{workspaceId}/{projectId}/toolbox/process/execute | Execute command


## Documentation For Models

 - [ApiKey](daytonasdk/docs/ApiKey.md)
 - [ApikeyApiKeyType](daytonasdk/docs/ApikeyApiKeyType.md)
 - [Build](daytonasdk/docs/Build.md)
 - [BuildBuildState](daytonasdk/docs/BuildBuildState.md)
 - [BuildConfig](daytonasdk/docs/BuildConfig.md)
 - [CachedBuild](daytonasdk/docs/CachedBuild.md)
 - [CloneTarget](daytonasdk/docs/CloneTarget.md)
 - [CompletionContext](daytonasdk/docs/CompletionContext.md)
 - [CompletionItem](daytonasdk/docs/CompletionItem.md)
 - [CompletionList](daytonasdk/docs/CompletionList.md)
 - [ContainerConfig](daytonasdk/docs/ContainerConfig.md)
 - [ContainerRegistry](daytonasdk/docs/ContainerRegistry.md)
 - [CreateBuildDTO](daytonasdk/docs/CreateBuildDTO.md)
 - [CreatePrebuildDTO](daytonasdk/docs/CreatePrebuildDTO.md)
 - [CreateProjectConfigDTO](daytonasdk/docs/CreateProjectConfigDTO.md)
 - [CreateProjectDTO](daytonasdk/docs/CreateProjectDTO.md)
 - [CreateProjectSourceDTO](daytonasdk/docs/CreateProjectSourceDTO.md)
 - [CreateProviderTargetDTO](daytonasdk/docs/CreateProviderTargetDTO.md)
 - [CreateWorkspaceDTO](daytonasdk/docs/CreateWorkspaceDTO.md)
 - [DevcontainerConfig](daytonasdk/docs/DevcontainerConfig.md)
 - [ExecuteRequest](daytonasdk/docs/ExecuteRequest.md)
 - [ExecuteResponse](daytonasdk/docs/ExecuteResponse.md)
 - [FRPSConfig](daytonasdk/docs/FRPSConfig.md)
 - [FileInfo](daytonasdk/docs/FileInfo.md)
 - [FileStatus](daytonasdk/docs/FileStatus.md)
 - [GetRepositoryContext](daytonasdk/docs/GetRepositoryContext.md)
 - [GitAddRequest](daytonasdk/docs/GitAddRequest.md)
 - [GitBranch](daytonasdk/docs/GitBranch.md)
 - [GitBranchRequest](daytonasdk/docs/GitBranchRequest.md)
 - [GitCloneRequest](daytonasdk/docs/GitCloneRequest.md)
 - [GitCommitInfo](daytonasdk/docs/GitCommitInfo.md)
 - [GitCommitRequest](daytonasdk/docs/GitCommitRequest.md)
 - [GitCommitResponse](daytonasdk/docs/GitCommitResponse.md)
 - [GitNamespace](daytonasdk/docs/GitNamespace.md)
 - [GitProvider](daytonasdk/docs/GitProvider.md)
 - [GitPullRequest](daytonasdk/docs/GitPullRequest.md)
 - [GitRepoRequest](daytonasdk/docs/GitRepoRequest.md)
 - [GitRepository](daytonasdk/docs/GitRepository.md)
 - [GitStatus](daytonasdk/docs/GitStatus.md)
 - [GitUser](daytonasdk/docs/GitUser.md)
 - [InstallProviderRequest](daytonasdk/docs/InstallProviderRequest.md)
 - [ListBranchResponse](daytonasdk/docs/ListBranchResponse.md)
 - [LogFileConfig](daytonasdk/docs/LogFileConfig.md)
 - [LspCompletionParams](daytonasdk/docs/LspCompletionParams.md)
 - [LspDocumentRequest](daytonasdk/docs/LspDocumentRequest.md)
 - [LspLocation](daytonasdk/docs/LspLocation.md)
 - [LspPosition](daytonasdk/docs/LspPosition.md)
 - [LspRange](daytonasdk/docs/LspRange.md)
 - [LspServerRequest](daytonasdk/docs/LspServerRequest.md)
 - [LspSymbol](daytonasdk/docs/LspSymbol.md)
 - [Match](daytonasdk/docs/Match.md)
 - [NetworkKey](daytonasdk/docs/NetworkKey.md)
 - [Position](daytonasdk/docs/Position.md)
 - [PrebuildConfig](daytonasdk/docs/PrebuildConfig.md)
 - [PrebuildDTO](daytonasdk/docs/PrebuildDTO.md)
 - [ProfileData](daytonasdk/docs/ProfileData.md)
 - [Project](daytonasdk/docs/Project.md)
 - [ProjectConfig](daytonasdk/docs/ProjectConfig.md)
 - [ProjectDirResponse](daytonasdk/docs/ProjectDirResponse.md)
 - [ProjectInfo](daytonasdk/docs/ProjectInfo.md)
 - [ProjectState](daytonasdk/docs/ProjectState.md)
 - [Provider](daytonasdk/docs/Provider.md)
 - [ProviderProviderInfo](daytonasdk/docs/ProviderProviderInfo.md)
 - [ProviderProviderTargetProperty](daytonasdk/docs/ProviderProviderTargetProperty.md)
 - [ProviderProviderTargetPropertyType](daytonasdk/docs/ProviderProviderTargetPropertyType.md)
 - [ProviderTarget](daytonasdk/docs/ProviderTarget.md)
 - [ReplaceRequest](daytonasdk/docs/ReplaceRequest.md)
 - [ReplaceResult](daytonasdk/docs/ReplaceResult.md)
 - [RepositoryUrl](daytonasdk/docs/RepositoryUrl.md)
 - [Sample](daytonasdk/docs/Sample.md)
 - [SearchFilesResponse](daytonasdk/docs/SearchFilesResponse.md)
 - [ServerConfig](daytonasdk/docs/ServerConfig.md)
 - [SetGitProviderConfig](daytonasdk/docs/SetGitProviderConfig.md)
 - [SetProjectState](daytonasdk/docs/SetProjectState.md)
 - [SigningMethod](daytonasdk/docs/SigningMethod.md)
 - [Status](daytonasdk/docs/Status.md)
 - [Workspace](daytonasdk/docs/Workspace.md)
 - [WorkspaceDTO](daytonasdk/docs/WorkspaceDTO.md)
 - [WorkspaceInfo](daytonasdk/docs/WorkspaceInfo.md)


<a id="documentation-for-authorization"></a>
## Documentation For Authorization


Authentication schemes defined for the API:
<a id="Bearer"></a>
### Bearer

- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header


## Author



