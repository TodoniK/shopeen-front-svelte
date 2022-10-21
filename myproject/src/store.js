import {get, writable} from 'svelte/store';

export const storeQuiz = writable([
    {
        id: 'nbServeurs',
        question: 'Combien de serveurs détenez-vous ?',
        section: 'Mesures serveurs',
        etape: 1
    },
    {
        id: 'nbConteneurs',
        question: 'Combien de conteneurs détenez-vous ?',
        section: 'Mesures serveurs',
        etape: 1
    },
    {
        id: 'nbPCDevs',
        question: 'Combien de pc de développeurs détenez-vous ?',
        section: 'Mesures humaines',
        etape: 2
    },
    {
        id: 'nbMoniteurs',
        question: 'Combien de moniteurs détenez-vous ?',
        section: 'Mesures humaines',
        etape: 2
    },
    {
        id: 'nbPCArchis',
        question: 'Combien de pc d\'architectes détenez-vous ?',
        section: 'Mesures humaines',
        etape: 2
    },
    {
        id: 'nbPagesWeb',
        question: 'Combien de pages internet détenez-vous ?',
        section: 'Mesures pages web',
        etape: 3
    }
]);


export let storeTabReponses = writable([]);

export let storeQuizIndex = writable(0);

export let storeBilanCO2 = writable(0);
export let storeBilanEnergy = writable(0);
export let storeBilanEco = writable(0);

export let storeEtapeCourante = writable(get(storeQuiz)[get(storeQuizIndex)].etape);

export let storeNomSection = writable(get(storeQuiz)[get(storeQuizIndex)].section);

export const mettreAJour = function(){
    storeEtapeCourante.set((get(storeQuiz)[get(storeQuizIndex)].etape));
    storeNomSection.set((get(storeQuiz)[get(storeQuizIndex)].section));
}

export const questionPrecedente = function (){
    storeQuizIndex.update(n => n - 1);

    mettreAJour()
}

export const questionSuivante = function(){
    if(get(storeQuizIndex) < 5) {
        storeQuizIndex.update(n => n + 1);
    }

    mettreAJour()
}

