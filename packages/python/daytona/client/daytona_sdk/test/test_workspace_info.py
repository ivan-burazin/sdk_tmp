# coding: utf-8

"""
    Daytona Server API

    Daytona Server API

    The version of the OpenAPI document: v0.0.0-dev
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import unittest

from daytona_sdk.models.workspace_info import WorkspaceInfo

class TestWorkspaceInfo(unittest.TestCase):
    """WorkspaceInfo unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> WorkspaceInfo:
        """Test WorkspaceInfo
            include_optional is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `WorkspaceInfo`
        """
        model = WorkspaceInfo()
        if include_optional:
            return WorkspaceInfo(
                name = '',
                projects = [
                    daytona_sdk.models.project_info.ProjectInfo(
                        created = '', 
                        is_running = True, 
                        name = '', 
                        provider_metadata = '', 
                        workspace_id = '', )
                    ],
                provider_metadata = ''
            )
        else:
            return WorkspaceInfo(
                name = '',
                projects = [
                    daytona_sdk.models.project_info.ProjectInfo(
                        created = '', 
                        is_running = True, 
                        name = '', 
                        provider_metadata = '', 
                        workspace_id = '', )
                    ],
        )
        """

    def testWorkspaceInfo(self):
        """Test WorkspaceInfo"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()
