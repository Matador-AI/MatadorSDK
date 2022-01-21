import {AppointmentResource} from "./types";
import * as ClientTypes from "../types/clientTypes";

import HttpClient from "../http/client";
import * as hosts from "../http/hosts";
import AppointmentObject from "../objects/Appointment";

export default function (config: ClientTypes.MatadorClientConfig): AppointmentResource {
    return {
        createCalendarInvitation: async (locationId, params) => {
            const response = await HttpClient(
                {
                    method: "POST",
                    host: hosts.engagementHost,
                    path: "/create-calendar-invitation/"+locationId,
                }, 
                params, 
                config.apiKey
            );

            return AppointmentObject({
                ...response.customer.lastAppointment,
                customerId: response.customer._id
            });
        },
        updateCalendarInvitation: async (locationId, appointmentId, params) => {
            const response = await HttpClient(
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

            let appointment: any = {
            };

            response.appointments.map((one: any) => {
                if(one._id == appointmentId) appointment = AppointmentObject(one);
            });

            delete appointment.customerId;

            return appointment;

        },
        deleteCalendarInvitation: async (locationId, appointmentId, params) => {
            const response = await HttpClient(
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

            let appointment: any = {
            };

            response.appointments.map((one: any) => {
                if(one._id == appointmentId) appointment = AppointmentObject(one);
            });

            delete appointment.customerId;

            return appointment;
        }
    };
    
}