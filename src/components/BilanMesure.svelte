<script lang="ts">
    import { storeBilan, storeReponse, storeQuizIndex } from '../store.js'
    import Mesure from "./Mesure.svelte";
    import {TAB_REFERENTIELS} from "../referentiel/listeReferentiels";

    let bilanEnergy = $storeBilan.bilanEnergy
    let bilanCO2 = $storeBilan.bilanCO2
    let bilanEco = $storeBilan.bilanEco

    function majBilanEtAffichage()
    {
        $storeBilan.calculerBilans(TAB_REFERENTIELS, $storeReponse.getStoreReponse())
        bilanEnergy = $storeBilan.bilanEnergy
        bilanCO2 = $storeBilan.bilanCO2
        bilanEco = $storeBilan.bilanEco
    }

    $: $storeQuizIndex && majBilanEtAffichage()
</script>

<div id="mesures" class="row pb-5 px-2" style="align-items: center">
    <div class="col-md-4">
        <Mesure nomMesure="Consommation énergetique" qtMesure="{bilanEnergy}" uniteMesure="kwH"></Mesure>
    </div>
    <div class="col-md-4">
        <Mesure nomMesure="Consommation carbonique" qtMesure="{bilanCO2}" uniteMesure="kgeqCO2"></Mesure>
    </div>
    <div class="col-md-4">
        <Mesure nomMesure="Consommation économique" qtMesure="{bilanEco}" uniteMesure="€"></Mesure>
    </div>
</div>
