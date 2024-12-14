# coding: utf-8

"""
    Daytona Server API

    Daytona Server API

    The version of the OpenAPI document: v0.0.0-dev
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import unittest

from daytonasdk.models.set_project_state import SetProjectState

class TestSetProjectState(unittest.TestCase):
    """SetProjectState unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> SetProjectState:
        """Test SetProjectState
            include_optional is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `SetProjectState`
        """
        model = SetProjectState()
        if include_optional:
            return SetProjectState(
                git_status = daytonasdk.models.git_status.GitStatus(
                    ahead = 56, 
                    behind = 56, 
                    branch_published = True, 
                    current_branch = '', 
                    file_status = [
                        daytonasdk.models.file_status.FileStatus(
                            extra = '', 
                            name = '', 
                            staging = 'Unmodified', 
                            worktree = 'Unmodified', )
                        ], ),
                uptime = 56
            )
        else:
            return SetProjectState(
                uptime = 56,
        )
        """

    def testSetProjectState(self):
        """Test SetProjectState"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()
