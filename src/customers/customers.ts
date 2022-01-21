import {CustomersResource} from "./types";
import * as ClientTypes from "../types/clientTypes";

import HttpClient from "../http/client";
import * as hosts from "../http/hosts";
import Note from "../objects/Note";

export default function (config: ClientTypes.MatadorClientConfig): CustomersResource {
    return {

        createNote: async (text, customerPhone) => {
            const response = await HttpClient(
                {
                    method: "POST",
                    host: hosts.engagementHost,
                    path: "/create-note",
                }, 
                {
                    text, 
                    customer_phone: customerPhone, 
                },
                config.apiKey
            );
            return Note(response.note);
        }
    };
    
}