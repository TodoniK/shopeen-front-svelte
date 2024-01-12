<script lang="ts">

    import {storeBilan, storeNomApp, storeQuizIndex} from "../store/store";
    import {ApplicationRequest} from "../api/ApplicationRequest";
    import {TAB_QUIZ} from "../referentiel/QuestionList";

    function sendAppHistoric()
    {
        if(isLast($storeQuizIndex)){
            ApplicationRequest.postApplicationBilan($storeNomApp, $storeBilan.bilanKwh, $storeBilan.bilanEuro, $storeBilan.bilanKgeqCO2)
        }
    }

    function isLast(currentIndex : number):boolean {
        return (currentIndex == TAB_QUIZ.length)
    }

    $: $storeQuizIndex && sendAppHistoric()
</script>

<div class="col-md-6">
    <h4 style="float: right">{$storeNomApp}</h4>
</div>