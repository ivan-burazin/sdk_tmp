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
 * @interface Sample
 */
export interface Sample {
    /**
     * 
     * @type {string}
     * @memberof Sample
     */
    description: string;
    /**
     * 
     * @type {string}
     * @memberof Sample
     */
    gitUrl: string;
    /**
     * 
     * @type {string}
     * @memberof Sample
     */
    name: string;
}

/**
 * Check if a given object implements the Sample interface.
 */
export function instanceOfSample(value: object): value is Sample {
    if (!('description' in value) || value['description'] === undefined) return false;
    if (!('gitUrl' in value) || value['gitUrl'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    return true;
}

export function SampleFromJSON(json: any): Sample {
    return SampleFromJSONTyped(json, false);
}

export function SampleFromJSONTyped(json: any, ignoreDiscriminator: boolean): Sample {
    if (json == null) {
        return json;
    }
    return {
        
        'description': json['description'],
        'gitUrl': json['gitUrl'],
        'name': json['name'],
    };
}

export function SampleToJSON(json: any): Sample {
    return SampleToJSONTyped(json, false);
}

export function SampleToJSONTyped(value?: Sample | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'description': value['description'],
        'gitUrl': value['gitUrl'],
        'name': value['name'],
    };
}

