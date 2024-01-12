import {writable} from 'svelte/store';

export const storeQuizIndex = writable(0);
export const storeQuestion = writable('')
export const storeDomaineMesure = writable(0)
export const storeReponse = writable('')
export const storeCurrentInput = writable('')
export const storeBilan = writable(0)
export const storeNomApp = writable('')