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
import type { ContainerConfig } from './ContainerConfig';
import {
    ContainerConfigFromJSON,
    ContainerConfigFromJSONTyped,
    ContainerConfigToJSON,
    ContainerConfigToJSONTyped,
} from './ContainerConfig';
import type { GitRepository } from './GitRepository';
import {
    GitRepositoryFromJSON,
    GitRepositoryFromJSONTyped,
    GitRepositoryToJSON,
    GitRepositoryToJSONTyped,
} from './GitRepository';
import type { BuildBuildState } from './BuildBuildState';
import {
    BuildBuildStateFromJSON,
    BuildBuildStateFromJSONTyped,
    BuildBuildStateToJSON,
    BuildBuildStateToJSONTyped,
} from './BuildBuildState';
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
 * @interface Build
 */
export interface Build {
    /**
     * 
     * @type {BuildConfig}
     * @memberof Build
     */
    buildConfig?: BuildConfig;
    /**
     * 
     * @type {ContainerConfig}
     * @memberof Build
     */
    containerConfig: ContainerConfig;
    /**
     * 
     * @type {string}
     * @memberof Build
     */
    createdAt: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof Build
     */
    envVars: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof Build
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof Build
     */
    image?: string;
    /**
     * 
     * @type {string}
     * @memberof Build
     */
    prebuildId: string;
    /**
     * 
     * @type {GitRepository}
     * @memberof Build
     */
    repository: GitRepository;
    /**
     * 
     * @type {BuildBuildState}
     * @memberof Build
     */
    state: BuildBuildState;
    /**
     * 
     * @type {string}
     * @memberof Build
     */
    updatedAt: string;
    /**
     * 
     * @type {string}
     * @memberof Build
     */
    user?: string;
}



/**
 * Check if a given object implements the Build interface.
 */
export function instanceOfBuild(value: object): value is Build {
    if (!('containerConfig' in value) || value['containerConfig'] === undefined) return false;
    if (!('createdAt' in value) || value['createdAt'] === undefined) return false;
    if (!('envVars' in value) || value['envVars'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('prebuildId' in value) || value['prebuildId'] === undefined) return false;
    if (!('repository' in value) || value['repository'] === undefined) return false;
    if (!('state' in value) || value['state'] === undefined) return false;
    if (!('updatedAt' in value) || value['updatedAt'] === undefined) return false;
    return true;
}

export function BuildFromJSON(json: any): Build {
    return BuildFromJSONTyped(json, false);
}

export function BuildFromJSONTyped(json: any, ignoreDiscriminator: boolean): Build {
    if (json == null) {
        return json;
    }
    return {
        
        'buildConfig': json['buildConfig'] == null ? undefined : BuildConfigFromJSON(json['buildConfig']),
        'containerConfig': ContainerConfigFromJSON(json['containerConfig']),
        'createdAt': json['createdAt'],
        'envVars': json['envVars'],
        'id': json['id'],
        'image': json['image'] == null ? undefined : json['image'],
        'prebuildId': json['prebuildId'],
        'repository': GitRepositoryFromJSON(json['repository']),
        'state': BuildBuildStateFromJSON(json['state']),
        'updatedAt': json['updatedAt'],
        'user': json['user'] == null ? undefined : json['user'],
    };
}

export function BuildToJSON(json: any): Build {
    return BuildToJSONTyped(json, false);
}

export function BuildToJSONTyped(value?: Build | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'buildConfig': BuildConfigToJSON(value['buildConfig']),
        'containerConfig': ContainerConfigToJSON(value['containerConfig']),
        'createdAt': value['createdAt'],
        'envVars': value['envVars'],
        'id': value['id'],
        'image': value['image'],
        'prebuildId': value['prebuildId'],
        'repository': GitRepositoryToJSON(value['repository']),
        'state': BuildBuildStateToJSON(value['state']),
        'updatedAt': value['updatedAt'],
        'user': value['user'],
    };
}

