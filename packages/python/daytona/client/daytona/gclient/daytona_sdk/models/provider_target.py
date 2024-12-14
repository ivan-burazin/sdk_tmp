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

from pydantic import BaseModel, ConfigDict, Field, StrictBool, StrictStr
from typing import Any, ClassVar, Dict, List
from daytona.gclient.daytona_sdk.models.provider_provider_info import ProviderProviderInfo
from typing import Optional, Set
from typing_extensions import Self

class ProviderTarget(BaseModel):
    """
    ProviderTarget
    """ # noqa: E501
    is_default: StrictBool = Field(alias="isDefault")
    name: StrictStr
    options: StrictStr = Field(description="JSON encoded map of options")
    provider_info: ProviderProviderInfo = Field(alias="providerInfo")
    __properties: ClassVar[List[str]] = ["isDefault", "name", "options", "providerInfo"]

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
        """Create an instance of ProviderTarget from a JSON string"""
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
        # override the default output from pydantic by calling `to_dict()` of provider_info
        if self.provider_info:
            _dict['providerInfo'] = self.provider_info.to_dict()
        return _dict

    @classmethod
    def from_dict(cls, obj: Optional[Dict[str, Any]]) -> Optional[Self]:
        """Create an instance of ProviderTarget from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "isDefault": obj.get("isDefault"),
            "name": obj.get("name"),
            "options": obj.get("options"),
            "providerInfo": ProviderProviderInfo.from_dict(obj["providerInfo"]) if obj.get("providerInfo") is not None else None
        })
        return _obj


