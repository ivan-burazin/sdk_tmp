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
import type { CreateProjectDTO } from './CreateProjectDTO';
import {
    CreateProjectDTOFromJSON,
    CreateProjectDTOFromJSONTyped,
    CreateProjectDTOToJSON,
    CreateProjectDTOToJSONTyped,
} from './CreateProjectDTO';

/**
 * 
 * @export
 * @interface CreateWorkspaceDTO
 */
export interface CreateWorkspaceDTO {
    /**
     * 
     * @type {string}
     * @memberof CreateWorkspaceDTO
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof CreateWorkspaceDTO
     */
    name: string;
    /**
     * 
     * @type {Array<CreateProjectDTO>}
     * @memberof CreateWorkspaceDTO
     */
    projects: Array<CreateProjectDTO>;
    /**
     * 
     * @type {string}
     * @memberof CreateWorkspaceDTO
     */
    target: string;
}

/**
 * Check if a given object implements the CreateWorkspaceDTO interface.
 */
export function instanceOfCreateWorkspaceDTO(value: object): value is CreateWorkspaceDTO {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('projects' in value) || value['projects'] === undefined) return false;
    if (!('target' in value) || value['target'] === undefined) return false;
    return true;
}

export function CreateWorkspaceDTOFromJSON(json: any): CreateWorkspaceDTO {
    return CreateWorkspaceDTOFromJSONTyped(json, false);
}

export function CreateWorkspaceDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateWorkspaceDTO {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'projects': ((json['projects'] as Array<any>).map(CreateProjectDTOFromJSON)),
        'target': json['target'],
    };
}

export function CreateWorkspaceDTOToJSON(json: any): CreateWorkspaceDTO {
    return CreateWorkspaceDTOToJSONTyped(json, false);
}

export function CreateWorkspaceDTOToJSONTyped(value?: CreateWorkspaceDTO | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'name': value['name'],
        'projects': ((value['projects'] as Array<any>).map(CreateProjectDTOToJSON)),
        'target': value['target'],
    };
}

