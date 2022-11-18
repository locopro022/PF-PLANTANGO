import { useMemo } from "react"
import { Chart } from 'chart.js/auto'
import { PolarArea } from "react-chartjs-2"


const scores = [6, 8, 3, 4];
const labels = [
'Semillas',
'Macetas',
'Fertilizantes',
'Accesorios'];

const options = {
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

export default function PolarChart() {
    const data = useMemo(() => {
        return { 
            datasets: [ {
                label: "Ventas diarias",
                data: scores,
                tension: 0.3, // curva de la linea
                borderColor: "rgb(0, 0, 0)", // color de la linea
                pointRadius: 6, //tamaño de los puntos
               
                backgroundColor: [
                  'rgb(176, 224, 230)',
                  'rgb(255, 192, 203)',
                  'rgb(240, 230, 140)',
                  'rgb(152, 251, 152)',                  
                ] //color de fondo bajo la linea 
            }],
            labels,
        }
    },[])

    return <PolarArea data={data} options={options}/>

}