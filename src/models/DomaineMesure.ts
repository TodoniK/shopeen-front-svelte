import type {ReferentielQuestion} from "../referentiel/ReferentielQuestion";
import {TAB_QUIZ} from "../referentiel/QuestionList";

export class DomaineMesure {

    etape: number = TAB_QUIZ[0].etape;
    section: string = TAB_QUIZ[0].section;

    constructor() {
    }

    private majEtape(quiz: Array<ReferentielQuestion>, index){
        this.etape = quiz[index].etape;
    }

    private majSection(quiz: Array<ReferentielQuestion>, index){
        this.section = quiz[index].section;
    }

    majEtapeEtSection(quiz: Array<ReferentielQuestion>, index){
        this.majEtape(quiz,index);
        this.majSection(quiz,index);
    }
}