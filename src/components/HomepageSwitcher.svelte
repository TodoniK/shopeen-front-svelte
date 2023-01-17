<script lang="ts">
import Quiz from "./Quiz.svelte";
import AppHistoricalGraph from "./AppHistoricalGraph.svelte";

let isQuizDisplayed = true
let isGraphDisplayed = false

function displayQuiz(){
    isQuizDisplayed = true
    isGraphDisplayed = false
}

function displayGraph(){
    isQuizDisplayed = false
    isGraphDisplayed = true
}
</script>

<div id="quiz" class="pb-1 pt-3">
    <nav class="ob1-menu-page ob1-menu-page-fullscreen ob1-menu-page-icon">
        <ul class="nav o-nav-light">
            <li class="nav-item">
                <a href={'#'} class="nav-link" on:click={displayQuiz}><span class="item-icon icon-add-contract" aria-hidden="true"></span>Entrer une mesure</a>
            </li>
            <li class="nav-item">
                <a href={'#'} class="nav-link" on:click={displayGraph}><span class="item-icon icon-graph-column-chart" aria-hidden="true"></span>Observer les mesures</a>
            </li>
        </ul>
    </nav>

    {#if isQuizDisplayed}
        <Quiz></Quiz>
    {/if}

    {#if isGraphDisplayed}
        <AppHistoricalGraph></AppHistoricalGraph>
    {/if}

</div>


