import * as ResourcesTypes from "../types/resources";
import * as ClientTypes from "../types/client";

import HttpClient from "../http/client";
import endpoints from "../http/endpoints";

export default function (config: ClientTypes.MatadorClientConfig): ResourcesTypes.Automations {
    return {
        getAll: async (locationId) => {
            return HttpClient(endpoints.automations.getAll, {location_id: locationId}, config.apiKey);
        },
        
        update: async (loactionId, automationId, params) => {
            return HttpClient(
                endpoints.automations.update, 
                {
                    location_id: loactionId, 
                    automation_id: automationId, 
                    ...params
                },
                config.apiKey
            );
        }
    }
    
}