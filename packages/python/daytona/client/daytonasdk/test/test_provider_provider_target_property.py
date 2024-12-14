# coding: utf-8

"""
    Daytona Server API

    Daytona Server API

    The version of the OpenAPI document: v0.0.0-dev
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import unittest

from daytonasdk.models.provider_provider_target_property import ProviderProviderTargetProperty

class TestProviderProviderTargetProperty(unittest.TestCase):
    """ProviderProviderTargetProperty unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> ProviderProviderTargetProperty:
        """Test ProviderProviderTargetProperty
            include_optional is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `ProviderProviderTargetProperty`
        """
        model = ProviderProviderTargetProperty()
        if include_optional:
            return ProviderProviderTargetProperty(
                default_value = '',
                description = '',
                disabled_predicate = '',
                input_masked = True,
                options = [
                    ''
                    ],
                suggestions = [
                    ''
                    ],
                type = 'string'
            )
        else:
            return ProviderProviderTargetProperty(
        )
        """

    def testProviderProviderTargetProperty(self):
        """Test ProviderProviderTargetProperty"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()
