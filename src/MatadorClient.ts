import appointments from "./appointments/appointments";
import automations from "./automations/automations";
import campaigns from "./campaigns/campaigns";
import customers from "./customers/customers";
import * as ClientTypes from "./types/clientTypes";

export default class MatadorClient {

    protected config: ClientTypes.MatadorClientConfig = {
        apiKey: "",
    };

    constructor(apiKey: string) {
        this.config.apiKey = apiKey;
    }

    public appointments = appointments(this.config);
    public automations = automations(this.config);
    public campaigns = campaigns(this.config);
    public customers = customers(this.config);

}