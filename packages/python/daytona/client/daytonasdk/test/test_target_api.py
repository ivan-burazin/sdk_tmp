# coding: utf-8

"""
    Daytona Server API

    Daytona Server API

    The version of the OpenAPI document: v0.0.0-dev
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import unittest

from daytonasdk.api.target_api import TargetApi


class TestTargetApi(unittest.TestCase):
    """TargetApi unit test stubs"""

    def setUp(self) -> None:
        self.api = TargetApi()

    def tearDown(self) -> None:
        pass

    def test_list_targets(self) -> None:
        """Test case for list_targets

        List targets
        """
        pass

    def test_remove_target(self) -> None:
        """Test case for remove_target

        Remove a target
        """
        pass

    def test_set_default_target(self) -> None:
        """Test case for set_default_target

        Set target to default
        """
        pass

    def test_set_target(self) -> None:
        """Test case for set_target

        Set a target
        """
        pass


if __name__ == '__main__':
    unittest.main()
