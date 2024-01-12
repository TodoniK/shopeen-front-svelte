import type { Application } from './Application';

export class Mesure {
    id?: string;
    chargeProcMoy: number;
    duree: number;
    horodate: string;
    application: Application;

    constructor(chargeProcMoy: number, duree: number, horodate: string, application: Application) {
        this.chargeProcMoy = chargeProcMoy;
        this.duree = duree;
        this.horodate = horodate;
        this.application = application;
    }
}