<script>
import { storeQuizIndex, questionSuivante, questionPrecedente } from './store.js'
import Questions from "./Questions.svelte";

let localIndexQuiz;

storeQuizIndex.subscribe(value => {
    localIndexQuiz = value;
});

function afficherBoutonPrec(){
    if(localIndexQuiz == 0)
    {
        document.getElementById("btn_second").style = "display: none";
    }
    else
    {
        document.getElementById("btn_second").style = "display: block";
    }
}

function handleQuestionSuivante() {
    questionSuivante()
}

function handleQuestionPrecedente(){
    questionPrecedente()
}

</script>

<style>

.container {
    padding-bottom: 40px;
    padding-top: 40px;
}

</style>

<div id="reponses" class="container">
    <Questions/>

    <div class="input-group mb-3">
        <input id="input" type="text" class="form-control" placeholder="31" aria-label="reponse" aria-describedby="basic-addon1">
    </div>

    <div class="d-grid gap-2 d-md-flex justify-content-md-end align-items-center">
        {localIndexQuiz}/5
        <button id="btn_second" class="btn btn-secondary me-md-2" type="button" style="display: none" on:click={handleQuestionPrecedente} on:click={afficherBoutonPrec}>Précédent</button>
        <button class="btn btn-primary" type="button" on:click={handleQuestionSuivante} on:click={afficherBoutonPrec}>Suivant</button>
    </div>
</div>