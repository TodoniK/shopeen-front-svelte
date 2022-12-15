<script lang="ts">
import { storeQuizIndex } from '../store.js'
import {TAB_QUIZ} from "../referentiel/listeInfosQuiz";
</script>

<style>

</style>

<div id="etape" class="col-md-6" align="right">
    {$storeQuizIndex}/{TAB_QUIZ.length-1}
</div>