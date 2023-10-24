<script lang="ts">
import { storeQuizIndex, storeQuestion } from '../store/store'
import {TAB_QUIZ} from "../referentiel/QuestionList";
</script>

<div id ="questions" class="container pb-1 pt-2">
    <h3 id="question">
        {$storeQuestion.getQuestionActuelle(TAB_QUIZ, $storeQuizIndex)}
    </h3>
</div>