import {AutomationResource} from "./types";
import * as ClientTypes from "../types/clientTypes";

import HttpClient from "../http/client";
import * as hosts from "../http/hosts";
import AutomationObject from "../objects/Automation";

export default function (config: ClientTypes.MatadorClientConfig): AutomationResource {
    return {
        getAll: async (locationId) => {
            const response = await HttpClient(
                {
                    method: "GET",
                    host: hosts.automationsHost,
                    path: "/public/automations/get-all",
                },
                {
                    location_id: locationId
                }, 
                config.apiKey
            );

            return response.data.map((automation: any) => AutomationObject(automation));
        },
        
        update: async (locationId, automationId, params) => {
            const response = await HttpClient(
                {
                    method: "PUT",
                    host: hosts.automationsHost,
                    path: "/public/automations/update",
                }, 
                {
                    location_id: locationId, 
                    automation_id: automationId, 
                    ...params
                },
                config.apiKey
            );

            delete response?.status;
            return response;
        }
    };
    
}