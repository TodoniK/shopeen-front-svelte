import {writable} from 'svelte/store';
import {Question} from "./models/Question";
import {DomaineMesure} from "./models/DomaineMesure";
import {Response} from "./models/Response";
import {Bilan} from "./models/Bilan";

export const storeQuizIndex = writable(0);
export const storeQuestion = writable(new Question())
export const storeDomaineMesure = writable(new DomaineMesure())
export const storeReponse = writable(new Response())
export const storeCurrentInput = writable('')
export const storeBilan = writable(new Bilan())
export const storeNomApp = writable('')