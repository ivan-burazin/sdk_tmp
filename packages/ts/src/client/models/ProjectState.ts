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
import type { GitStatus } from './GitStatus';
import {
    GitStatusFromJSON,
    GitStatusFromJSONTyped,
    GitStatusToJSON,
    GitStatusToJSONTyped,
} from './GitStatus';

/**
 * 
 * @export
 * @interface ProjectState
 */
export interface ProjectState {
    /**
     * 
     * @type {GitStatus}
     * @memberof ProjectState
     */
    gitStatus?: GitStatus;
    /**
     * 
     * @type {string}
     * @memberof ProjectState
     */
    updatedAt: string;
    /**
     * 
     * @type {number}
     * @memberof ProjectState
     */
    uptime: number;
}

/**
 * Check if a given object implements the ProjectState interface.
 */
export function instanceOfProjectState(value: object): value is ProjectState {
    if (!('updatedAt' in value) || value['updatedAt'] === undefined) return false;
    if (!('uptime' in value) || value['uptime'] === undefined) return false;
    return true;
}

export function ProjectStateFromJSON(json: any): ProjectState {
    return ProjectStateFromJSONTyped(json, false);
}

export function ProjectStateFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProjectState {
    if (json == null) {
        return json;
    }
    return {
        
        'gitStatus': json['gitStatus'] == null ? undefined : GitStatusFromJSON(json['gitStatus']),
        'updatedAt': json['updatedAt'],
        'uptime': json['uptime'],
    };
}

export function ProjectStateToJSON(json: any): ProjectState {
    return ProjectStateToJSONTyped(json, false);
}

export function ProjectStateToJSONTyped(value?: ProjectState | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'gitStatus': GitStatusToJSON(value['gitStatus']),
        'updatedAt': value['updatedAt'],
        'uptime': value['uptime'],
    };
}

