<script lang="ts">
import { storeQuizIndex, storeQuestion } from '../store.js'
import {TAB_QUIZ} from "../referentiel/listeInfosQuiz";
</script>

<div id ="questions" class="container pb-1 pt-2">
    <h3 id="question">
        {$storeQuestion.getQuestionActuelle(TAB_QUIZ, $storeQuizIndex)}
    </h3>
</div>


