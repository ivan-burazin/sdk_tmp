# coding: utf-8

"""
    Daytona Server API

    Daytona Server API

    The version of the OpenAPI document: v0.0.0-dev
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import unittest

from daytona_sdk.models.workspace_dto import WorkspaceDTO

class TestWorkspaceDTO(unittest.TestCase):
    """WorkspaceDTO unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> WorkspaceDTO:
        """Test WorkspaceDTO
            include_optional is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `WorkspaceDTO`
        """
        model = WorkspaceDTO()
        if include_optional:
            return WorkspaceDTO(
                id = '',
                info = daytona_sdk.models.workspace_info.WorkspaceInfo(
                    name = '', 
                    projects = [
                        daytona_sdk.models.project_info.ProjectInfo(
                            created = '', 
                            is_running = True, 
                            name = '', 
                            provider_metadata = '', 
                            workspace_id = '', )
                        ], 
                    provider_metadata = '', ),
                name = '',
                projects = [
                    daytona_sdk.models.project.Project(
                        build_config = daytona_sdk.models.build_config.BuildConfig(
                            cached_build = daytona_sdk.models.cached_build.CachedBuild(
                                image = '', 
                                user = '', ), 
                            devcontainer = daytona_sdk.models.devcontainer_config.DevcontainerConfig(
                                file_path = '', ), ), 
                        env_vars = {
                            'key' : ''
                            }, 
                        git_provider_config_id = '', 
                        image = '', 
                        name = '', 
                        repository = daytona_sdk.models.git_repository.GitRepository(
                            branch = '', 
                            clone_target = 'branch', 
                            id = '', 
                            name = '', 
                            owner = '', 
                            path = '', 
                            pr_number = 56, 
                            sha = '', 
                            source = '', 
                            url = '', ), 
                        state = daytona_sdk.models.project_state.ProjectState(
                            git_status = daytona_sdk.models.git_status.GitStatus(
                                ahead = 56, 
                                behind = 56, 
                                branch_published = True, 
                                current_branch = '', 
                                file_status = [
                                    daytona_sdk.models.file_status.FileStatus(
                                        extra = '', 
                                        name = '', 
                                        staging = 'Unmodified', 
                                        worktree = 'Unmodified', )
                                    ], ), 
                            updated_at = '', 
                            uptime = 56, ), 
                        target = '', 
                        user = '', 
                        workspace_id = '', )
                    ],
                target = ''
            )
        else:
            return WorkspaceDTO(
                id = '',
                name = '',
                projects = [
                    daytona_sdk.models.project.Project(
                        build_config = daytona_sdk.models.build_config.BuildConfig(
                            cached_build = daytona_sdk.models.cached_build.CachedBuild(
                                image = '', 
                                user = '', ), 
                            devcontainer = daytona_sdk.models.devcontainer_config.DevcontainerConfig(
                                file_path = '', ), ), 
                        env_vars = {
                            'key' : ''
                            }, 
                        git_provider_config_id = '', 
                        image = '', 
                        name = '', 
                        repository = daytona_sdk.models.git_repository.GitRepository(
                            branch = '', 
                            clone_target = 'branch', 
                            id = '', 
                            name = '', 
                            owner = '', 
                            path = '', 
                            pr_number = 56, 
                            sha = '', 
                            source = '', 
                            url = '', ), 
                        state = daytona_sdk.models.project_state.ProjectState(
                            git_status = daytona_sdk.models.git_status.GitStatus(
                                ahead = 56, 
                                behind = 56, 
                                branch_published = True, 
                                current_branch = '', 
                                file_status = [
                                    daytona_sdk.models.file_status.FileStatus(
                                        extra = '', 
                                        name = '', 
                                        staging = 'Unmodified', 
                                        worktree = 'Unmodified', )
                                    ], ), 
                            updated_at = '', 
                            uptime = 56, ), 
                        target = '', 
                        user = '', 
                        workspace_id = '', )
                    ],
                target = '',
        )
        """

    def testWorkspaceDTO(self):
        """Test WorkspaceDTO"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()