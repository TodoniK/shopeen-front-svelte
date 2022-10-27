<script lang="ts">

    import { storeEtapeCourante, storeNomSection, storeQuizIndex } from '../store.js'
    import {TAB_QUIZ} from "../referentiel/listeInfosQuiz";
    import {DomaineMesure} from "../models/DomaineMesure";
    import {get} from "svelte/store";

    let domaineMesure = new DomaineMesure();

    let index;

    storeQuizIndex.subscribe(value => {
        index = value;
    });

    $: index && domaineMesure.majEtapeEtSection(TAB_QUIZ, get(storeQuizIndex))

</script>

<style>

</style>

<div id ="section" class="container">
    <div class="row">
        <div class="col-md-12">
            <h3>Etape {$storeEtapeCourante}/3 - {$storeNomSection}</h3>
        </div>
    </div>
</div>


