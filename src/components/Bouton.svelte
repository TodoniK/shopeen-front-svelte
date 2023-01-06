<script lang="ts">
    import {storeQuizIndex, storeReponse} from '../store'
</script>

<div class="row px-1">
    {#if $storeQuizIndex >= 0}
        <button id="btn_second" class="btn btn-secondary mx-2" type="button" on:click={$storeReponse.questionPrec()} on:click="{$storeReponse.fillInput()}">Précédent</button>
    {/if}

    <button id="btn_suivant" class="btn btn-primary" type="button" on:click={$storeReponse.sendResponse()} on:click="{$storeReponse.fillInput()}">Suivant</button>
</div>