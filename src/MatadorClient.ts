import appointments from "./appointments/appointments";
import automations from "./automations/automations";
import campaigns from "./campaigns/campaigns";
import customers from "./customers/customers";
import leads from "./leads/leads";
import aiBot from "./aiBot/aiBot";
import * as ClientTypes from "./types/clientTypes";

export default class MatadorClient {

    protected config: ClientTypes.MatadorClientConfig = {
        apiKey: "",
    };

    constructor(apiKey: string) {
        this.config.apiKey = apiKey;
    }

    public aiBot = aiBot(this.config);
    public appointments = appointments(this.config);
    public automations = automations(this.config);
    public campaigns = campaigns(this.config);
    public customers = customers(this.config);
    public leads = leads(this.config);

}