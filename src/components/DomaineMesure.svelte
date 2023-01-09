<script lang="ts">

    import { storeDomaineMesure, storeQuizIndex } from '../store'
    import {TAB_QUIZ} from "../referentiel/QuestionList";
    import ListeApp from "./ListeApp.svelte";

    let etape = $storeDomaineMesure.etape
    let section = $storeDomaineMesure.section

    function majAffichage()
    {
        $storeDomaineMesure.majEtapeEtSection(TAB_QUIZ, $storeQuizIndex)
        etape = $storeDomaineMesure.etape
        section = $storeDomaineMesure.section
    }

    $: $storeQuizIndex && majAffichage()
</script>

<div id ="section" class="container">
    <div class="row">
        <div class="col-md-8">
            <h3>Etape {etape}/{TAB_QUIZ[TAB_QUIZ.length-1].etape} - {section}</h3>
        </div>
    </div>
</div>


