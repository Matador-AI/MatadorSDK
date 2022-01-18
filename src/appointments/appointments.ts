import * as ResourcesTypes from "../types/resources";
import * as ClientTypes from "../types/client";

import HttpClient from "../http/client";
import endpoints from "../http/endpoints";

export default function (config: ClientTypes.MatadorClientConfig): ResourcesTypes.Appointments {
    return {
        createCalendarInvitation: async (locationId, params) => {
            return HttpClient({
                ...endpoints.appointments.createCalendarInvitation,
                path: endpoints.appointments.createCalendarInvitation.path+locationId
            }, params, 
            config.apiKey);
        },
        updateCalendarInvitation: async (locationId, appointmentId, params) => {
            return HttpClient(
                {
                    ...endpoints.appointments.updateCalendarInvitation,
                    path: "/"+params.customer_id+ endpoints.appointments.updateCalendarInvitation.path+locationId
                }, 
                {
                    ...params,
                    appointment_id: appointmentId,
                    customer_id: undefined
                }, 
                config.apiKey
            );
        },
        deleteCalendarInvitation: async (locationId, appointmentId, params) => {
            return HttpClient(
                endpoints.appointments.deleteCalendarInvitation,
                {
                    ...params,
                    location_id: locationId,
                    appointment_id: appointmentId
                }, 
                config.apiKey
            );
        }
    }
    
}