<script lang="ts">
    import {TAB_APP} from "../referentiel/ApplicationList";
    import {storeNomApp} from "../store";

    let appSelected;

    function fillAppName(){
        $storeNomApp = TAB_APP[appSelected]
    }
</script>

<h3>Veuillez choisir l'application dont vous souhaitez faire le bilan :</h3>

<form>
    <div class="form-group">
        <select bind:value={appSelected} class="form-control form-control-empty" data-ob1-component="FormControlEmpty" id="input1" aria-labelledby="label1">
            <option class="label-option-hidden" value="" disabled="" selected=""></option>
            {#each TAB_APP as app, index}
                <option value="{index}">{app}</option>
            {/each}
        </select>
        <label id="label1" class="form-control-placeholder" for="input1">Séléctionnez votre application</label>
        <div class="alert-container alert-container-sm alert-danger invalid-feedback">
            <p class="alert">
                <span class="alert-icon" aria-hidden="true"></span>
                <label class="ob1-alert-title" id="invalid-feedback1" for="input1">Erreur de séléction</label>
            </p>
        </div>
    </div>
</form>

<button class="btn btn-primary active float-center" type="button" on:click={fillAppName}>Go !</button>