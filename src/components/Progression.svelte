<script lang="ts">
import { storeQuizIndex } from '../store/store'
import {TAB_QUIZ} from "../referentiel/QuestionList";
</script>

<style>
#etape{
    text-align:right;
}
</style>

<div id="etape" class="col-md-6">
    <div class="progressbar">
        <progress max="{TAB_QUIZ.length-1}" value="{$storeQuizIndex}"></progress>
        <div class="progressbar-label">{$storeQuizIndex}/{TAB_QUIZ.length-1}</div>
    </div>
</div>