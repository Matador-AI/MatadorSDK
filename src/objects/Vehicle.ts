export default function (vehicle: AttachedVehicleOfInterest) {
    return {
        id: vehicle._id,
        customerId: vehicle._customer_id,
        organizationId: vehicle._organization_id,
        source: vehicle?.source,
        year: vehicle?.year,
        make: vehicle?.make,
        model: vehicle?.model,
        mileage: vehicle?.mileage,
        stockNumbed: vehicle?.stock,
        vin: vehicle?.vin,
        title: vehicle?.title,
        transmission: vehicle?.transmission,
        type: vehicle?.type,
        color: { interiorcolor: vehicle?.color?.interiorcolor, exteriorcolor: vehicle?.color?.exteriorcolor },
        finance: { method: vehicle?.finance?.method, amount: vehicle?.finance?.amount },
        price: { value: vehicle?.price?.value , currency: vehicle?.price?.currency, type: vehicle?.price?.type },
        status: vehicle?.status,
        condition: vehicle?.condition,
        trim: vehicle?.trim,
        series: vehicle?.series,
    };
}

interface AttachedVehicleOfInterest {
    source: string;
    year: string;
    make: string;
    model: string;
    trim: string;
    series: string;
    mileage: string;
    stock: string;
    status: string;
    condition: string;
    vin: string;
    transmission: string;
    type: string;
    color: {
        interiorcolor: string;
        exteriorcolor: string;
    };
    finance: {
        method: string;
        amount: string;
    };
    price: {
        value: string;
        currency: string;
        type: string;
    };
    title: string;
    extraInfo: {
        kbb_offer: string;
        price_estimate: string;
    };
    _id: string;
    _customer_id: string;
    _organization_id: string;
}