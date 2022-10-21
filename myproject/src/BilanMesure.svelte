<script lang="ts">
    import Mesure from "./Mesure.svelte";
    import { storeTabReponses, storeBilanEnergy, storeBilanCO2, storeBilanEco } from './store.js'
    import {Bilan} from "./models/Bilan";
    import {TAB_REFERENTIELS} from "./referentiel/listeReferentiels";

    let tabReponses: any;
    let bilan = new Bilan();

    storeTabReponses.subscribe(value => {
        tabReponses = value;
    });

    function majQt(){
        bilan.calculerBilans(TAB_REFERENTIELS,tabReponses)
        storeBilanEco.set(bilan.bilanEco)
        storeBilanEnergy.set(bilan.bilanEnergy)
        storeBilanCO2.set(bilan.bilanCO2)
    }

$: tabReponses && majQt()

</script>

<style>

</style>

<div id="mesures" class="row pb-5 px-2">
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