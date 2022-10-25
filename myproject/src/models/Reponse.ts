import {storeTabReponses} from "../store";
import swal from "sweetalert";
import {get} from "svelte/store";

export class Reponse{

    constructor() {
    }

    remplirInput(idQuestion){

        const input = document.getElementById('input') as HTMLInputElement

        let tabReponses: Array<any>= get(storeTabReponses)
        console.log(tabReponses)
        console.log(idQuestion)

        for(let i = 0; i <= tabReponses.length; i++)
        {
            if(typeof tabReponses[i] != 'undefined')
            {
                if(tabReponses[i].id == idQuestion)
                {
                    input.value = tabReponses[i].reponse;
                    break;
                }
                else
                {
                    input.value = ''
                }
            }
        }
    }

    chercherIndex(idQuestion){

        let resultat = -1;

        let tabReponses: Array<any>= get(storeTabReponses)

        for(let i =0; i < tabReponses.length; i++)
        {
            if(tabReponses[i].id == idQuestion)
            {
                resultat = i;
                break;
            }
        }

        return resultat;
    }

    remplirTableauReponses(reponse, idQuestion){

        let nvTableauReponses: Array<any> = get(storeTabReponses);

        if(this.chercherIndex(idQuestion) != -1)
        {
            nvTableauReponses[this.chercherIndex(idQuestion)].reponse = reponse;
        }
        else
        {
            nvTableauReponses.push({
                id: idQuestion,
                reponse: reponse
            })
        }

        storeTabReponses.set(nvTableauReponses);
    }

    checkBeforeSubmit(idQuestion,inputValue)
    {
        let returnValue = -1;

        if(inputValue != '')
        {
            if(inputValue >= 0 && inputValue <= 999)
            {
                this.remplirTableauReponses(inputValue, idQuestion);

                returnValue = 0
            }
            else
            {
                swal("Erreur", "Veuillez saisir un nombre compris entre 0 et 999 !", "error");
            }
        }
        else
        {
            swal("Erreur", "Veuillez saisir une valeur !", "error");
        }

        return returnValue
    }
}