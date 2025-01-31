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
import type { CompletionContext } from './CompletionContext';
import {
    CompletionContextFromJSON,
    CompletionContextFromJSONTyped,
    CompletionContextToJSON,
    CompletionContextToJSONTyped,
} from './CompletionContext';
import type { Position } from './Position';
import {
    PositionFromJSON,
    PositionFromJSONTyped,
    PositionToJSON,
    PositionToJSONTyped,
} from './Position';

/**
 * 
 * @export
 * @interface LspCompletionParams
 */
export interface LspCompletionParams {
    /**
     * 
     * @type {CompletionContext}
     * @memberof LspCompletionParams
     */
    context?: CompletionContext;
    /**
     * 
     * @type {string}
     * @memberof LspCompletionParams
     */
    languageId: string;
    /**
     * 
     * @type {string}
     * @memberof LspCompletionParams
     */
    pathToProject: string;
    /**
     * 
     * @type {Position}
     * @memberof LspCompletionParams
     */
    position: Position;
    /**
     * 
     * @type {string}
     * @memberof LspCompletionParams
     */
    uri: string;
}

/**
 * Check if a given object implements the LspCompletionParams interface.
 */
export function instanceOfLspCompletionParams(value: object): value is LspCompletionParams {
    if (!('languageId' in value) || value['languageId'] === undefined) return false;
    if (!('pathToProject' in value) || value['pathToProject'] === undefined) return false;
    if (!('position' in value) || value['position'] === undefined) return false;
    if (!('uri' in value) || value['uri'] === undefined) return false;
    return true;
}

export function LspCompletionParamsFromJSON(json: any): LspCompletionParams {
    return LspCompletionParamsFromJSONTyped(json, false);
}

export function LspCompletionParamsFromJSONTyped(json: any, ignoreDiscriminator: boolean): LspCompletionParams {
    if (json == null) {
        return json;
    }
    return {
        
        'context': json['context'] == null ? undefined : CompletionContextFromJSON(json['context']),
        'languageId': json['languageId'],
        'pathToProject': json['pathToProject'],
        'position': PositionFromJSON(json['position']),
        'uri': json['uri'],
    };
}

export function LspCompletionParamsToJSON(json: any): LspCompletionParams {
    return LspCompletionParamsToJSONTyped(json, false);
}

export function LspCompletionParamsToJSONTyped(value?: LspCompletionParams | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'context': CompletionContextToJSON(value['context']),
        'languageId': value['languageId'],
        'pathToProject': value['pathToProject'],
        'position': PositionToJSON(value['position']),
        'uri': value['uri'],
    };
}

