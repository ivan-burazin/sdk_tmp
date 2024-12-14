# coding: utf-8

"""
    Daytona Server API

    Daytona Server API

    The version of the OpenAPI document: v0.0.0-dev
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import unittest

from daytonasdk.models.git_commit_info import GitCommitInfo

class TestGitCommitInfo(unittest.TestCase):
    """GitCommitInfo unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> GitCommitInfo:
        """Test GitCommitInfo
            include_optional is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `GitCommitInfo`
        """
        model = GitCommitInfo()
        if include_optional:
            return GitCommitInfo(
                author = '',
                email = '',
                hash = '',
                message = '',
                timestamp = ''
            )
        else:
            return GitCommitInfo(
                author = '',
                email = '',
                hash = '',
                message = '',
                timestamp = '',
        )
        """

    def testGitCommitInfo(self):
        """Test GitCommitInfo"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()
