import type {ReferentielQuestion} from "./ReferentielQuestion";
export const TAB_QUIZ: Array<ReferentielQuestion> = [
    {
        id: 'nbServeurs',
        question: 'Sur combien de serveurs est instanciée votre application ?',
        section: 'Mesures serveurs',
        etape: 1,
        consoMoy: 75
    },
    {
        id: 'nbConteneurs',
        question: 'Sur combien de conteneurs tourne votre application ?',
        section: 'Mesures serveurs',
        etape: 1,
        consoMoy: 12
    },
    {
        id: 'nbPcFixe',
        question: 'Combien de pc fixes programment l\'app ?',
        section: 'Mesures humaines',
        etape: 2,
        consoMoy: 1300
    },
    {
        id: 'nbMoniteurs',
        question: 'Combien de moniteurs détenez-vous ?',
        section: 'Mesures humaines',
        etape: 2,
        consoMoy: 39.5
    },
    {
        id: 'nbPcPortable',
        question: 'Combien de pc portables programment l\'app ?',
        section: 'Mesures humaines',
        etape: 2,
        consoMoy: 600
    },
    {
        id: 'nbPagesWeb',
        question: 'Combien de pages web associées à votre appli détenez-vous ?',
        section: 'Mesures pages web',
        etape: 3,
        consoMoy: 9000
    }
]