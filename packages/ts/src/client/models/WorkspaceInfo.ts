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
import type { ProjectInfo } from './ProjectInfo';
import {
    ProjectInfoFromJSON,
    ProjectInfoFromJSONTyped,
    ProjectInfoToJSON,
    ProjectInfoToJSONTyped,
} from './ProjectInfo';

/**
 * 
 * @export
 * @interface WorkspaceInfo
 */
export interface WorkspaceInfo {
    /**
     * 
     * @type {string}
     * @memberof WorkspaceInfo
     */
    name: string;
    /**
     * 
     * @type {Array<ProjectInfo>}
     * @memberof WorkspaceInfo
     */
    projects: Array<ProjectInfo>;
    /**
     * 
     * @type {string}
     * @memberof WorkspaceInfo
     */
    providerMetadata?: string;
}

/**
 * Check if a given object implements the WorkspaceInfo interface.
 */
export function instanceOfWorkspaceInfo(value: object): value is WorkspaceInfo {
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('projects' in value) || value['projects'] === undefined) return false;
    return true;
}

export function WorkspaceInfoFromJSON(json: any): WorkspaceInfo {
    return WorkspaceInfoFromJSONTyped(json, false);
}

export function WorkspaceInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): WorkspaceInfo {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'],
        'projects': ((json['projects'] as Array<any>).map(ProjectInfoFromJSON)),
        'providerMetadata': json['providerMetadata'] == null ? undefined : json['providerMetadata'],
    };
}

export function WorkspaceInfoToJSON(json: any): WorkspaceInfo {
    return WorkspaceInfoToJSONTyped(json, false);
}

export function WorkspaceInfoToJSONTyped(value?: WorkspaceInfo | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'name': value['name'],
        'projects': ((value['projects'] as Array<any>).map(ProjectInfoToJSON)),
        'providerMetadata': value['providerMetadata'],
    };
}

