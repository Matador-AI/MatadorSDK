export interface CustomersResource {
    createNote(text: string, customerPhone: string): Promise<any>;
    attachVehicle(customerId: string, vehicle: VehicleOfInterest): Promise<any>;
}

export interface VehicleOfInterest {
    source: string | null;
    year: string | null;
    make: string | null;
    model: string | null;
    trim: string | null;
    series: string | null;
    mileage: string | null;
    stock: string | null;
    status: string | null;
    type: string | null;
    condition: string | null;
    vin: string | null;
    transmission: string | null;
    color: CarColor | null;
    finance: CarFinance | null;
    price: CarPrice | null;
}

interface CarColor {
    interiorcolor: string | null;
    exteriorcolor: string | null;
}

interface CarFinance {
    method: string | null;
    amount: string | null;
}

interface CarPrice {
    value: string | null;
    currency: string | null;
    type: string | null;
}