import {IVehicleOfInterest} from "../customers/types";

export interface LeadsResource {
    createNewLead(locationId: string, params: {
        firstName: string,
        lastName: string,
        email?: string,
        phone: string,
        source: string,
        comments?: string,
        initialMessage?: string,
        vehicles?: IVehicleOfInterest[],
        usersToAssign?: string[]
        crmInfo?: {
            crmType?: string,
            crmLeadId?: string,
            crmLeadStatus?: string,
            crmCustomerId?: string,
            carSalesLeadId?: string
        }
    }): Promise<any>;
}