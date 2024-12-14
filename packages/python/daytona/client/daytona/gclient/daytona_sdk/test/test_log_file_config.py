# coding: utf-8

"""
    Daytona Server API

    Daytona Server API

    The version of the OpenAPI document: v0.0.0-dev
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import unittest

from daytona.gclient.daytona_sdk.models.log_file_config import LogFileConfig

class TestLogFileConfig(unittest.TestCase):
    """LogFileConfig unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> LogFileConfig:
        """Test LogFileConfig
            include_optional is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `LogFileConfig`
        """
        model = LogFileConfig()
        if include_optional:
            return LogFileConfig(
                compress = True,
                local_time = True,
                max_age = 56,
                max_backups = 56,
                max_size = 56,
                path = ''
            )
        else:
            return LogFileConfig(
                max_age = 56,
                max_backups = 56,
                max_size = 56,
                path = '',
        )
        """

    def testLogFileConfig(self):
        """Test LogFileConfig"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()
