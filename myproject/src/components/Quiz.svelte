<script lang="ts">
import Question from "./Question.svelte";
import Reponse from "./Reponse.svelte";
import BilanMesure from "./BilanMesure.svelte";
import DomaineMesure from "./DomaineMesure.svelte";
import Navigation from "./Navigation.svelte";
import GraphBilan from "./GraphBilan.svelte";

</script>

<div id="quiz" class="pb-1 pt-5">
    <BilanMesure></BilanMesure>
    <div id="questionnaire" class="shadow-lg p-3 mb-5 bg-light rounded mx-2" style="display: block">
        <DomaineMesure></DomaineMesure>
        <Question></Question>
        <Reponse></Reponse>
        <Navigation></Navigation>
    </div>
    <div id="graphe-bilan" class="shadow-lg p-3 mb-5 bg-light rounded mx-2" style="display: none">
        <GraphBilan></GraphBilan>
    </div>
</div>
