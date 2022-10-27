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

<div id ="questions" class="container pb-1 pt-2">
    <h3 id="question">
        {question.getQuestionActuelle(TAB_QUIZ,localIndexQuiz)}
    </h3>
</div>


