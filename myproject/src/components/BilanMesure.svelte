<script lang="ts">
    import { storeQuizIndex, storeTabReponses, storeBilanEnergy, storeBilanEco, storeBilanCO2 } from '../store.js'
    import Mesure from "./Mesure.svelte";
    import {Bilan} from "../models/Bilan";
    import {TAB_REFERENTIELS} from "../referentiel/listeReferentiels";

    let tabReponses: any;

    let bilan = new Bilan();

    storeTabReponses.subscribe(value => {
        tabReponses = value;
    });

$: tabReponses && bilan.calculerBilans(TAB_REFERENTIELS, tabReponses)

</script>

<style>

</style>

<div id="mesures" class="row pb-5 px-2" style="align-items: center">
    <div class="col-md-4">
        <Mesure nomMesure="Consommation énergetique" qtMesure="{$storeBilanEnergy}" uniteMesure="kwH"></Mesure>
    </div>
    <div class="col-md-4">
        <Mesure nomMesure="Consommation carbonique" qtMesure="{$storeBilanCO2}" uniteMesure="kgeqCO2"></Mesure>
    </div>
    <div class="col-md-4">
        <Mesure nomMesure="Consommation économique" qtMesure="{$storeBilanEco}" uniteMesure="€"></Mesure>
    </div>
</div>
