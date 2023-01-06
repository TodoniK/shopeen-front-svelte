<script lang="ts">
    import {storeBilan, storeQuizIndex} from '../store'
    import Mesure from "./Mesure.svelte";

    let bilanEnergy = $storeBilan.bilanKwh
    let bilanCO2 = $storeBilan.bilanKgeqCO2
    let bilanEco = $storeBilan.bilanEuro

    function majAffichage()
    {
        $storeBilan.majValeurs()
        console.log("maj bilan")
        bilanEnergy = $storeBilan.bilanKwh
        bilanCO2 = $storeBilan.bilanKgeqCO2
        bilanEco = $storeBilan.bilanEuro
        console.log(bilanEco,bilanEnergy,bilanCO2)
    }

    $: $storeQuizIndex && majAffichage()
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
