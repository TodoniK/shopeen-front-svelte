<script lang="ts">
    import {storeQuizIndex, storeReponse, storeQuestion, storeCurrentInput} from '../store'
    import {TAB_QUIZ} from "../referentiel/QuestionList";
</script>

<div class="row px-1">
    {#if $storeQuizIndex >= 0}
        <button id="btn_second" class="btn btn-secondary mx-2" type="button" on:click={$storeReponse.questionPrec()} on:click="{$storeReponse.fillInput()}">Précédent</button>
    {/if}

    {#if $storeQuizIndex === TAB_QUIZ.length-1}
        <button id="btn_terminer" class="btn btn-primary" type="button" on:click={$storeReponse.sendResponse()} on:click="{$storeReponse.fillInput()}">Terminer</button>
    {:else }
        <button id="btn_suivant" class="btn btn-primary" type="button" on:click={$storeReponse.sendResponse()} on:click="{$storeReponse.fillInput()}">Suivant</button>
    {/if}
</div>