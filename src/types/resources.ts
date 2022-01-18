import {Method} from "axios"

export interface HTTPEndpoint {
    method: Method,
    host: string,
    path: string
}

export interface HttpResource {
    [key: string]: HTTPEndpoint;
}

interface User {
    firstName: string,
    lastName: string,
    phone: string,
    [key: string]: any
}

// resources
export interface Automations {
    getAll(locationId: string): Promise<any>;
    update(locationId: string, automationId: string, params: {
        message?: string,
        active?: boolean,
        frequency?: {
            increment: string,
            days?: number[],
            weekdays?: string[],
            time: {
                hour: number,
                minute: number
                isoTimezone: string
            }
        }
    }): Promise<any>;
}

export interface Broadcasts {
    createCampaign(locationId: string, params: {
        name: string,
        message: string,
        action_time: number,
        time_offset: number,
        users: User[],
        send_consent: boolean,
        send_review_invite: boolean
    }): Promise<any>;
}

export interface Appointments {
    createCalendarInvitation(locationId: string, params: {
        event_start_date: number,
        event_start_offset: number,
        phone: number | string
    }): Promise<any>;
    updateCalendarInvitation(locationId: string, appointmentId: string, params: {
        customer_id: string
        event_start_date: number,
        event_start_offset: number
    }): Promise<any>;
    deleteCalendarInvitation(locationId: string, appointmentId: string, params: {
        customer_phone: number | string
    }): Promise<any>;
}