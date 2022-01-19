import {Method} from "axios"

export interface HTTPEndpoint {
    method: Method,
    host: string,
    path: string
}