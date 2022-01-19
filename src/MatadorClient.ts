import automations from "./automations/automations";
import broadcasts from "./broadcasts/broadcasts";
import appointments from "./appointments/appointments";
import * as ClientTypes from "./types/clientTypes";

export default class MatadorClient {

    protected config: ClientTypes.MatadorClientConfig = {
        apiKey: "",
    };

    constructor(apiKey: string) {
        this.config.apiKey = apiKey;
    }

    public automations = automations(this.config);
    public broadcasts = broadcasts(this.config);
    public appointments = appointments(this.config);

}