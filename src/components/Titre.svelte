<script lang="ts">

import Application from "./Application.svelte";

</script>

<div class="row fw-bold pt-3 px-3">
    <div class="col-md-6">
        <h2>Mon questionnaire</h2>
    </div>
    <Application></Application>
</div>

<div class="progressbar px-3">
    <progress max="100" value="100"></progress>
</div>