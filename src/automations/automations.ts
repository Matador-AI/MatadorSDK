import {AutomationResource} from "./types";
import * as ClientTypes from "../types/clientTypes";

import HttpClient from "../http/client";
import * as hosts from "../http/hosts";

export default function (config: ClientTypes.MatadorClientConfig): AutomationResource {
    return {
        getAll: async (locationId) => {
            return HttpClient(
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
        },
        
        update: async (locationId, automationId, params) => {
            return HttpClient(
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
        }
    };
    
}