import type {ReferentielQuestion} from "../referentiel/ReferentielQuestion";
import {TAB_QUIZ} from "../referentiel/QuestionList";

export class Question {
    texte: string = '';

    constructor() {
    }

    getQuestionActuelle(tabQuestions: Array<ReferentielQuestion>, index: number){
        this.texte = tabQuestions[index].question;
        return this.texte;
    }

    getIdFromQuestion(question){
        let i = 0;
        let id = null;

        while(i < TAB_QUIZ.length)
        {
            if(TAB_QUIZ[i].question == question)
            {
                id = TAB_QUIZ[i].id
            }
            i++
        }
        return id;
    }

}