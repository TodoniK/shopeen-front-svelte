import {get, writable} from 'svelte/store';
import {TAB_QUIZ} from "./referentiel/listeInfosQuiz";
import {Bilan} from "./models/Bilan";
import {Question} from "./models/Question";
import {DomaineMesure} from "./models/DomaineMesure";
import {Reponse} from "./models/Reponse";

export const storeQuizIndex = writable(0);
export const storeBilan = writable(new Bilan())
export const storeQuestion = writable(new Question())
export const storeDomaineMesure = writable(new DomaineMesure())
export const storeReponse = writable(new Reponse())
export const storeCurrentInput = writable('')