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
 * @interface AgentToolboxLspPosition
 */
export interface AgentToolboxLspPosition {
    /**
     * 
     * @type {number}
     * @memberof AgentToolboxLspPosition
     */
    character?: number;
    /**
     * 
     * @type {number}
     * @memberof AgentToolboxLspPosition
     */
    line?: number;
}

/**
 * Check if a given object implements the AgentToolboxLspPosition interface.
 */
export function instanceOfAgentToolboxLspPosition(value: object): value is AgentToolboxLspPosition {
    return true;
}

export function AgentToolboxLspPositionFromJSON(json: any): AgentToolboxLspPosition {
    return AgentToolboxLspPositionFromJSONTyped(json, false);
}

export function AgentToolboxLspPositionFromJSONTyped(json: any, ignoreDiscriminator: boolean): AgentToolboxLspPosition {
    if (json == null) {
        return json;
    }
    return {
        
        'character': json['character'] == null ? undefined : json['character'],
        'line': json['line'] == null ? undefined : json['line'],
    };
}

export function AgentToolboxLspPositionToJSON(json: any): AgentToolboxLspPosition {
    return AgentToolboxLspPositionToJSONTyped(json, false);
}

export function AgentToolboxLspPositionToJSONTyped(value?: AgentToolboxLspPosition | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'character': value['character'],
        'line': value['line'],
    };
}

