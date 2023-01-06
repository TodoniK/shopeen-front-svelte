<script lang="ts">
import Question from "./Question.svelte";
import Response from "./Response.svelte";
import BilanMesure from "./BilanMesure.svelte";
import DomaineMesure from "./DomaineMesure.svelte";
import Navigation from "./Navigation.svelte";
import GraphBilan from "./GraphBilan.svelte";
import { storeQuizIndex } from '../store'
import {TAB_QUIZ} from "../referentiel/QuestionList";
</script>

<div id="quiz" class="pb-1 pt-5">
    <BilanMesure></BilanMesure>

    {#if $storeQuizIndex !== TAB_QUIZ.length}
        <div id="questionnaire" class="shadow-lg p-3 mb-5 bg-light rounded mx-2" style="display: block">
            <DomaineMesure></DomaineMesure>
            <Question></Question>
            <Response></Response>
            <Navigation></Navigation>
        </div>
    {/if}
    {#if $storeQuizIndex === TAB_QUIZ.length}
        <div id="graphe-bilan" class="shadow-lg p-3 mb-5 bg-light rounded mx-2" style="display: block">
            <GraphBilan></GraphBilan>
        </div>
    {/if}
</div>
