import { storeQuizIndex, storeQuestion, storeCurrentInput } from "../store";
import {get} from "svelte/store";
import {TAB_QUIZ} from "../referentiel/listeInfosQuiz";

export class Reponse{

    tabReponses: Array<any> = [];

    constructor() {
    }

    getStoreReponse()
    {
        return this.tabReponses;
    }

    remplirInput(idQuestion){

        for(let i = 0; i <= this.tabReponses.length; i++)
        {
            if(typeof this.tabReponses[i] != 'undefined')
            {
                if(this.tabReponses[i].id == idQuestion)
                {
                    storeCurrentInput.set(this.tabReponses[i].reponse)
                    break;
                }
                else
                {
                    storeCurrentInput.set('')
                }
            }
        }
    }

    chercherIndex(idQuestion){

        let resultat = -1;

        for(let i =0; i < this.tabReponses.length; i++)
        {
            if(this.tabReponses[i].id == idQuestion)
            {
                resultat = i;
                break;
            }
        }

        return resultat;
    }

    remplirTableauReponses(reponse, idQuestion){

        let nvTableauReponses: Array<any> = this.tabReponses;

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

        this.tabReponses = nvTableauReponses;
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
        }

        return returnValue
    }

    questionPrec(){
        if(get(storeQuizIndex) > 0)
        {
            storeQuizIndex.update(n => n-1)
        }
    }

    questionSuiv(){
        if(get(storeQuizIndex) < TAB_QUIZ.length)
        {
            storeQuizIndex.update(n => n+1)
        }
    }

    getValueHistory()
    {
        let duplicateObjectQuestion: storeQuestion = get(storeQuestion)
        // @ts-ignore
        let idQuestion = duplicateObjectQuestion.getIdFromQuestion(TAB_QUIZ[get(storeQuizIndex)].question)
        this.remplirInput(idQuestion)
    }

    sendToResponse(){

        let duplicateObjectQuestion: storeQuestion = get(storeQuestion)
        // @ts-ignore
        let idQuestion = duplicateObjectQuestion.getIdFromQuestion(TAB_QUIZ[get(storeQuizIndex)].question)

        if(this.checkBeforeSubmit(idQuestion,get(storeCurrentInput)) == 0)
        {
            if(get(storeQuizIndex) != TAB_QUIZ.length)
            {
                this.questionSuiv()
            }
        }
    }

}