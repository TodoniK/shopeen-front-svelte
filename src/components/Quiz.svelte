<script lang="ts">
import Question from "./Question.svelte";
import Response from "./Response.svelte";
import BilanMesure from "./BilanMesure.svelte";
import DomaineMesure from "./DomaineMesure.svelte";
import Navigation from "./Navigation.svelte";
import GraphBilan from "./GraphBilan.svelte";
import {storeNomApp, storeQuizIndex} from '../store'
import {TAB_QUIZ} from "../referentiel/QuestionList";
import Progression from "./Progression.svelte";
import ListeApp from "./ListeApp.svelte";
import Titre from "./Titre.svelte";
</script>

<Titre titre="Mon questionnaire"></Titre>

<div id="quiz" class="pb-1 pt-3">
    <BilanMesure></BilanMesure>

    {#if $storeNomApp === ''}
        <div id="app-selection" class="shadow-lg p-3 mb-3 bg-light rounded mx-2" style="display: block">
            <ListeApp texteSelecteur="Veuillez séléctionner l'application dont vous souhaitez faire le bilan :"></ListeApp>
        </div>
    {/if}

    {#if $storeQuizIndex !== TAB_QUIZ.length && $storeNomApp !== ''}
        <div id="questionnaire" class="shadow-lg p-3 mb-3 bg-light rounded mx-2" style="display: block">
            <DomaineMesure></DomaineMesure>
            <Question></Question>
            <Response></Response>
            <Navigation></Navigation>
        </div>
        <div id="progression" class="col-md-12" style="display: flex; align-items: center; justify-content: center;">
            <Progression></Progression>
        </div>
    {/if}

    {#if $storeQuizIndex === TAB_QUIZ.length}
        <div id="graphe-bilan" class="shadow-lg p-3 mb-5 bg-light rounded mx-2" style="display: block">
            <GraphBilan></GraphBilan>
        </div>
    {/if}

</div>
