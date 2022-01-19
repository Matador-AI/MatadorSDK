export interface AutomationResource {
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