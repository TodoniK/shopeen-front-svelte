<script>
    import FusionCharts from 'fusioncharts';
    import Timeseries from 'fusioncharts/fusioncharts.timeseries';
    import SvelteFC, {fcRoot} from 'svelte-fusioncharts';
    import Titre from "./Titre.svelte";
    import {storeNomApp} from "../store/store";
    import ListeApp from "./ListeApp.svelte";
    import {ApplicationRequest} from "../api/ApplicationRequest";

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
        },
        {
            "name": "Production de CO2",
            "type": "number"
        },
        {
            "name": "Coût financier",
            "type": "number"
        },
    ];

    const tab = [];

    const getChartConfig = () => {
        const fusionDataStore = new FusionCharts.DataStore();
        const fusionTable = fusionDataStore.createDataTable(tab, schema);

        const dataSource = {
            "chart": {
                "multicanvas": false
            },
            "caption": {
                "text": "Consommation annuelle de " + $storeNomApp
            },
            "yaxis": [
                {
                    "plot": [
                        {
                            "value": "Consommation éléctrique",
                            "connectnulldata": true,
                            "type": "line"
                        }
                    ],
                    "format": {
                        "suffix": " kWh"
                    }
                },
                {
                    "plot": [
                        {
                            "value": "Production de CO2",
                            "connectnulldata": true,
                            "type": "line"
                        }
                    ],
                    "format": {
                        "suffix": " kgeqCO2"
                    }
                },
                {
                    "plot": [
                        {
                            "value": "Coût financier",
                            "connectnulldata": true,
                            "type": "line"
                        }
                    ],
                    "format": {
                        "suffix": " €"
                    }
                }
            ]
        };
        dataSource.data = fusionTable;

        return {
            type: 'timeseries',
            width: '100%',
            height: 450,
            renderAt: 'chart-container',
            dataSource,
        };
    };

    async function fillData() {
        await ApplicationRequest.getApplicationHistoricByName($storeNomApp).then(r => {
            for (let i = 0; i < r.length; i++) {
                tab.push([r[i].measurementDate, r[i].bilanEnergy, r[i].bilanCO2, r[i].bilanEuro])
            }
        })
    }
</script>

<Titre titre="La consommation de mon app"></Titre>

<div id="graphique" class="pb-1 pt-3">
    {#if $storeNomApp === ''}
        <div id="app-selection" class="shadow-lg p-3 mb-3 bg-light rounded mx-2" style="display: block">
            <ListeApp
                    texteSelecteur="Veuillez séléctionner l'application dont vous souhaitez voir l'historique :"></ListeApp>
        </div>
    {:else }
        <div class="pb-1 pt-3">
            <div id="graph" class="shadow-lg p-3 mb-3 bg-light rounded mx-2" style="display: block">
                <div id="chart-container">
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