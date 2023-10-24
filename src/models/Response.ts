import {storeCurrentInput, storeQuestion, storeQuizIndex} from "../store/store";
import {get} from "svelte/store";
import {TAB_QUIZ} from "../referentiel/QuestionList";
import {ResponseRequest} from "../API/ResponseRequest";

export interface DataResponse {idQuestion : string, userResponse: number}

export class Response {

    firstEntry = true
    constructor(){}

    checkBeforeSubmit(inputValue) {
        let returnValue = false;

        if (inputValue != '') {
            if (inputValue >= 0 && inputValue <= 999) {
                this.firstEntry = false
                returnValue = true
            }
        }
        return returnValue
    }

    sendResponse() {

        // @ts-ignore
        let idQuestion:string = get(storeQuestion).getIdFromQuestion(TAB_QUIZ[get(storeQuizIndex)].question);
        // @ts-ignore
        let userResponse:number = get(storeCurrentInput)

        let consoMoy:number = TAB_QUIZ[get(storeQuizIndex)].consoMoy

        if (this.checkBeforeSubmit(userResponse) == true) {
            if (get(storeQuizIndex) != TAB_QUIZ.length) {
                ResponseRequest.postResponse(idQuestion,userResponse,consoMoy)
                this.questionSuiv()
            }
        }
    }

    fillInput(){
        if(this.firstEntry == false) {
            // @ts-ignore
            let idQuestion:string = get(storeQuestion).getIdFromQuestion(TAB_QUIZ[get(storeQuizIndex)].question);
            // @ts-ignore
            ResponseRequest.getResponseById(idQuestion).then(r => storeCurrentInput.set(r.userResponse))
        }
    }

    questionPrec() {
        if (get(storeQuizIndex) > 0) {
            storeQuizIndex.update(n => n - 1)
        }
    }

    questionSuiv() {
        if (get(storeQuizIndex) < TAB_QUIZ.length) {
            storeQuizIndex.update(n => n + 1)
        }
    }
}