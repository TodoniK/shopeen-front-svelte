import type {Referentiel} from "./Referentiel";

export class Bilan {
    bilanCO2: number = 0;
    bilanEnergy: number = 0;
    bilanEco: number = 0;

    constructor() {
    }

    private calculerBilanEco(tabReferentiel: Array<Referentiel>, tabReponses){
        for(let j = 0; j < tabReponses.length; j++)
        {
            for(let i = 0; i < tabReferentiel.length; i++)
            {
                if(tabReferentiel[i].id == tabReponses[j].id)
                {
                    this.bilanEco = this.bilanEco+tabReponses[j].reponse*tabReferentiel[i].euro
                }
            }
        }
    }

    private calculerBilanCO2(tabReferentiel: Array<Referentiel>, tabReponses){
        for(let j = 0; j < tabReponses.length; j++)
        {
            for(let i = 0; i < tabReferentiel.length; i++)
            {
                if(tabReferentiel[i].id == tabReponses[j].id)
                {
                    this.bilanCO2 = this.bilanCO2+tabReponses[j].reponse*tabReferentiel[i].kgeqCO2
                }
            }
        }
    }

    private calculerBilanEnergy(tabReferentiel: Array<Referentiel>, tabReponses){
        for(let j = 0; j < tabReponses.length; j++)
        {
            for(let i = 0; i < tabReferentiel.length; i++)
            {
                if(tabReferentiel[i].id == tabReponses[j].id)
                {
                    this.bilanEnergy = this.bilanEnergy+tabReponses[j].reponse*tabReferentiel[i].kwH
                }
            }
        }
    }

    calculerBilans(tabReferentiel: Array<Referentiel>, tabReponses){
        this.calculerBilanCO2(tabReferentiel, tabReponses)
        this.calculerBilanEco(tabReferentiel, tabReponses)
        this.calculerBilanEnergy(tabReferentiel, tabReponses)
    }
}