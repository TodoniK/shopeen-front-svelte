<script>
import { storeQuiz, storeQuizIndex, storeEtapeCourante, storeNomSection } from './store.js'

let localEtapeCourante;
let localSectionActuelle;
let localQuiz;
let localIndexQuiz;

storeEtapeCourante.subscribe(value => {
    localEtapeCourante = value;
});

storeNomSection.subscribe(value => {
    localSectionActuelle = value;
});

storeQuiz.subscribe(value => {
    localQuiz = value;
});

storeQuizIndex.subscribe(value => {
    localIndexQuiz = value;
});

</script>

<style>

h1 {
    padding-bottom: 20px;
}

</style>

<div id ="questions" class="container">
    <div class="row">
        <h1>Etape {localEtapeCourante}/3 - {localSectionActuelle}</h1>
    </div>

    <h1>
        {localQuiz[localIndexQuiz].question}
    </h1>
</div>


