import type {ReferentielQuestion} from "./ReferentielQuestion";
export const TAB_QUIZ: Array<ReferentielQuestion> = [
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
]