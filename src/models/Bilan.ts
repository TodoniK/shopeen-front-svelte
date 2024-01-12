export class Bilan {
    eqCO2: number;
    kwH: number;
    euro: number;
    H2O: number;

    constructor(eqCO2: number, kwH: number, euro: number, H2O: number) {
        this.eqCO2 = eqCO2;
        this.kwH = kwH;
        this.euro = euro;
        this.H2O = H2O;
    }
}