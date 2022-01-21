import HttpClient from "./http/client";
import { engagementHost } from "./http/hosts";
import * as qs from "qs";

const findDealer = async (integrationApiKey: string, dealershipName: string) => HttpClient(
    {
        method: "GET",
        host: engagementHost,
        path: "/findDealer?"+qs.stringify({dealership_name: dealershipName}),
    },
    {

    },
    integrationApiKey
);

export default findDealer;