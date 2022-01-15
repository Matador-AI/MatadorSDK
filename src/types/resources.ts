import {Method} from "axios"

export interface Endpoint {
    method: Method,
    host: string,
    path: string
}

export interface HttpResource {
    [key: string]: Endpoint;
}

export interface Automations {
    getAll(locationId: string): Promise<Object>;
    update(locationId: string, automationId: string, automation: Object): Promise<Object>;
}