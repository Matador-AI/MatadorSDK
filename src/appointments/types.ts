export interface AppointmentResource {
    createCalendarInvitation(locationId: string, params: {
        event_start_date: number,
        event_start_offset: number,
        phone: string
    }): Promise<any>;
    updateCalendarInvitation(locationId: string, appointmentId: string, params: {
        customer_id: string
        event_start_date: number,
        event_start_offset: number
    }): Promise<any>;
    deleteCalendarInvitation(locationId: string, appointmentId: string, params: {
        customer_phone: string
    }): Promise<any>;
}