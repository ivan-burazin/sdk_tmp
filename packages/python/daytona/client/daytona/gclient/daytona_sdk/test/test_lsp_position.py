# coding: utf-8

"""
    Daytona Server API

    Daytona Server API

    The version of the OpenAPI document: v0.0.0-dev
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import unittest

from daytona.gclient.daytona_sdk.models.lsp_position import LspPosition

class TestLspPosition(unittest.TestCase):
    """LspPosition unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> LspPosition:
        """Test LspPosition
            include_optional is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `LspPosition`
        """
        model = LspPosition()
        if include_optional:
            return LspPosition(
                character = 56,
                line = 56
            )
        else:
            return LspPosition(
                character = 56,
                line = 56,
        )
        """

    def testLspPosition(self):
        """Test LspPosition"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()
