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
 * @interface AgentToolboxLspTextDocumentIdentifier
 */
export interface AgentToolboxLspTextDocumentIdentifier {
    /**
     * 
     * @type {string}
     * @memberof AgentToolboxLspTextDocumentIdentifier
     */
    uri?: string;
}

/**
 * Check if a given object implements the AgentToolboxLspTextDocumentIdentifier interface.
 */
export function instanceOfAgentToolboxLspTextDocumentIdentifier(value: object): value is AgentToolboxLspTextDocumentIdentifier {
    return true;
}

export function AgentToolboxLspTextDocumentIdentifierFromJSON(json: any): AgentToolboxLspTextDocumentIdentifier {
    return AgentToolboxLspTextDocumentIdentifierFromJSONTyped(json, false);
}

export function AgentToolboxLspTextDocumentIdentifierFromJSONTyped(json: any, ignoreDiscriminator: boolean): AgentToolboxLspTextDocumentIdentifier {
    if (json == null) {
        return json;
    }
    return {
        
        'uri': json['uri'] == null ? undefined : json['uri'],
    };
}

export function AgentToolboxLspTextDocumentIdentifierToJSON(json: any): AgentToolboxLspTextDocumentIdentifier {
    return AgentToolboxLspTextDocumentIdentifierToJSONTyped(json, false);
}

export function AgentToolboxLspTextDocumentIdentifierToJSONTyped(value?: AgentToolboxLspTextDocumentIdentifier | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'uri': value['uri'],
    };
}

