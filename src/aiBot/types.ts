export interface AIBotResource {
    turnOff(locationId: string, params: {
        customers: {
            phone: string, 
            [key: string]: any
        }[]
    }): Promise<any>;
}