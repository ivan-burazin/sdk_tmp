# coding: utf-8

"""
    Daytona Server API

    Daytona Server API

    The version of the OpenAPI document: v0.0.0-dev
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import unittest

from daytona.gclient.daytona_sdk.models.lsp_server_request import LspServerRequest

class TestLspServerRequest(unittest.TestCase):
    """LspServerRequest unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> LspServerRequest:
        """Test LspServerRequest
            include_optional is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `LspServerRequest`
        """
        model = LspServerRequest()
        if include_optional:
            return LspServerRequest(
                language_id = '',
                path_to_project = ''
            )
        else:
            return LspServerRequest(
                language_id = '',
                path_to_project = '',
        )
        """

    def testLspServerRequest(self):
        """Test LspServerRequest"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()