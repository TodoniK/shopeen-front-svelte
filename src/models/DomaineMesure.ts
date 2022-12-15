import type {ReferentielQuestion} from "./ReferentielQuestion";
import {TAB_QUIZ} from "../referentiel/listeInfosQuiz";

export class DomaineMesure {
    etape: number = TAB_QUIZ[0].etape;
    section: string = TAB_QUIZ[0].section;

    constructor() {
    }

    getEtape(){
        return this.etape;
    }

    getSection(){
        return this.section;
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