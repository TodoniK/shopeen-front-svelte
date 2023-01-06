import {BilanRequest} from "../API/BilanRequest";

export interface BilanResponse {bilanEuro : string, bilanKwh : string, bilanKgeqCO2 : string}

export class Bilan {

    bilanEuro: number = 0;
    bilanKwh: number = 0;
    bilanKgeqCO2: number = 0;

    constructor(){}

    majValeurs(){
        BilanRequest.getBilan().then(r => {
            // @ts-ignore
            this.bilanEuro = Math.round(r.bilanEuro);console.log(r.bilanEuro)
            // @ts-ignore
            this.bilanKwh = Math.round(r.bilanKwh);console.log(r.bilanKwh)
            // @ts-ignore
            this.bilanKgeqCO2 = Math.round(r.bilanKgeqCO2);console.log(r.bilanKgeqCO2)
        })
        console.log(this.bilanKgeqCO2,this.bilanKwh,this.bilanEuro)
    }
}