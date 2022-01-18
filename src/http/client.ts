import axios from "axios";
import {HTTPEndpoint} from "../types/resources";

import errorParser from "./errorParser";

export default async (endpoint: HTTPEndpoint, body: object, apiKey: string) => {
    const config = {
        url: endpoint.host+endpoint.path,
        method: endpoint.method,
        headers: {"Authorization": "Bearer "+apiKey},
        data: body
    }

    try {
        const response = await axios(config);
        return response.data;
    }catch(err: any) {
        throw errorParser(err);
    }
}