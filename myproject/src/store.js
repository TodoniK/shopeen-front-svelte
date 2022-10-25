import {get, writable} from 'svelte/store';
import {TAB_QUIZ} from "./referentiel/listeInfosQuiz";

export let storeTabReponses = writable([]);

export let storeQuizIndex = writable(0);

export let storeBilanCO2 = writable(0);
export let storeBilanEnergy = writable(0);
export let storeBilanEco = writable(0);

export let storeEtapeCourante = writable(TAB_QUIZ[get(storeQuizIndex)].etape);

export let storeNomSection = writable(TAB_QUIZ[get(storeQuizIndex)].section);

