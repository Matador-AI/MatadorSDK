import {BroadcastResource} from "./types";
import * as ClientTypes from "../types/clientTypes";

import HttpClient from "../http/client";
import * as hosts from "../http/hosts";

export default function (config: ClientTypes.MatadorClientConfig): BroadcastResource {
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
    }
    
}