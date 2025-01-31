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


import * as runtime from '../runtime';
import type {
  CreatePrebuildDTO,
  PrebuildDTO,
} from '../models/index';
import {
    CreatePrebuildDTOFromJSON,
    CreatePrebuildDTOToJSON,
    PrebuildDTOFromJSON,
    PrebuildDTOToJSON,
} from '../models/index';

export interface DeletePrebuildRequest {
    configName: string;
    prebuildId: string;
    force?: boolean;
}

export interface GetPrebuildRequest {
    configName: string;
    prebuildId: string;
}

export interface ListPrebuildsForProjectConfigRequest {
    configName: string;
}

export interface ProcessGitEventRequest {
    workspace: object;
}

export interface SetPrebuildRequest {
    configName: string;
    prebuild: CreatePrebuildDTO;
}

/**
 * 
 */
export class PrebuildApi extends runtime.BaseAPI {

    /**
     * Delete prebuild
     * Delete prebuild
     */
    async deletePrebuildRaw(requestParameters: DeletePrebuildRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['configName'] == null) {
            throw new runtime.RequiredError(
                'configName',
                'Required parameter "configName" was null or undefined when calling deletePrebuild().'
            );
        }

        if (requestParameters['prebuildId'] == null) {
            throw new runtime.RequiredError(
                'prebuildId',
                'Required parameter "prebuildId" was null or undefined when calling deletePrebuild().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['force'] != null) {
            queryParameters['force'] = requestParameters['force'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/project-config/{configName}/prebuild/{prebuildId}`.replace(`{${"configName"}}`, encodeURIComponent(String(requestParameters['configName']))).replace(`{${"prebuildId"}}`, encodeURIComponent(String(requestParameters['prebuildId']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete prebuild
     * Delete prebuild
     */
    async deletePrebuild(requestParameters: DeletePrebuildRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deletePrebuildRaw(requestParameters, initOverrides);
    }

    /**
     * Get prebuild
     * Get prebuild
     */
    async getPrebuildRaw(requestParameters: GetPrebuildRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PrebuildDTO>> {
        if (requestParameters['configName'] == null) {
            throw new runtime.RequiredError(
                'configName',
                'Required parameter "configName" was null or undefined when calling getPrebuild().'
            );
        }

        if (requestParameters['prebuildId'] == null) {
            throw new runtime.RequiredError(
                'prebuildId',
                'Required parameter "prebuildId" was null or undefined when calling getPrebuild().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/project-config/{configName}/prebuild/{prebuildId}`.replace(`{${"configName"}}`, encodeURIComponent(String(requestParameters['configName']))).replace(`{${"prebuildId"}}`, encodeURIComponent(String(requestParameters['prebuildId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PrebuildDTOFromJSON(jsonValue));
    }

    /**
     * Get prebuild
     * Get prebuild
     */
    async getPrebuild(requestParameters: GetPrebuildRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PrebuildDTO> {
        const response = await this.getPrebuildRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List prebuilds
     * List prebuilds
     */
    async listPrebuildsRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<PrebuildDTO>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/project-config/prebuild`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(PrebuildDTOFromJSON));
    }

    /**
     * List prebuilds
     * List prebuilds
     */
    async listPrebuilds(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<PrebuildDTO>> {
        const response = await this.listPrebuildsRaw(initOverrides);
        return await response.value();
    }

    /**
     * List prebuilds for project config
     * List prebuilds for project config
     */
    async listPrebuildsForProjectConfigRaw(requestParameters: ListPrebuildsForProjectConfigRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<PrebuildDTO>>> {
        if (requestParameters['configName'] == null) {
            throw new runtime.RequiredError(
                'configName',
                'Required parameter "configName" was null or undefined when calling listPrebuildsForProjectConfig().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/project-config/{configName}/prebuild`.replace(`{${"configName"}}`, encodeURIComponent(String(requestParameters['configName']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(PrebuildDTOFromJSON));
    }

    /**
     * List prebuilds for project config
     * List prebuilds for project config
     */
    async listPrebuildsForProjectConfig(requestParameters: ListPrebuildsForProjectConfigRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<PrebuildDTO>> {
        const response = await this.listPrebuildsForProjectConfigRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * ProcessGitEvent
     * ProcessGitEvent
     */
    async processGitEventRaw(requestParameters: ProcessGitEventRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['workspace'] == null) {
            throw new runtime.RequiredError(
                'workspace',
                'Required parameter "workspace" was null or undefined when calling processGitEvent().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/project-config/prebuild/process-git-event`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['workspace'] as any,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * ProcessGitEvent
     * ProcessGitEvent
     */
    async processGitEvent(requestParameters: ProcessGitEventRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.processGitEventRaw(requestParameters, initOverrides);
    }

    /**
     * Set prebuild
     * Set prebuild
     */
    async setPrebuildRaw(requestParameters: SetPrebuildRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<string>> {
        if (requestParameters['configName'] == null) {
            throw new runtime.RequiredError(
                'configName',
                'Required parameter "configName" was null or undefined when calling setPrebuild().'
            );
        }

        if (requestParameters['prebuild'] == null) {
            throw new runtime.RequiredError(
                'prebuild',
                'Required parameter "prebuild" was null or undefined when calling setPrebuild().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/project-config/{configName}/prebuild`.replace(`{${"configName"}}`, encodeURIComponent(String(requestParameters['configName']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: CreatePrebuildDTOToJSON(requestParameters['prebuild']),
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<string>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * Set prebuild
     * Set prebuild
     */
    async setPrebuild(requestParameters: SetPrebuildRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<string> {
        const response = await this.setPrebuildRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
