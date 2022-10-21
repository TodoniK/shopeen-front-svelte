<script lang="ts">

    import { storeEtapeCourante, storeNomSection } from './store.js'

    let localEtapeCourante: number;
    let localSectionActuelle: string;

    storeEtapeCourante.subscribe(value => {
        localEtapeCourante = value;
    });

    storeNomSection.subscribe(value => {
        localSectionActuelle = value;
    });

</script>

<style>

</style>

<div id ="section" class="container">
    <div class="row">
        <div class="col-md-12">
            <h1>Etape {localEtapeCourante}/3 - {localSectionActuelle}</h1>
        </div>
    </div>
</div>


