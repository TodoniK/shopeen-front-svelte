<script lang="ts">
    export let nomMesure;
    export let qtMesure;
    export let uniteMesure;
</script>

<style>

</style>

<div class="row">
    <div class="col-12">
        <!-- svelte-ignore a11y-invalid-attribute -->
        <a href="" class="ob1-card d-block p-1">
            <h3 class="mb-0 text-center">{nomMesure}</h3>
            <div class="d-flex justify-content-center">
                <div class="ob1-price ob1-price-compact" >
                    <p aria-hidden="true">
                        <span class="ob1-price-amount">{qtMesure}</span>
                        <span class="ob1-price-by-month">{uniteMesure}</span>
                    </p>
                </div>
            </div>
        </a>
    </div>
</div>





