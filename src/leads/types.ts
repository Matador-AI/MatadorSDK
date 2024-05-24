export interface LeadsResource {
    createNewLead(locationId: string, params: {
        firstName: string,
        lastName: string,
        email?: string,
        phone: string,
        source: string,
        initialMessage?: string
    }): Promise<any>;
}