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
  ContainerRegistry,
} from '../models/index';
import {
    ContainerRegistryFromJSON,
    ContainerRegistryToJSON,
} from '../models/index';

export interface GetContainerRegistryRequest {
    server: string;
}

export interface RemoveContainerRegistryRequest {
    server: string;
}

export interface SetContainerRegistryRequest {
    server: string;
    containerRegistry: ContainerRegistry;
}

/**
 * 
 */
export class ContainerRegistryApi extends runtime.BaseAPI {

    /**
     * Get container registry credentials
     * Get container registry credentials
     */
    async getContainerRegistryRaw(requestParameters: GetContainerRegistryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ContainerRegistry>> {
        if (requestParameters['server'] == null) {
            throw new runtime.RequiredError(
                'server',
                'Required parameter "server" was null or undefined when calling getContainerRegistry().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/container-registry/{server}`.replace(`{${"server"}}`, encodeURIComponent(String(requestParameters['server']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ContainerRegistryFromJSON(jsonValue));
    }

    /**
     * Get container registry credentials
     * Get container registry credentials
     */
    async getContainerRegistry(requestParameters: GetContainerRegistryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ContainerRegistry> {
        const response = await this.getContainerRegistryRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List container registries
     * List container registries
     */
    async listContainerRegistriesRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<ContainerRegistry>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/container-registry`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ContainerRegistryFromJSON));
    }

    /**
     * List container registries
     * List container registries
     */
    async listContainerRegistries(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<ContainerRegistry>> {
        const response = await this.listContainerRegistriesRaw(initOverrides);
        return await response.value();
    }

    /**
     * Remove a container registry credentials
     * Remove a container registry credentials
     */
    async removeContainerRegistryRaw(requestParameters: RemoveContainerRegistryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['server'] == null) {
            throw new runtime.RequiredError(
                'server',
                'Required parameter "server" was null or undefined when calling removeContainerRegistry().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/container-registry/{server}`.replace(`{${"server"}}`, encodeURIComponent(String(requestParameters['server']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Remove a container registry credentials
     * Remove a container registry credentials
     */
    async removeContainerRegistry(requestParameters: RemoveContainerRegistryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.removeContainerRegistryRaw(requestParameters, initOverrides);
    }

    /**
     * Set container registry credentials
     * Set container registry credentials
     */
    async setContainerRegistryRaw(requestParameters: SetContainerRegistryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['server'] == null) {
            throw new runtime.RequiredError(
                'server',
                'Required parameter "server" was null or undefined when calling setContainerRegistry().'
            );
        }

        if (requestParameters['containerRegistry'] == null) {
            throw new runtime.RequiredError(
                'containerRegistry',
                'Required parameter "containerRegistry" was null or undefined when calling setContainerRegistry().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/container-registry/{server}`.replace(`{${"server"}}`, encodeURIComponent(String(requestParameters['server']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: ContainerRegistryToJSON(requestParameters['containerRegistry']),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Set container registry credentials
     * Set container registry credentials
     */
    async setContainerRegistry(requestParameters: SetContainerRegistryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.setContainerRegistryRaw(requestParameters, initOverrides);
    }

}