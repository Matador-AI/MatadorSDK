import {AppointmentResource} from "./types";
import * as ClientTypes from "../types/clientTypes";

import HttpClient from "../http/client";
import * as hosts from "../http/hosts";

export default function (config: ClientTypes.MatadorClientConfig): AppointmentResource {
    return {
        createCalendarInvitation: async (locationId, params) => {
            return HttpClient(
                {
                    method: "POST",
                    host: hosts.engagementHost,
                    path: "/create-calendar-invitation/"+locationId,
                }, 
                params, 
                config.apiKey
            );
        },
        updateCalendarInvitation: async (locationId, appointmentId, params) => {
            return HttpClient(
                {
                    method: "PATCH",
                    host: hosts.engagementHost,
                    path: "/"+params.customer_id+"/update-calendar-invitation/"+locationId,
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
                {
                    method: "DELETE",
                    host: hosts.engagementHost,
                    path: "/delete-calendar-invitation",
                },
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