import {AIBotResource} from "./types";
import * as ClientTypes from "../types/clientTypes";

import HttpClient from "../http/client";
import * as hosts from "../http/hosts";

export default function (config: ClientTypes.MatadorClientConfig): AIBotResource {
    return {
        turnOff: async (locationId, params) => {
            const response = await HttpClient(
                {
                    method: "POST",
                    host: hosts.engagementHost,
                    path: "/ai-bot/manage",
                }, 
                {
                    ...params,
                    location_id: locationId
                }, 
                config.apiKey
            );

            return response;
        }
    };
    
}