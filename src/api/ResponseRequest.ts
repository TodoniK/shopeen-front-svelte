import API from "./shopeen-api";
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

    static postResponse(idQuestion: string, userResponse: number, consoMoy: number){
        API.post(
            "/responses",
            {"idQuestion": idQuestion,
                "userResponse": userResponse,
                "consoMoy": consoMoy})
            .then((response) => {
                    return response.data;
                }
            );
    }
}