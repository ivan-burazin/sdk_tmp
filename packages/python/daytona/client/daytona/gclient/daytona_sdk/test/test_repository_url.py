# coding: utf-8

"""
    Daytona Server API

    Daytona Server API

    The version of the OpenAPI document: v0.0.0-dev
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import unittest

from daytona.gclient.daytona_sdk.models.repository_url import RepositoryUrl

class TestRepositoryUrl(unittest.TestCase):
    """RepositoryUrl unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> RepositoryUrl:
        """Test RepositoryUrl
            include_optional is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `RepositoryUrl`
        """
        model = RepositoryUrl()
        if include_optional:
            return RepositoryUrl(
                url = ''
            )
        else:
            return RepositoryUrl(
                url = '',
        )
        """

    def testRepositoryUrl(self):
        """Test RepositoryUrl"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()
