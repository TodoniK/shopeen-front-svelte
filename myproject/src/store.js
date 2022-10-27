import {get, writable} from 'svelte/store';
import {TAB_QUIZ} from "./referentiel/listeInfosQuiz";

export const storeTabReponses = writable([]);

export const storeQuizIndex = writable(0);

export const storeEtapeCourante = writable(TAB_QUIZ[get(storeQuizIndex)].etape);

export const storeNomSection = writable(TAB_QUIZ[get(storeQuizIndex)].section);

export const storeBilanCO2 = writable(0);
export const storeBilanEnergy = writable(0);
export const storeBilanEco = writable(0);