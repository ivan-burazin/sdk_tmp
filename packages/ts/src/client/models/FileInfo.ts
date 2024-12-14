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
 * @interface FileInfo
 */
export interface FileInfo {
    /**
     * 
     * @type {string}
     * @memberof FileInfo
     */
    group: string;
    /**
     * 
     * @type {boolean}
     * @memberof FileInfo
     */
    isDir: boolean;
    /**
     * 
     * @type {string}
     * @memberof FileInfo
     */
    modTime: string;
    /**
     * 
     * @type {string}
     * @memberof FileInfo
     */
    mode: string;
    /**
     * 
     * @type {string}
     * @memberof FileInfo
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof FileInfo
     */
    owner: string;
    /**
     * 
     * @type {string}
     * @memberof FileInfo
     */
    permissions: string;
    /**
     * 
     * @type {number}
     * @memberof FileInfo
     */
    size: number;
}

/**
 * Check if a given object implements the FileInfo interface.
 */
export function instanceOfFileInfo(value: object): value is FileInfo {
    if (!('group' in value) || value['group'] === undefined) return false;
    if (!('isDir' in value) || value['isDir'] === undefined) return false;
    if (!('modTime' in value) || value['modTime'] === undefined) return false;
    if (!('mode' in value) || value['mode'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('owner' in value) || value['owner'] === undefined) return false;
    if (!('permissions' in value) || value['permissions'] === undefined) return false;
    if (!('size' in value) || value['size'] === undefined) return false;
    return true;
}

export function FileInfoFromJSON(json: any): FileInfo {
    return FileInfoFromJSONTyped(json, false);
}

export function FileInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): FileInfo {
    if (json == null) {
        return json;
    }
    return {
        
        'group': json['group'],
        'isDir': json['isDir'],
        'modTime': json['modTime'],
        'mode': json['mode'],
        'name': json['name'],
        'owner': json['owner'],
        'permissions': json['permissions'],
        'size': json['size'],
    };
}

export function FileInfoToJSON(json: any): FileInfo {
    return FileInfoToJSONTyped(json, false);
}

export function FileInfoToJSONTyped(value?: FileInfo | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'group': value['group'],
        'isDir': value['isDir'],
        'modTime': value['modTime'],
        'mode': value['mode'],
        'name': value['name'],
        'owner': value['owner'],
        'permissions': value['permissions'],
        'size': value['size'],
    };
}

