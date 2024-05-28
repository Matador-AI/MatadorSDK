export interface AppointmentResource {
    turnOff(locationId: string, params: {
        customers: {
            phone: string, 
            [key: string]: any
        }[]
    }): Promise<any>;
}