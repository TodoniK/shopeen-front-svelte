<script lang="ts">
    import { storeCurrentInput } from '../store'
</script>

<div id="reponse" class="container">
    <form>
        <div class="form-group">
            <input type="text" id="input" data-ob1-component="FormControlEmpty" class="form-control" aria-labelledby="label12 invalid-feedback12" aria-describedby="helper12" aria-invalid="true" bind:value={$storeCurrentInput}>
            <label id="label12" class="form-control-placeholder" for="input">Insérer votre valeur</label>

            {#if $storeCurrentInput !== ''}
                {#if Number($storeCurrentInput) < 0 || Number($storeCurrentInput) > 999}
                    <div id="input-alert" class="alert-container alert-container-sm alert-danger invalid-feedback" style="display: block">
                        <p class="alert">
                            <label class="ob1-alert-title" id="invalid-feedback12" for="input">Veuillez saisir une valeur comprise entre 0 et 999 !</label>
                        </p>
                    </div>
                {/if}
            {/if}
        </div>
    </form>
</div>