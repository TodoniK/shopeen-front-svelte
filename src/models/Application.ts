import type { Configuration } from './Configuration';

export class Application {
    id?: string;
    nomApp: string;
    configuration: Configuration;

    constructor(nomApp: string, configuration: Configuration) {
        this.nomApp = nomApp;
        this.configuration = configuration;
    }
}