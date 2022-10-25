<script lang="ts">

    import { storeQuizIndex, storeTabReponses } from '../store.js'
    import {Question} from "../models/Question"
    import {Reponse} from "../models/Reponse";
    import {get} from "svelte/store";

    let localIndexQuiz: number;
    let localTabReponses: any;
    let question = new Question();
    let reponse = new Reponse();

    storeQuizIndex.subscribe(value => {
        localIndexQuiz = value;
    });

    storeTabReponses.subscribe(value => {
        localTabReponses = value;
    });

    function verifBoutons(){
        if(localIndexQuiz == 0)
        {
            document.getElementById("btn_second").style.display = "none";
        }
        else
        {
            document.getElementById("btn_second").style.display = "block";
        }
    }

    function questionPrec(){
        if(get(storeQuizIndex) > 0)
        {
            storeQuizIndex.update(n => n-1)
        }
    }

    function questionSuiv(){
        if(get(storeQuizIndex) < 5)
        {
            storeQuizIndex.update(n => n+1)
        }
    }

    function getValueHistory()
    {
        let idQuestion = question.getIdFromQuestion(document.getElementById("question").textContent)
        reponse.remplirInput(idQuestion)
    }

    function sendToResponse(){

        const input = document.getElementById('input') as HTMLInputElement
        let inputValue = input.value
        let idQuestion = question.getIdFromQuestion(document.getElementById("question").textContent)

        if(reponse.checkBeforeSubmit(idQuestion,inputValue) == 0)
        {
            questionSuiv()
        }
    }


</script>

<style>

</style>

<button id="btn_second" class="btn btn-secondary me-md-2" type="button" style="display: none" on:click={questionPrec} on:click={verifBoutons} on:click="{getValueHistory}">Précédent</button>
<button id="btn_suivant" class="btn btn-primary" type="button" on:click={sendToResponse} on:click={verifBoutons} on:click="{getValueHistory}">Suivant</button>
