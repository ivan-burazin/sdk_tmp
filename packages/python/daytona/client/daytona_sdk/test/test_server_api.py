# coding: utf-8

"""
    Daytona Server API

    Daytona Server API

    The version of the OpenAPI document: v0.0.0-dev
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import unittest

from daytona_sdk.api.server_api import ServerApi


class TestServerApi(unittest.TestCase):
    """ServerApi unit test stubs"""

    def setUp(self) -> None:
        self.api = ServerApi()

    def tearDown(self) -> None:
        pass

    def test_generate_network_key(self) -> None:
        """Test case for generate_network_key

        Generate a new authentication key
        """
        pass

    def test_get_config(self) -> None:
        """Test case for get_config

        Get the server configuration
        """
        pass

    def test_get_server_log_files(self) -> None:
        """Test case for get_server_log_files

        List server log files
        """
        pass

    def test_set_config(self) -> None:
        """Test case for set_config

        Set the server configuration
        """
        pass


if __name__ == '__main__':
    unittest.main()