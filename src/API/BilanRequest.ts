import API from "./API";
import type {BilanResponse} from "../models/Bilan";

export class BilanRequest {

    static getBilan(): Promise<Array<BilanResponse> | string> {
        return API.get("/bilan")
            .then((response) => {
                    return response.data;
                }
            )
            .catch(error => {
                return error.message
            });
    }
}