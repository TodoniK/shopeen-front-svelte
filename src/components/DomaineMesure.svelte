<script lang="ts">

    import { storeDomaineMesure, storeQuizIndex, storeBilan } from '../store.js'
    import {TAB_QUIZ} from "../referentiel/listeInfosQuiz";

    let etape = $storeDomaineMesure.etape
    let section = $storeDomaineMesure.section

    function majAffichage()
    {
        $storeDomaineMesure.majEtapeEtSection(TAB_QUIZ, $storeQuizIndex)
        etape = $storeDomaineMesure.getEtape()
        section = $storeDomaineMesure.getSection()
    }

    $: $storeQuizIndex && majAffichage()
</script>

<div id ="section" class="container">
    <div class="row">
        <div class="col-md-12">
            <h3>Etape {etape}/{TAB_QUIZ[TAB_QUIZ.length-1].etape} - {section}</h3>
        </div>
    </div>
</div>


