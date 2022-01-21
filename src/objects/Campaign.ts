export default function (campaign: any) {
    return {
        id: campaign.id,
        name: campaign.name,
        sent: campaign.sent,
        canceled: campaign.canceled,
        sentCount: campaign.sent_count,
        respondedCount: campaign.responded_count,
        opportunityCount: campaign.opportunity_count,
        reachedCount: campaign.reached_count,
        totalCustomersCount: campaign.total_customers_count,
        optedOutCount: campaign.opted_out_count,
        customers: campaign.customers,
        sendReviewInvite: campaign.send_review_invite,
        sendConsent: campaign.send_consent,

        actionTime: campaign.action_time,
        timeOffset: campaign.time_offset,

        message: campaign.message,

        whoCreated: campaign.who_created,
        media: campaign.media,

        createdAt: campaign.createdAt,
        updatedAt: campaign.updatedAt,

        locationId: campaign._location_id,
        organizationId: campaign._organization_id,
    };
}