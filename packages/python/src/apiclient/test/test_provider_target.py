# coding: utf-8

"""
    Daytona Server API

    Daytona Server API

    The version of the OpenAPI document: v0.0.0-dev
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import unittest

from apiclient.models.provider_target import ProviderTarget

class TestProviderTarget(unittest.TestCase):
    """ProviderTarget unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> ProviderTarget:
        """Test ProviderTarget
            include_optional is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `ProviderTarget`
        """
        model = ProviderTarget()
        if include_optional:
            return ProviderTarget(
                is_default = True,
                name = '',
                options = '',
                provider_info = apiclient.models.provider/provider_info.provider.ProviderInfo(
                    label = '', 
                    name = '', 
                    version = '', )
            )
        else:
            return ProviderTarget(
                is_default = True,
                name = '',
                options = '',
                provider_info = apiclient.models.provider/provider_info.provider.ProviderInfo(
                    label = '', 
                    name = '', 
                    version = '', ),
        )
        """

    def testProviderTarget(self):
        """Test ProviderTarget"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()
