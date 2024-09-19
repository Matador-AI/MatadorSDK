export interface CustomersResource {
    createNote(text: string, customerPhone: string): Promise<any>;
    attachVehicle(customerId: string, vehicle: IVehicleOfInterest): Promise<any>;
    assignUserToConversation(userId: string, conversationId: string, isSuperhuman?: boolean): Promise<any>;
}

export interface IVehicleOfInterest {
    source?: string;
    year?: string;
    make: string;
    model?: string;
    trim?: string;
    series?: string;
    mileage?: string;
    stock?: string;
    status?: string;
    type?: string;
    condition?: string;
    vin?: string;
    transmission?: string;
    color?: ICarColor;
    finance?: ICarFinance;
    price?: ICarPrice;
}

interface ICarColor {
    interiorcolor?: string;
    exteriorcolor?: string;
}

interface ICarFinance {
    method?: string;
    amount?: string;
}

interface ICarPrice {
    value?: string;
    currency?: string;
    type?: string;
}