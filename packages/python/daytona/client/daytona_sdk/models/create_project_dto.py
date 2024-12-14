# coding: utf-8

"""
    Daytona Server API

    Daytona Server API

    The version of the OpenAPI document: v0.0.0-dev
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


from __future__ import annotations
import pprint
import re  # noqa: F401
import json

from pydantic import BaseModel, ConfigDict, Field, StrictStr
from typing import Any, ClassVar, Dict, List, Optional
from daytona_sdk.models.build_config import BuildConfig
from daytona_sdk.models.create_project_source_dto import CreateProjectSourceDTO
from typing import Optional, Set
from typing_extensions import Self

class CreateProjectDTO(BaseModel):
    """
    CreateProjectDTO
    """ # noqa: E501
    build_config: Optional[BuildConfig] = Field(default=None, alias="buildConfig")
    env_vars: Dict[str, StrictStr] = Field(alias="envVars")
    git_provider_config_id: Optional[StrictStr] = Field(default=None, alias="gitProviderConfigId")
    image: Optional[StrictStr] = None
    name: StrictStr
    source: CreateProjectSourceDTO
    user: Optional[StrictStr] = None
    __properties: ClassVar[List[str]] = ["buildConfig", "envVars", "gitProviderConfigId", "image", "name", "source", "user"]

    model_config = ConfigDict(
        populate_by_name=True,
        validate_assignment=True,
        protected_namespaces=(),
    )


    def to_str(self) -> str:
        """Returns the string representation of the model using alias"""
        return pprint.pformat(self.model_dump(by_alias=True))

    def to_json(self) -> str:
        """Returns the JSON representation of the model using alias"""
        # TODO: pydantic v2: use .model_dump_json(by_alias=True, exclude_unset=True) instead
        return json.dumps(self.to_dict())

    @classmethod
    def from_json(cls, json_str: str) -> Optional[Self]:
        """Create an instance of CreateProjectDTO from a JSON string"""
        return cls.from_dict(json.loads(json_str))

    def to_dict(self) -> Dict[str, Any]:
        """Return the dictionary representation of the model using alias.

        This has the following differences from calling pydantic's
        `self.model_dump(by_alias=True)`:

        * `None` is only added to the output dict for nullable fields that
          were set at model initialization. Other fields with value `None`
          are ignored.
        """
        excluded_fields: Set[str] = set([
        ])

        _dict = self.model_dump(
            by_alias=True,
            exclude=excluded_fields,
            exclude_none=True,
        )
        # override the default output from pydantic by calling `to_dict()` of build_config
        if self.build_config:
            _dict['buildConfig'] = self.build_config.to_dict()
        # override the default output from pydantic by calling `to_dict()` of source
        if self.source:
            _dict['source'] = self.source.to_dict()
        return _dict

    @classmethod
    def from_dict(cls, obj: Optional[Dict[str, Any]]) -> Optional[Self]:
        """Create an instance of CreateProjectDTO from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "buildConfig": BuildConfig.from_dict(obj["buildConfig"]) if obj.get("buildConfig") is not None else None,
            "envVars": obj.get("envVars"),
            "gitProviderConfigId": obj.get("gitProviderConfigId"),
            "image": obj.get("image"),
            "name": obj.get("name"),
            "source": CreateProjectSourceDTO.from_dict(obj["source"]) if obj.get("source") is not None else None,
            "user": obj.get("user")
        })
        return _obj


