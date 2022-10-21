<script lang="ts">
import { storeQuiz, storeQuizIndex } from './store.js'

let localQuiz: Array<any>;
let localIndexQuiz: number;

storeQuiz.subscribe(value => {
    localQuiz = value;
});

storeQuizIndex.subscribe(value => {
    localIndexQuiz = value;
});

</script>

<style>

    .container {
        padding-bottom: 20px;
        padding-top: 20px;
    }

</style>

<div id ="questions" class="container">
    <h1 id="question">
        {localQuiz[localIndexQuiz].question}
    </h1>
</div>


