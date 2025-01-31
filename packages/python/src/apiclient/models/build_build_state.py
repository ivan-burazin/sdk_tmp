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


class BuildBuildState(str, Enum):
    """
    BuildBuildState
    """

    """
    allowed enum values
    """
    PENDING_MINUS_RUN = 'pending-run'
    RUNNING = 'running'
    ERROR = 'error'
    SUCCESS = 'success'
    PUBLISHED = 'published'
    PENDING_MINUS_DELETE = 'pending-delete'
    PENDING_MINUS_FORCED_MINUS_DELETE = 'pending-forced-delete'
    DELETING = 'deleting'

    @classmethod
    def from_json(cls, json_str: str) -> Self:
        """Create an instance of BuildBuildState from a JSON string"""
        return cls(json.loads(json_str))


