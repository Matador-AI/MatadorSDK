
interface BroadcastCustomer {
    firstName: string,
    lastName: string,
    phone: string,
    [key: string]: any
}

// resources


export interface BroadcastResource {
    createCampaign(locationId: string, params: {
        name: string,
        message: string,
        action_time: number,
        time_offset: number,
        users: BroadcastCustomer[],
        send_consent: boolean,
        send_review_invite: boolean
    }): Promise<any>;
}
