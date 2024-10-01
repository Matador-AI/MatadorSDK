import {LeadsResource} from "./types";
import * as ClientTypes from "../types/clientTypes";

import HttpClient from "../http/client";
import * as hosts from "../http/hosts";

export default function (config: ClientTypes.MatadorClientConfig): LeadsResource {
    return {
        createNewLead: async (locationId, params) => {
            const response = await HttpClient(
                {
                    method: "POST",
                    host: hosts.engagementHost,
                    path: "/lead/"+locationId,
                }, 
                {
                    customers: [
                        params
                    ]
                }, 
                config.apiKey
            );

            return response;
        }
    };
    
}