<script lang="ts">
import Question from "./Question.svelte";
import Reponse from "./Reponse.svelte";
import BilanMesure from "./BilanMesure.svelte";
import DomaineMesure from "./DomaineMesure.svelte";
import Navigation from "./Navigation.svelte";

</script>

<div id="quiz" class="pb-5 pt-5">
    <BilanMesure></BilanMesure>
    <DomaineMesure></DomaineMesure>
    <Question></Question>
    <Reponse></Reponse>
    <Navigation></Navigation>
</div>