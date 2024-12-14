# coding: utf-8

"""
    Daytona Server API

    Daytona Server API

    The version of the OpenAPI document: v0.0.0-dev
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import unittest

from daytonasdk.models.project_config import ProjectConfig

class TestProjectConfig(unittest.TestCase):
    """ProjectConfig unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> ProjectConfig:
        """Test ProjectConfig
            include_optional is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `ProjectConfig`
        """
        model = ProjectConfig()
        if include_optional:
            return ProjectConfig(
                build_config = daytonasdk.models.build_config.BuildConfig(
                    cached_build = daytonasdk.models.cached_build.CachedBuild(
                        image = '', 
                        user = '', ), 
                    devcontainer = daytonasdk.models.devcontainer_config.DevcontainerConfig(
                        file_path = '', ), ),
                default = True,
                env_vars = {
                    'key' : ''
                    },
                git_provider_config_id = '',
                image = '',
                name = '',
                prebuilds = [
                    daytonasdk.models.prebuild_config.PrebuildConfig(
                        branch = '', 
                        commit_interval = 56, 
                        id = '', 
                        retention = 56, 
                        trigger_files = [
                            ''
                            ], )
                    ],
                repository_url = '',
                user = ''
            )
        else:
            return ProjectConfig(
                default = True,
                env_vars = {
                    'key' : ''
                    },
                image = '',
                name = '',
                repository_url = '',
                user = '',
        )
        """

    def testProjectConfig(self):
        """Test ProjectConfig"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()
