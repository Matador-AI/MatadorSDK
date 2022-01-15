import {HttpResource} from "../types/resources";

const engagementHost = "https://api.matador.ai/api/v1";
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
        path: "/automations/update",
    }
}

export default {
    automations
}