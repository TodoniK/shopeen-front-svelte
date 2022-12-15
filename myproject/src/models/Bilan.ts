import type {ReferentielMesure} from "./ReferentielMesure";

export class Bilan {
    bilanCO2: number = 0;
    bilanEnergy: number = 0;
    bilanEco: number = 0;

    constructor() {
    }

    private calculerBilanEco(tabReferentiel: Array<ReferentielMesure>, tabReponses){

        let sommeEco = 0;

        for(let j = 0; j < tabReponses.length; j++)
        {
            for(let i = 0; i < tabReferentiel.length; i++)
            {
                if(tabReferentiel[i].id == tabReponses[j].id)
                {
                    sommeEco = sommeEco+tabReponses[j].reponse*tabReferentiel[i].euro
                }
            }
        }

        this.bilanEco = sommeEco;
    }

    private calculerBilanCO2(tabReferentiel: Array<ReferentielMesure>, tabReponses){

        let sommeTabCO2 = 0;

        for(let j = 0; j < tabReponses.length; j++)
        {
            for(let i = 0; i < tabReferentiel.length; i++)
            {
                if(tabReferentiel[i].id == tabReponses[j].id)
                {
                    sommeTabCO2 = sommeTabCO2+tabReponses[j].reponse*tabReferentiel[i].kgeqCO2
                }
            }
        }

        this.bilanCO2 = sommeTabCO2;
    }

    private calculerBilanEnergy(tabReferentiel: Array<ReferentielMesure>, tabReponses){

        let sommeEnergy = 0;

        for(let j = 0; j < tabReponses.length; j++)
        {
            for(let i = 0; i < tabReferentiel.length; i++)
            {
                if(tabReferentiel[i].id == tabReponses[j].id)
                {
                    sommeEnergy = sommeEnergy+tabReponses[j].reponse*tabReferentiel[i].kwH
                }
            }
        }

        this.bilanEnergy = sommeEnergy;
    }

    calculerBilans(tabReferentiel: Array<ReferentielMesure>, tabReponses){

        this.calculerBilanCO2(tabReferentiel, tabReponses)
        this.calculerBilanEco(tabReferentiel, tabReponses)
        this.calculerBilanEnergy(tabReferentiel, tabReponses)

    }
}