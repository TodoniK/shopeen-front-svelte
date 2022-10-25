<script lang="ts">
import { storeQuizIndex } from '../store.js'
import {Question} from "../models/Question";
import {TAB_QUIZ} from "../referentiel/listeInfosQuiz";

let localIndexQuiz: number;
let question = new Question();

storeQuizIndex.subscribe(value => {
    localIndexQuiz = value;
});

</script>

<style>

</style>

<div id ="questions" class="container pb-2 pt-2">
    <h1 id="question">
        {question.getQuestionActuelle(TAB_QUIZ,localIndexQuiz)}
    </h1>
</div>


