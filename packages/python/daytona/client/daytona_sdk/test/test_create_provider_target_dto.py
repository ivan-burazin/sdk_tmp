# coding: utf-8

"""
    Daytona Server API

    Daytona Server API

    The version of the OpenAPI document: v0.0.0-dev
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import unittest

from daytona_sdk.models.create_provider_target_dto import CreateProviderTargetDTO

class TestCreateProviderTargetDTO(unittest.TestCase):
    """CreateProviderTargetDTO unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> CreateProviderTargetDTO:
        """Test CreateProviderTargetDTO
            include_optional is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `CreateProviderTargetDTO`
        """
        model = CreateProviderTargetDTO()
        if include_optional:
            return CreateProviderTargetDTO(
                name = '',
                options = '',
                provider_info = daytona_sdk.models.provider/provider_info.provider.ProviderInfo(
                    label = '', 
                    name = '', 
                    version = '', )
            )
        else:
            return CreateProviderTargetDTO(
                name = '',
                options = '',
                provider_info = daytona_sdk.models.provider/provider_info.provider.ProviderInfo(
                    label = '', 
                    name = '', 
                    version = '', ),
        )
        """

    def testCreateProviderTargetDTO(self):
        """Test CreateProviderTargetDTO"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()
