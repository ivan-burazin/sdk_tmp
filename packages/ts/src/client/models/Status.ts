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


/**
 * 
 * @export
 */
export const Status = {
    Unmodified: 'Unmodified',
    Untracked: 'Untracked',
    Modified: 'Modified',
    Added: 'Added',
    Deleted: 'Deleted',
    Renamed: 'Renamed',
    Copied: 'Copied',
    UpdatedButUnmerged: 'Updated but unmerged'
} as const;
export type Status = typeof Status[keyof typeof Status];


export function instanceOfStatus(value: any): boolean {
    for (const key in Status) {
        if (Object.prototype.hasOwnProperty.call(Status, key)) {
            if (Status[key as keyof typeof Status] === value) {
                return true;
            }
        }
    }
    return false;
}

export function StatusFromJSON(json: any): Status {
    return StatusFromJSONTyped(json, false);
}

export function StatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): Status {
    return json as Status;
}

export function StatusToJSON(value?: Status | null): any {
    return value as any;
}

export function StatusToJSONTyped(value: any, ignoreDiscriminator: boolean): Status {
    return value as Status;
}

