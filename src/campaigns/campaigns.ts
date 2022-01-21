import {CampaignResource} from "./types";
import * as ClientTypes from "../types/clientTypes";

import HttpClient from "../http/client";
import * as hosts from "../http/hosts";

export default function (config: ClientTypes.MatadorClientConfig): CampaignResource {
    return {
        createCampaign: async (locationId, params) => {
            return HttpClient(
                {
                    method: "POST",
                    host: hosts.engagementHost,
                    path: "/create-broadcast-campaign",
                }, 
                {
                    _location_id: locationId,
                    ...params
                }, 
                config.apiKey
            );
        },

        findDealersCampaign: async (locationId) => {

            return HttpClient(
                {
                    method: "GET",
                    host: hosts.engagementHost,
                    path: "/findDealersCampaign",
                }, 
                {
                    location_id: locationId
                }, 
                config.apiKey
            );
        },

        getCampaign: async (campaignId) => {

            return HttpClient(
                {
                    method: "GET",
                    host: hosts.engagementHost,
                    path: "/getCampaign/"+campaignId,
                }, 
                {
                }, 
                config.apiKey
            );
        },

        changeCampaign: async (campaignId, params) => {
            return HttpClient(
                {
                    method: "PATCH",
                    host: hosts.engagementHost,
                    path: "/changeCampaign/"+campaignId,
                },
               params,
                config.apiKey
            );
        },

        addCustomers: async(campaignId, users) => {
            return HttpClient(
                {
                    method: "POST",
                    host: hosts.engagementHost,
                    path: "/addOrRemoveCustomers/"+campaignId,
                },
                {
                    action: "ADD",
                    users
                },
                config.apiKey
            );
        },

        removeCustomers: async(campaignId, users) => {
            return HttpClient(
                {
                    method: "POST",
                    host: hosts.engagementHost,
                    path: "/addOrRemoveCustomers/"+campaignId,
                },
                {
                    action: "REMOVE",
                    users
                },
                config.apiKey
            );
        },

    };
    
}