import API from "./API";
import type {DataResponse} from "../models/Response";

export class ResponseRequest {

    static getAllResponses(): Promise<Array<DataResponse> | string> {
        return API.get("/responses")
            .then((response) => {
                    return response.data;
                }
            )
            .catch(error => {
                return error.message
            });
    }

    static getResponseById(idQuestion:string) : Promise<Array<DataResponse> | string> {
        return API.get("/responses/"+idQuestion)
            .then((response) => {
                    return response.data;
                }
            )
            .catch(error => {
                return error.message
            });
    }

    static postReponse(idQuestion: string, userResponse: number){
        API.post(
            "/responses",
            {"idQuestion": idQuestion,
                "userResponse": userResponse})
            .then((response) => {
                    return response.data;
                }
            );
    }
}