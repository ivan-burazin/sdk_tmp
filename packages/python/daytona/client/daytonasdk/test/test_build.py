# coding: utf-8

"""
    Daytona Server API

    Daytona Server API

    The version of the OpenAPI document: v0.0.0-dev
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import unittest

from daytonasdk.models.build import Build

class TestBuild(unittest.TestCase):
    """Build unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> Build:
        """Test Build
            include_optional is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `Build`
        """
        model = Build()
        if include_optional:
            return Build(
                build_config = daytonasdk.models.build_config.BuildConfig(
                    cached_build = daytonasdk.models.cached_build.CachedBuild(
                        image = '', 
                        user = '', ), 
                    devcontainer = daytonasdk.models.devcontainer_config.DevcontainerConfig(
                        file_path = '', ), ),
                container_config = daytonasdk.models.container_config.ContainerConfig(
                    image = '', 
                    user = '', ),
                created_at = '',
                env_vars = {
                    'key' : ''
                    },
                id = '',
                image = '',
                prebuild_id = '',
                repository = daytonasdk.models.git_repository.GitRepository(
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
                state = 'pending-run',
                updated_at = '',
                user = ''
            )
        else:
            return Build(
                container_config = daytonasdk.models.container_config.ContainerConfig(
                    image = '', 
                    user = '', ),
                created_at = '',
                env_vars = {
                    'key' : ''
                    },
                id = '',
                prebuild_id = '',
                repository = daytonasdk.models.git_repository.GitRepository(
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
                state = 'pending-run',
                updated_at = '',
        )
        """

    def testBuild(self):
        """Test Build"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()
