export default function (vehicle: any) {
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