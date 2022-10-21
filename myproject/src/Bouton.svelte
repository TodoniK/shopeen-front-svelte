<script lang="ts">

    import { storeQuizIndex, questionPrecedente, questionSuivante, storeTabReponses, storeQuiz } from './store.js'

    let localIndexQuiz: number;
    let localTabReponses: any;

    storeQuizIndex.subscribe(value => {
        localIndexQuiz = value;
    });

    storeTabReponses.subscribe(value => {
        localTabReponses = value;
    });

    function afficherBoutonPrec(){
        if(localIndexQuiz == 0)
        {
            document.getElementById("btn_second").style.display = "none";
        }
        else
        {
            document.getElementById("btn_second").style.display = "block";
        }
    }

    function remplirInput(){

        const question = document.getElementById('question') as HTMLInputElement
        const input = document.getElementById('input') as HTMLInputElement
        let idQuestion: string;
        idQuestion = getIdFromQuestion(question.textContent);

        let i = 0;
        let nouveauTexte = '';

        while(i <= localTabReponses.length)
        {
            if(typeof localTabReponses[i] != 'undefined')
            {
                if(localTabReponses[i].id == idQuestion)
                {
                    nouveauTexte = localTabReponses[i].reponse
                }
            }

            i++;
        }
        input.value = nouveauTexte
    }

    function getIdFromQuestion(question){
        let i = 0;
        let id = null;

        while(i < $storeQuiz.length)
        {
            if($storeQuiz[i].question == question)
            {
                id = $storeQuiz[i].id
            }
            i++
        }

        return id;
    }

    function remplirTableauReponses(reponse, idQuestion){
        $storeTabReponses = [...$storeTabReponses, {
            id: idQuestion,
            reponse: reponse
        }];
    }

    function handleQuestionSuivante() {
        questionSuivante()
    }

    function handleQuestionPrecedente(){
        questionPrecedente()
    }

    function checkBeforeSubmit(){

        const input = document.getElementById('input') as HTMLInputElement

        if(input.value != '')
        {
            if(input.value >= 0 && input.value <= 999)
            {
                const question = document.getElementById('question') as HTMLInputElement
                let idQuestion: string;
                idQuestion = getIdFromQuestion(question.textContent);

                remplirTableauReponses(input.value, idQuestion);
                handleQuestionSuivante();
            }
            else
            {
                swal("Erreur", "Veuillez saisir un nombre compris entre 0 et 999 !", "error");
            }
        }
        else
        {
            swal("Erreur", "Veuillez saisir une valeur !", "error");
        }
    }

</script>

<style>

</style>

<button id="btn_second" class="btn btn-secondary me-md-2" type="button" style="display: none" on:click={handleQuestionPrecedente} on:click={afficherBoutonPrec} on:click="{remplirInput}">Précédent</button>
<button class="btn btn-primary" type="button" on:click={checkBeforeSubmit} on:click={afficherBoutonPrec} on:click="{remplirInput}">Suivant</button>
