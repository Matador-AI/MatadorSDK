export default function (automation: any) {
    return {
        id: automation._id,
        active: automation.active,
        name: automation.name,
        type: automation.type,
        message: automation.message,
        createdAt: automation.createdAt,
        updatedAt: automation.updatedAt,
        organizationId: automation.organization_id,
        locationId: automation.location_id
    };
}