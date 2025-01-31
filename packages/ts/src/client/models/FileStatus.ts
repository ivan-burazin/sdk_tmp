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
import type { Status } from './Status';
import {
    StatusFromJSON,
    StatusFromJSONTyped,
    StatusToJSON,
    StatusToJSONTyped,
} from './Status';

/**
 * 
 * @export
 * @interface FileStatus
 */
export interface FileStatus {
    /**
     * 
     * @type {string}
     * @memberof FileStatus
     */
    extra: string;
    /**
     * 
     * @type {string}
     * @memberof FileStatus
     */
    name: string;
    /**
     * 
     * @type {Status}
     * @memberof FileStatus
     */
    staging: Status;
    /**
     * 
     * @type {Status}
     * @memberof FileStatus
     */
    worktree: Status;
}



/**
 * Check if a given object implements the FileStatus interface.
 */
export function instanceOfFileStatus(value: object): value is FileStatus {
    if (!('extra' in value) || value['extra'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('staging' in value) || value['staging'] === undefined) return false;
    if (!('worktree' in value) || value['worktree'] === undefined) return false;
    return true;
}

export function FileStatusFromJSON(json: any): FileStatus {
    return FileStatusFromJSONTyped(json, false);
}

export function FileStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): FileStatus {
    if (json == null) {
        return json;
    }
    return {
        
        'extra': json['extra'],
        'name': json['name'],
        'staging': StatusFromJSON(json['staging']),
        'worktree': StatusFromJSON(json['worktree']),
    };
}

export function FileStatusToJSON(json: any): FileStatus {
    return FileStatusToJSONTyped(json, false);
}

export function FileStatusToJSONTyped(value?: FileStatus | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'extra': value['extra'],
        'name': value['name'],
        'staging': StatusToJSON(value['staging']),
        'worktree': StatusToJSON(value['worktree']),
    };
}

