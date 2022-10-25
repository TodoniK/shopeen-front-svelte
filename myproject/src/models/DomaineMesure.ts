import type {ReferentielQuestion} from "./ReferentielQuestion";
import {storeEtapeCourante, storeNomSection} from "../store";

export class DomaineMesure {
    etape: number = 0;
    section: string = '';

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
        storeEtapeCourante.set(this.etape)
        storeNomSection.set(this.section)
    }
}