import {CustomersResource} from "./types";
import * as ClientTypes from "../types/clientTypes";

import HttpClient from "../http/client";
import * as hosts from "../http/hosts";
import Note from "../objects/Note";
import Vehicle from "../objects/Vehicle";
import Conversation from "../objects/Conversation";

export default function (config: ClientTypes.MatadorClientConfig): CustomersResource {
    return {
        createNote: async (text, customerPhone) => {
            const response = await HttpClient(
                {
                    method: "POST",
                    host: hosts.engagementHost,
                    path: "/notes",
                }, 
                {
                    text, 
                    customer_phone: customerPhone, 
                },
                config.apiKey
            );
            return Note(response.note);
        },
        attachVehicle: async (customerId, vehicle) => {
            const response = await HttpClient(
                {
                    method: "POST",
                    host: hosts.engagementHost,
                    path: `/customers/${customerId}/vehicles`,
                },
                vehicle,
                config.apiKey
            );
            return Vehicle(response);
        },
        assignUserToConversation: async (userId, conversationId, isSuperhuman = false) => {
            const response = await HttpClient({
                method: "POST",
                host: hosts.engagementHost,
                path: "/assign-user",
            }, {
                user_id: userId,
                conversation_id: conversationId,
                isSuperhuman: isSuperhuman,
            }, config.apiKey);
            return Conversation(response);
        }
    };
    
}