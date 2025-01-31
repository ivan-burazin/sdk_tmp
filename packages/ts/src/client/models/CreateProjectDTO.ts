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
import type { CreateProjectSourceDTO } from './CreateProjectSourceDTO';
import {
    CreateProjectSourceDTOFromJSON,
    CreateProjectSourceDTOFromJSONTyped,
    CreateProjectSourceDTOToJSON,
    CreateProjectSourceDTOToJSONTyped,
} from './CreateProjectSourceDTO';
import type { BuildConfig } from './BuildConfig';
import {
    BuildConfigFromJSON,
    BuildConfigFromJSONTyped,
    BuildConfigToJSON,
    BuildConfigToJSONTyped,
} from './BuildConfig';

/**
 * 
 * @export
 * @interface CreateProjectDTO
 */
export interface CreateProjectDTO {
    /**
     * 
     * @type {BuildConfig}
     * @memberof CreateProjectDTO
     */
    buildConfig?: BuildConfig;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof CreateProjectDTO
     */
    envVars: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof CreateProjectDTO
     */
    gitProviderConfigId?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateProjectDTO
     */
    image?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateProjectDTO
     */
    name: string;
    /**
     * 
     * @type {CreateProjectSourceDTO}
     * @memberof CreateProjectDTO
     */
    source: CreateProjectSourceDTO;
    /**
     * 
     * @type {string}
     * @memberof CreateProjectDTO
     */
    user?: string;
}

/**
 * Check if a given object implements the CreateProjectDTO interface.
 */
export function instanceOfCreateProjectDTO(value: object): value is CreateProjectDTO {
    if (!('envVars' in value) || value['envVars'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('source' in value) || value['source'] === undefined) return false;
    return true;
}

export function CreateProjectDTOFromJSON(json: any): CreateProjectDTO {
    return CreateProjectDTOFromJSONTyped(json, false);
}

export function CreateProjectDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateProjectDTO {
    if (json == null) {
        return json;
    }
    return {
        
        'buildConfig': json['buildConfig'] == null ? undefined : BuildConfigFromJSON(json['buildConfig']),
        'envVars': json['envVars'],
        'gitProviderConfigId': json['gitProviderConfigId'] == null ? undefined : json['gitProviderConfigId'],
        'image': json['image'] == null ? undefined : json['image'],
        'name': json['name'],
        'source': CreateProjectSourceDTOFromJSON(json['source']),
        'user': json['user'] == null ? undefined : json['user'],
    };
}

export function CreateProjectDTOToJSON(json: any): CreateProjectDTO {
    return CreateProjectDTOToJSONTyped(json, false);
}

export function CreateProjectDTOToJSONTyped(value?: CreateProjectDTO | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'buildConfig': BuildConfigToJSON(value['buildConfig']),
        'envVars': value['envVars'],
        'gitProviderConfigId': value['gitProviderConfigId'],
        'image': value['image'],
        'name': value['name'],
        'source': CreateProjectSourceDTOToJSON(value['source']),
        'user': value['user'],
    };
}

