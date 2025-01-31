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
 * @interface GitCloneRequest
 */
export interface GitCloneRequest {
    /**
     * 
     * @type {string}
     * @memberof GitCloneRequest
     */
    branch?: string;
    /**
     * 
     * @type {string}
     * @memberof GitCloneRequest
     */
    commitId?: string;
    /**
     * 
     * @type {string}
     * @memberof GitCloneRequest
     */
    password?: string;
    /**
     * 
     * @type {string}
     * @memberof GitCloneRequest
     */
    path: string;
    /**
     * 
     * @type {string}
     * @memberof GitCloneRequest
     */
    url: string;
    /**
     * 
     * @type {string}
     * @memberof GitCloneRequest
     */
    username?: string;
}

/**
 * Check if a given object implements the GitCloneRequest interface.
 */
export function instanceOfGitCloneRequest(value: object): value is GitCloneRequest {
    if (!('path' in value) || value['path'] === undefined) return false;
    if (!('url' in value) || value['url'] === undefined) return false;
    return true;
}

export function GitCloneRequestFromJSON(json: any): GitCloneRequest {
    return GitCloneRequestFromJSONTyped(json, false);
}

export function GitCloneRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): GitCloneRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'branch': json['branch'] == null ? undefined : json['branch'],
        'commitId': json['commit_id'] == null ? undefined : json['commit_id'],
        'password': json['password'] == null ? undefined : json['password'],
        'path': json['path'],
        'url': json['url'],
        'username': json['username'] == null ? undefined : json['username'],
    };
}

export function GitCloneRequestToJSON(json: any): GitCloneRequest {
    return GitCloneRequestToJSONTyped(json, false);
}

export function GitCloneRequestToJSONTyped(value?: GitCloneRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'branch': value['branch'],
        'commit_id': value['commitId'],
        'password': value['password'],
        'path': value['path'],
        'url': value['url'],
        'username': value['username'],
    };
}

