<script>
    import { Bar } from 'svelte-chartjs';
    import {storeBilanCO2, storeBilanEco, storeBilanEnergy} from "../store";

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

    let bilanCO2;
    let data;

    storeBilanCO2.subscribe(value => {
        bilanCO2 = value;
    });

    function majDonnees(){
        data = {
            labels: ['Consommation totale'],
            datasets: [
                {
                    label: 'Consommation énergétique',
                    data: [$storeBilanEnergy],
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
                    data: [$storeBilanCO2],
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
                    data: [$storeBilanEco],
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

    $: bilanCO2 && majDonnees()

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