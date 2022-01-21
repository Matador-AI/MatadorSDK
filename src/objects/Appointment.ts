export default function (appointment: any) {
    return {
        id: appointment._id,
        customerId: appointment.customerId,
        whoCreated: appointment._user_id,
        eventStart: appointment.eventStart,
        eventOffset: appointment.eventStartOffset,
        isEmailAppointment: appointment.isEmailAppointment,
        action: appointment.action,
        locationId: appointment._location_id,
        createdAt: appointment.createdAt,
        updatedAt: appointment.updatedAt,
    };
}