<script lang="ts">

    import { storeQuizIndex } from '../store.js'

    let localIndexQuiz: number;

    storeQuizIndex.subscribe(value => {
        localIndexQuiz = value;
    });

</script>

<style>

</style>

<div id="etape" class="col-md-6" align="right">
    {localIndexQuiz}/5
</div>