<script>
    import FusionCharts from 'fusioncharts';
    import Timeseries from 'fusioncharts/fusioncharts.timeseries';
    import SvelteFC, { fcRoot } from 'svelte-fusioncharts';
    import {storeNomApp} from "../store";
    import ListeApp from "./ListeApp.svelte";
    import Titre from "./Titre.svelte";
    import {ApplicationRequest} from "../API/ApplicationRequest";

    fcRoot(FusionCharts, Timeseries);

    const schema = [
        {
            "name": "Date",
            "type": "date",
            "format": "%Y-%-m-%-d"
        },
        {
            "name": "Consommation éléctrique",
            "type": "number"
        }
    ];

    const tab = []

    const getChartConfig = () => {
        const fusionDataStore = new FusionCharts.DataStore(),
        fusionTable = fusionDataStore.createDataTable(tab, schema);
        console.log("chart config")
        console.log(tab)

        return {
            type: "timeseries",
            width: "100%",
            height: 1080,
            renderAt: "chart-container",
            dataSource: {
                data: fusionTable,
                caption: {text: "Consommation anuelle de "+$storeNomApp},
                yAxis: [
                    {
                        plot: {
                            value: "Consommation éléctrique",
                            type: "line"
                        },
                        format: {
                            suffix: " Kwh"
                        },
                        title: "Consommation éléctrique"
                    }
                ]
            }
        };
    };

    async function fillData(){
        await ApplicationRequest.getApplicationHistoricByName($storeNomApp).then(r =>{
            for (let i = 0; i < r.length; i++) {
                tab.push([r[i].measurementDate, r[i].bilanEnergy])
            }
        })
    }
</script>

<Titre titre="La consommation de mon app"></Titre>

<div id="graphique" class="pb-1 pt-3">
    {#if $storeNomApp === ''}
        <div id="app-selection" class="shadow-lg p-3 mb-3 bg-light rounded mx-2" style="display: block">
            <ListeApp texteSelecteur="Veuillez séléctionner l'application dont vous souhaitez voir l'historique :"></ListeApp>
        </div>
    {:else }
        <div class="pb-1 pt-3">
            <div id="graph" class="shadow-lg p-3 mb-3 bg-light rounded mx-2" style="display: block">
                <div id="chart-container" >
                    {#await fillData()}
                        <p>Remplissage des données</p>
                    {:then value}
                        <SvelteFC
                                {...getChartConfig()}
                        />
                    {:catch error}
                        <p style="color: red">Quelque chose ne va pas {error.message}</p>
                    {/await}
                </div>
            </div>
        </div>
    {/if}
</div>