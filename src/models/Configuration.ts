export class Configuration {
    id?: string;
    nbConteneurs: number;
    quotaCPU: number;
    nbOrdisDev: number;
    nbMoniteurs: number;
    nbDev: number;

    constructor(nbConteneurs: number, quotaCPU: number, nbOrdisDev: number, nbMoniteurs: number, nbDev: number) {
        this.nbConteneurs = nbConteneurs;
        this.quotaCPU = quotaCPU;
        this.nbOrdisDev = nbOrdisDev;
        this.nbMoniteurs = nbMoniteurs;
        this.nbDev = nbDev;
    }
}