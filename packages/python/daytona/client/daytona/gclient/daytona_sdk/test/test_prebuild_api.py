# coding: utf-8

"""
    Daytona Server API

    Daytona Server API

    The version of the OpenAPI document: v0.0.0-dev
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import unittest

from daytona.gclient.daytona_sdk.api.prebuild_api import PrebuildApi


class TestPrebuildApi(unittest.TestCase):
    """PrebuildApi unit test stubs"""

    def setUp(self) -> None:
        self.api = PrebuildApi()

    def tearDown(self) -> None:
        pass

    def test_delete_prebuild(self) -> None:
        """Test case for delete_prebuild

        Delete prebuild
        """
        pass

    def test_get_prebuild(self) -> None:
        """Test case for get_prebuild

        Get prebuild
        """
        pass

    def test_list_prebuilds(self) -> None:
        """Test case for list_prebuilds

        List prebuilds
        """
        pass

    def test_list_prebuilds_for_project_config(self) -> None:
        """Test case for list_prebuilds_for_project_config

        List prebuilds for project config
        """
        pass

    def test_process_git_event(self) -> None:
        """Test case for process_git_event

        ProcessGitEvent
        """
        pass

    def test_set_prebuild(self) -> None:
        """Test case for set_prebuild

        Set prebuild
        """
        pass


if __name__ == '__main__':
    unittest.main()