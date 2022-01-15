import automations from "./automations/automations";
import * as ResourcesTypes from "./types/resources";
import * as ClientTypes from "./types/client";

export default class MatadorClient {

    public version = "0.0.1";
    protected config: ClientTypes.MatadorClientConfig = {
        apiKey: "",
    };

    constructor(apiKey: string) {
        this.config.apiKey = apiKey;
    }

    public automations: ResourcesTypes.Automations = automations(this.config);

}