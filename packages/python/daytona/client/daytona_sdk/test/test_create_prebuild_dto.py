# coding: utf-8

"""
    Daytona Server API

    Daytona Server API

    The version of the OpenAPI document: v0.0.0-dev
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import unittest

from daytona_sdk.models.create_prebuild_dto import CreatePrebuildDTO

class TestCreatePrebuildDTO(unittest.TestCase):
    """CreatePrebuildDTO unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> CreatePrebuildDTO:
        """Test CreatePrebuildDTO
            include_optional is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `CreatePrebuildDTO`
        """
        model = CreatePrebuildDTO()
        if include_optional:
            return CreatePrebuildDTO(
                branch = '',
                commit_interval = 56,
                id = '',
                retention = 56,
                trigger_files = [
                    ''
                    ]
            )
        else:
            return CreatePrebuildDTO(
                retention = 56,
        )
        """

    def testCreatePrebuildDTO(self):
        """Test CreatePrebuildDTO"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()
