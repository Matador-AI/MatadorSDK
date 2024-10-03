import {IVehicleOfInterest} from "../customers/types";

export interface LeadsResource {
    createNewLead(locationId: string, params: {
        firstName: string,
        lastName: string,
        email?: string,
        phone: string,
        source: string,
        initialMessage?: string,
        vehicles?: IVehicleOfInterest[],
        usersToAssign?: string[]
    }): Promise<any>;
}