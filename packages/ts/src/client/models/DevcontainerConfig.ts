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
/**
 * 
 * @export
 * @interface DevcontainerConfig
 */
export interface DevcontainerConfig {
    /**
     * 
     * @type {string}
     * @memberof DevcontainerConfig
     */
    filePath: string;
}

/**
 * Check if a given object implements the DevcontainerConfig interface.
 */
export function instanceOfDevcontainerConfig(value: object): value is DevcontainerConfig {
    if (!('filePath' in value) || value['filePath'] === undefined) return false;
    return true;
}

export function DevcontainerConfigFromJSON(json: any): DevcontainerConfig {
    return DevcontainerConfigFromJSONTyped(json, false);
}

export function DevcontainerConfigFromJSONTyped(json: any, ignoreDiscriminator: boolean): DevcontainerConfig {
    if (json == null) {
        return json;
    }
    return {
        
        'filePath': json['filePath'],
    };
}

export function DevcontainerConfigToJSON(json: any): DevcontainerConfig {
    return DevcontainerConfigToJSONTyped(json, false);
}

export function DevcontainerConfigToJSONTyped(value?: DevcontainerConfig | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'filePath': value['filePath'],
    };
}

