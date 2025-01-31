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
 * @interface GitBranch
 */
export interface GitBranch {
    /**
     * 
     * @type {string}
     * @memberof GitBranch
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof GitBranch
     */
    sha: string;
}

/**
 * Check if a given object implements the GitBranch interface.
 */
export function instanceOfGitBranch(value: object): value is GitBranch {
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('sha' in value) || value['sha'] === undefined) return false;
    return true;
}

export function GitBranchFromJSON(json: any): GitBranch {
    return GitBranchFromJSONTyped(json, false);
}

export function GitBranchFromJSONTyped(json: any, ignoreDiscriminator: boolean): GitBranch {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'],
        'sha': json['sha'],
    };
}

export function GitBranchToJSON(json: any): GitBranch {
    return GitBranchToJSONTyped(json, false);
}

export function GitBranchToJSONTyped(value?: GitBranch | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'name': value['name'],
        'sha': value['sha'],
    };
}

