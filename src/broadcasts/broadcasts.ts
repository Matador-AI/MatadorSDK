import * as ResourcesTypes from "../types/resources";
import * as ClientTypes from "../types/client";

import HttpClient from "../http/client";
import endpoints from "../http/endpoints";

export default function (config: ClientTypes.MatadorClientConfig): ResourcesTypes.Broadcasts {
    return {
        createCampaign: async (locationId, params) => {
            return HttpClient(endpoints.broadcasts.createCampaign, {
                _location_id: locationId,
                ...params
            }, 
            config.apiKey);
        },
    }
    
}