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
 * @interface CompletionItem
 */
export interface CompletionItem {
    /**
     * 
     * @type {string}
     * @memberof CompletionItem
     */
    detail?: string;
    /**
     * 
     * @type {object}
     * @memberof CompletionItem
     */
    documentation?: object;
    /**
     * 
     * @type {string}
     * @memberof CompletionItem
     */
    filterText?: string;
    /**
     * 
     * @type {string}
     * @memberof CompletionItem
     */
    insertText?: string;
    /**
     * 
     * @type {number}
     * @memberof CompletionItem
     */
    kind?: number;
    /**
     * 
     * @type {string}
     * @memberof CompletionItem
     */
    label: string;
    /**
     * 
     * @type {string}
     * @memberof CompletionItem
     */
    sortText?: string;
}

/**
 * Check if a given object implements the CompletionItem interface.
 */
export function instanceOfCompletionItem(value: object): value is CompletionItem {
    if (!('label' in value) || value['label'] === undefined) return false;
    return true;
}

export function CompletionItemFromJSON(json: any): CompletionItem {
    return CompletionItemFromJSONTyped(json, false);
}

export function CompletionItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): CompletionItem {
    if (json == null) {
        return json;
    }
    return {
        
        'detail': json['detail'] == null ? undefined : json['detail'],
        'documentation': json['documentation'] == null ? undefined : json['documentation'],
        'filterText': json['filterText'] == null ? undefined : json['filterText'],
        'insertText': json['insertText'] == null ? undefined : json['insertText'],
        'kind': json['kind'] == null ? undefined : json['kind'],
        'label': json['label'],
        'sortText': json['sortText'] == null ? undefined : json['sortText'],
    };
}

export function CompletionItemToJSON(json: any): CompletionItem {
    return CompletionItemToJSONTyped(json, false);
}

export function CompletionItemToJSONTyped(value?: CompletionItem | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'detail': value['detail'],
        'documentation': value['documentation'],
        'filterText': value['filterText'],
        'insertText': value['insertText'],
        'kind': value['kind'],
        'label': value['label'],
        'sortText': value['sortText'],
    };
}

