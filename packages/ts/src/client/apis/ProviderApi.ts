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
  InstallProviderRequest,
  Provider,
  ProviderProviderTargetProperty,
} from '../models/index';
import {
    InstallProviderRequestFromJSON,
    InstallProviderRequestToJSON,
    ProviderFromJSON,
    ProviderToJSON,
    ProviderProviderTargetPropertyFromJSON,
    ProviderProviderTargetPropertyToJSON,
} from '../models/index';

export interface GetTargetManifestRequest {
    provider: string;
}

export interface InstallProviderOperationRequest {
    provider: InstallProviderRequest;
}

export interface UninstallProviderRequest {
    provider: string;
}

/**
 * 
 */
export class ProviderApi extends runtime.BaseAPI {

    /**
     * Get provider target manifest
     * Get provider target manifest
     */
    async getTargetManifestRaw(requestParameters: GetTargetManifestRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<{ [key: string]: ProviderProviderTargetProperty; }>> {
        if (requestParameters['provider'] == null) {
            throw new runtime.RequiredError(
                'provider',
                'Required parameter "provider" was null or undefined when calling getTargetManifest().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/provider/{provider}/target-manifest`.replace(`{${"provider"}}`, encodeURIComponent(String(requestParameters['provider']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => runtime.mapValues(jsonValue, ProviderProviderTargetPropertyFromJSON));
    }

    /**
     * Get provider target manifest
     * Get provider target manifest
     */
    async getTargetManifest(requestParameters: GetTargetManifestRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<{ [key: string]: ProviderProviderTargetProperty; }> {
        const response = await this.getTargetManifestRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Install a provider
     * Install a provider
     */
    async installProviderRaw(requestParameters: InstallProviderOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['provider'] == null) {
            throw new runtime.RequiredError(
                'provider',
                'Required parameter "provider" was null or undefined when calling installProvider().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/provider/install`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: InstallProviderRequestToJSON(requestParameters['provider']),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Install a provider
     * Install a provider
     */
    async installProvider(requestParameters: InstallProviderOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.installProviderRaw(requestParameters, initOverrides);
    }

    /**
     * List providers
     * List providers
     */
    async listProvidersRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<Provider>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/provider`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ProviderFromJSON));
    }

    /**
     * List providers
     * List providers
     */
    async listProviders(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<Provider>> {
        const response = await this.listProvidersRaw(initOverrides);
        return await response.value();
    }

    /**
     * Uninstall a provider
     * Uninstall a provider
     */
    async uninstallProviderRaw(requestParameters: UninstallProviderRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['provider'] == null) {
            throw new runtime.RequiredError(
                'provider',
                'Required parameter "provider" was null or undefined when calling uninstallProvider().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/provider/{provider}/uninstall`.replace(`{${"provider"}}`, encodeURIComponent(String(requestParameters['provider']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Uninstall a provider
     * Uninstall a provider
     */
    async uninstallProvider(requestParameters: UninstallProviderRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.uninstallProviderRaw(requestParameters, initOverrides);
    }

}
