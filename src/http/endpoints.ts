import {HttpResource} from "../types/resources";

const engagementHost = "https://api.matador.ai/api/v1/public";
const automationsHost = "https://automation.matador.ai/api";

const automations: HttpResource = {
    getAll: {
        method: "GET",
        host: automationsHost,
        path: "/public/automations/get-all",
    },
    update: {
        method: "PUT",
        host: automationsHost,
        path: "/public/automations/update",
    }
}

const broadcasts: HttpResource = {
    createCampaign: {
        method: "POST",
        host: engagementHost,
        path: "/create-broadcast-campaign",
    }, 
}

const appointments: HttpResource = {
    createCalendarInvitation: {
        method: "POST",
        host: engagementHost,
        path: "/create-calendar-invitation/",
    },
    updateCalendarInvitation: {
        method: "PATCH",
        host: engagementHost,
        path: "/update-calendar-invitation/",
    },  
    deleteCalendarInvitation: {
        method: "DELETE",
        host: engagementHost,
        path: "/delete-calendar-invitation",
    },  
}

export default {
    automations,
    broadcasts,
    appointments
}