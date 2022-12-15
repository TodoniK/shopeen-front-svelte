import {Bilan} from "../models/Bilan";
import {TAB_REFERENTIELS} from "../referentiel/listeReferentiels";

const unBilan = new Bilan();
describe("Tests bilan", () => {

// Test sur l'attribut CO2 de la classe Bilan
it('Un si contenant 15 pages web devrait consommer 225keqCO2', () => {

    const unTabTest = new Array({
        id: "nbPagesWeb",
        reponse: 15
    })

    unBilan.calculerBilans(TAB_REFERENTIELS,unTabTest)

    expect(unBilan.bilanCO2).toBe(225);
});

// Test sur l'attribut economique de la classe Bilan
it('Un si contenant 31 conteneurs devrait couter 279€', () => {

    const unTabTest = new Array({
        id: "nbConteneurs",
        reponse: 31
    })

    unBilan.calculerBilans(TAB_REFERENTIELS,unTabTest)

    expect(unBilan.bilanEco).toBe(279);
});

// Test sur l'attribut energie de la classe Bilan
it('Un si contenant 78 moniteurs devrait consommer 546 kwH', () => {

    const unTabTest = new Array({
        id: "nbMoniteurs",
        reponse: 78
    })

    unBilan.calculerBilans(TAB_REFERENTIELS,unTabTest)

    expect(unBilan.bilanEnergy).toBe(546);
});

// Test sur tous les attributs de la classe Bilan
it('Un si contenant 3 pc de dev devrait consommer 6€, 21kwH et 45kqeqCO2', () => {

    const unTabTest = new Array({
        id: "nbPCDevs",
        reponse: 3
    })

    unBilan.calculerBilans(TAB_REFERENTIELS,unTabTest)

    expect(unBilan.bilanEnergy).toBe(21);
    expect(unBilan.bilanEco).toBe(6);
    expect(unBilan.bilanCO2).toBe(45);
});}
)