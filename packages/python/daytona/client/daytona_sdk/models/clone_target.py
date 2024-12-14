# coding: utf-8

"""
    Daytona Server API

    Daytona Server API

    The version of the OpenAPI document: v0.0.0-dev
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


from __future__ import annotations
import json
from enum import Enum
from typing_extensions import Self


class CloneTarget(str, Enum):
    """
    CloneTarget
    """

    """
    allowed enum values
    """
    BRANCH = 'branch'
    COMMIT = 'commit'

    @classmethod
    def from_json(cls, json_str: str) -> Self:
        """Create an instance of CloneTarget from a JSON string"""
        return cls(json.loads(json_str))


