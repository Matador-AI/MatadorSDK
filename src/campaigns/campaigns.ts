import {CampaignResource} from "./types";
import * as ClientTypes from "../types/clientTypes";

import HttpClient from "../http/client";
import * as hosts from "../http/hosts";
import CampaignObject from "../objects/Campaign";

export default function (config: ClientTypes.MatadorClientConfig): CampaignResource {
    return {
        createCampaign: async (locationId, params) => {
            const campaign = await HttpClient(
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
            return CampaignObject(campaign);
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

            const campaign = await HttpClient(
                {
                    method: "GET",
                    host: hosts.engagementHost,
                    path: "/getCampaign/"+campaignId,
                }, 
                {
                }, 
                config.apiKey
            );
            return CampaignObject(campaign);
        },

        changeCampaign: async (campaignId, params) => {
            const campaign = await HttpClient(
                {
                    method: "PATCH",
                    host: hosts.engagementHost,
                    path: "/changeCampaign/"+campaignId,
                },
               params,
                config.apiKey
            );

            return CampaignObject(campaign);
        },

        addCustomers: async(campaignId, users) => {
            const response = await HttpClient(
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
            return {
                message: response.message,
            };
        },

        removeCustomers: async(campaignId, users) => {
            const response = await HttpClient(
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
            return {
                message: response.message
            };
        },

    };
    
}