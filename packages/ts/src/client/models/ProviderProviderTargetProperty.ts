/* tslint:disable */
/* eslint-disable */
/**
 * Daytona Server API
 * Daytona Server API
 *
 * The version of the OpenAPI document: v0.0.0-dev
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { ProviderProviderTargetPropertyType } from './ProviderProviderTargetPropertyType';
import {
    ProviderProviderTargetPropertyTypeFromJSON,
    ProviderProviderTargetPropertyTypeFromJSONTyped,
    ProviderProviderTargetPropertyTypeToJSON,
    ProviderProviderTargetPropertyTypeToJSONTyped,
} from './ProviderProviderTargetPropertyType';

/**
 * 
 * @export
 * @interface ProviderProviderTargetProperty
 */
export interface ProviderProviderTargetProperty {
    /**
     * DefaultValue is converted into the appropriate type based on the Type
     * If the property is a FilePath, the DefaultValue is a path to a directory
     * @type {string}
     * @memberof ProviderProviderTargetProperty
     */
    defaultValue?: string;
    /**
     * Brief description of the property
     * @type {string}
     * @memberof ProviderProviderTargetProperty
     */
    description?: string;
    /**
     * A regex string matched with the name of the target to determine if the property should be disabled
     * If the regex matches the target name, the property will be disabled
     * E.g. "^local$" will disable the property for the local target
     * @type {string}
     * @memberof ProviderProviderTargetProperty
     */
    disabledPredicate?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ProviderProviderTargetProperty
     */
    inputMasked?: boolean;
    /**
     * Options is only used if the Type is ProviderTargetPropertyTypeOption
     * @type {Array<string>}
     * @memberof ProviderProviderTargetProperty
     */
    options?: Array<string>;
    /**
     * Suggestions is an optional list of auto-complete values to assist the user while filling the field
     * @type {Array<string>}
     * @memberof ProviderProviderTargetProperty
     */
    suggestions?: Array<string>;
    /**
     * 
     * @type {ProviderProviderTargetPropertyType}
     * @memberof ProviderProviderTargetProperty
     */
    type?: ProviderProviderTargetPropertyType;
}



/**
 * Check if a given object implements the ProviderProviderTargetProperty interface.
 */
export function instanceOfProviderProviderTargetProperty(value: object): value is ProviderProviderTargetProperty {
    return true;
}

export function ProviderProviderTargetPropertyFromJSON(json: any): ProviderProviderTargetProperty {
    return ProviderProviderTargetPropertyFromJSONTyped(json, false);
}

export function ProviderProviderTargetPropertyFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProviderProviderTargetProperty {
    if (json == null) {
        return json;
    }
    return {
        
        'defaultValue': json['defaultValue'] == null ? undefined : json['defaultValue'],
        'description': json['description'] == null ? undefined : json['description'],
        'disabledPredicate': json['disabledPredicate'] == null ? undefined : json['disabledPredicate'],
        'inputMasked': json['inputMasked'] == null ? undefined : json['inputMasked'],
        'options': json['options'] == null ? undefined : json['options'],
        'suggestions': json['suggestions'] == null ? undefined : json['suggestions'],
        'type': json['type'] == null ? undefined : ProviderProviderTargetPropertyTypeFromJSON(json['type']),
    };
}

export function ProviderProviderTargetPropertyToJSON(json: any): ProviderProviderTargetProperty {
    return ProviderProviderTargetPropertyToJSONTyped(json, false);
}

export function ProviderProviderTargetPropertyToJSONTyped(value?: ProviderProviderTargetProperty | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'defaultValue': value['defaultValue'],
        'description': value['description'],
        'disabledPredicate': value['disabledPredicate'],
        'inputMasked': value['inputMasked'],
        'options': value['options'],
        'suggestions': value['suggestions'],
        'type': ProviderProviderTargetPropertyTypeToJSON(value['type']),
    };
}

