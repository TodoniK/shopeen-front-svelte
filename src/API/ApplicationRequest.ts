import API from "./API";
import type {ReferentielApp} from "../referentiel/ReferentielApp";

export class ApplicationRequest {

    static getApplicationsHistoric(): Promise<Array<ReferentielApp> | string> {
        return API.get("/appli")
            .then((response) => {
                    return response.data;
                }
            )
            .catch(error => {
                return error.message
            });
    }

    static postApplicationBilan(appName: string, bilanEnergy:number, bilanEuro:number, bilanCO2:number){
        API.post(
            "/appli",
            {"appName": appName,
                "bilanEuro": bilanEuro,
                "bilanCO2": bilanCO2,
                "bilanEnergy": bilanEnergy,})
            .then((response) => {
                    return response.data;
                }
            );
    }
}