import { useMemo } from "react"
import { Chart } from 'chart.js/auto'
import { Line } from "react-chartjs-2"





const scores = [6, 5, 5, 5, 3, 4, 6, 7];
const labels = [100, 200, 300, 400, 500, 600, 700, 800];

const options = {
    animations: {
        tension: {
          duration: 5000,
          easing: 'easeOutExpo',
          from:-0.5,
          to: 0.2,
          loop: true
        }
      },
    fill: true,
    responsive: true,
    scales: {
        y: {
            min:0,
        }
    },
    plugins: {
        legend: {
            display: true
        }
}
};

export default function LineChart() {
    const data = useMemo(() => {
        return { 
            datasets: [ {
                label: "Ventas diarias",
                data: scores,
                tension: 0.3, // curva de la linea
                borderColor: "rgb(75,192,192)", // color de la linea
                pointRadius: 10, //tamaño de los puntos
                pointBackgroundColor: "rgb(32, 178, 170)", // color de los puntos
                backgroundColor: "rgb(75,192,192, 0.3)" //color de fondo bajo la linea 
            }],
            labels,
        }
    },[])

    return <Line data={data} options={options}/>

}
