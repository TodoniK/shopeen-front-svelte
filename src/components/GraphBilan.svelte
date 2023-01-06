<script>
    import { Bar } from 'svelte-chartjs';
    import {storeBilan, storeQuizIndex} from "../store";

    import {
        Chart,
        Title,
        Tooltip,
        Legend,
        BarElement,
        CategoryScale,
        LinearScale,
    } from 'chart.js';

    Chart.register(
        Title,
        Tooltip,
        Legend,
        BarElement,
        CategoryScale,
        LinearScale
    );

    let data
    let bilanCO2 = $storeBilan.bilanKgeqCO2
    let bilanEco = $storeBilan.bilanEuro
    let bilanEnergy = $storeBilan.bilanKwh

    function majAffichage(){
        data = {
            labels: ['Consommation totale'],
            datasets: [
                {
                    label: 'Consommation énergétique',
                    data: [bilanEnergy],
                    backgroundColor: [
                        'rgba(255, 134,159,0.4)',
                    ],
                    borderWidth: 2,
                    borderColor: [
                        'rgba(255, 134, 159, 1)',
                    ],
                },
                {
                    label: 'Consommation carbonique',
                    data: [bilanCO2],
                    backgroundColor: [
                        'rgba(98,  182, 239,0.4)',
                    ],
                    borderWidth: 2,
                    borderColor: [
                        'rgba(98,  182, 239, 1)',
                    ],
                },
                {
                    label: 'Consommation économique',
                    data: [bilanEco],
                    backgroundColor: [
                        'rgba(255, 218, 128,0.4)',
                    ],
                    borderWidth: 2,
                    borderColor: [
                        'rgba(255, 218, 128, 1)',
                    ],
                },
            ],
        };
    }

    function majDonnees(){
        bilanCO2 = $storeBilan.bilanKgeqCO2
        bilanEco = $storeBilan.bilanEuro
        bilanEnergy = $storeBilan.bilanKwh
    }

    function majGraph(){
        majDonnees()
        majAffichage()
    }

    $: $storeQuizIndex && majGraph()

</script>

<Bar {data} options={{
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Consommation de MyShop en trois données'
      }
    } }} />