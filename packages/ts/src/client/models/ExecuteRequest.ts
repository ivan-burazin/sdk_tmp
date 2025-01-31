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
 * @interface ExecuteRequest
 */
export interface ExecuteRequest {
    /**
     * 
     * @type {string}
     * @memberof ExecuteRequest
     */
    command: string;
}

/**
 * Check if a given object implements the ExecuteRequest interface.
 */
export function instanceOfExecuteRequest(value: object): value is ExecuteRequest {
    if (!('command' in value) || value['command'] === undefined) return false;
    return true;
}

export function ExecuteRequestFromJSON(json: any): ExecuteRequest {
    return ExecuteRequestFromJSONTyped(json, false);
}

export function ExecuteRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExecuteRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'command': json['command'],
    };
}

export function ExecuteRequestToJSON(json: any): ExecuteRequest {
    return ExecuteRequestToJSONTyped(json, false);
}

export function ExecuteRequestToJSONTyped(value?: ExecuteRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'command': value['command'],
    };
}

