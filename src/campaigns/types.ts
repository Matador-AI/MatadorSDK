
interface BroadcastCustomer {
    firstName: string,
    lastName: string,
    phone: string,
    [key: string]: any
}

// resources


export interface CampaignResource{
    createCampaign(locationId: string, params: {
        name: string,
        message: string,
        action_time: number,
        time_offset: number,
        users: BroadcastCustomer[],
        send_consent: boolean,
        send_review_invite: boolean
    }): Promise<any>,
    findDealersCampaign(locationId: string): Promise<any>,
    getCampaign(campaignId: string): Promise<any>,
    changeCampaign(campaignId: string, params: {
        action_time: number,
        canceled: boolean
    }): Promise<any>,

    addCustomers(campaignId: string, users: BroadcastCustomer[]): Promise<any>,
    removeCustomers(
        campaignId: string, 
        users: [{phone: number | string }]
    ): Promise<any>,

}
