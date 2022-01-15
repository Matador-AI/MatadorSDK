import * as ResourcesTypes from "../types/resources";
import * as ClientTypes from "../types/client";

import HttpClient from "../http/client";
import endpoints from "../http/endpoints";

export default function (config: ClientTypes.MatadorClientConfig): ResourcesTypes.Automations {
    return {
        getAll: async (locationId: string): Promise<Object> => {
            return HttpClient(endpoints.automations.getAll, {location_id: locationId}, config.apiKey);
        },

        update: (locationId: string): Promise<Object> => {
            return new Promise((resolve, reject) => {});
        }
    }
    
}