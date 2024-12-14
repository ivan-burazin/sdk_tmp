# coding: utf-8

"""
    Daytona Server API

    Daytona Server API

    The version of the OpenAPI document: v0.0.0-dev
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import unittest

from daytona_sdk.api.build_api import BuildApi


class TestBuildApi(unittest.TestCase):
    """BuildApi unit test stubs"""

    def setUp(self) -> None:
        self.api = BuildApi()

    def tearDown(self) -> None:
        pass

    def test_create_build(self) -> None:
        """Test case for create_build

        Create a build
        """
        pass

    def test_delete_all_builds(self) -> None:
        """Test case for delete_all_builds

        Delete ALL builds
        """
        pass

    def test_delete_build(self) -> None:
        """Test case for delete_build

        Delete build
        """
        pass

    def test_delete_builds_from_prebuild(self) -> None:
        """Test case for delete_builds_from_prebuild

        Delete builds
        """
        pass

    def test_get_build(self) -> None:
        """Test case for get_build

        Get build data
        """
        pass

    def test_list_builds(self) -> None:
        """Test case for list_builds

        List builds
        """
        pass


if __name__ == '__main__':
    unittest.main()
