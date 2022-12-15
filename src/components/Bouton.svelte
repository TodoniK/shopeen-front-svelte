<script lang="ts">
    import { storeQuizIndex, storeReponse } from '../store.js'
    import {TAB_QUIZ} from "../referentiel/listeInfosQuiz";
</script>

<div class="row px-1">
    {#if $storeQuizIndex != 0}
        <button id="btn_second" class="btn btn-secondary mx-2" type="button" on:click={$storeReponse.questionPrec()} on:click="{$storeReponse.getValueHistory()}">Précédent</button>
    {/if}

    {#if $storeQuizIndex == TAB_QUIZ.length-1}
        <button id="btn_terminer" class="btn btn-primary" type="button" on:click={$storeReponse.sendToResponse()} on:click="{$storeReponse.getValueHistory()}">Terminer</button>
    {:else }
        <button id="btn_suivant" class="btn btn-primary" type="button" on:click={$storeReponse.sendToResponse()} on:click="{$storeReponse.getValueHistory()}">Suivant</button>
    {/if}
</div>