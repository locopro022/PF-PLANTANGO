import { Chart } from "chart.js/auto";
import { Line } from "react-chartjs-2";


const options = {
  animations: {
    tension: {
      duration: 5000,
      easing: "easeOutExpo",
      from: -0.5,
      to: 0.2,
      loop: true,
    },
  },
  fill: true,
  responsive: true,
  scales: {
    y: {
      min: 0,
    },
  },
  plugins: {
    legend: {
      display: true,
    },
  },
};

export default function LineChart({ props }) {
  const scores = [];
  const labels = [];
  if (props) {
    for (let i = 0; i < props?.length; i++) {
      labels.push(props[i].Fecha);
    }
    for (let i = 0; i < props?.length; i++) {
      scores.push(parseInt(props[i].VentasDia));
    }
  }

  const data2 = {
    datasets: [
      {
        label: "Ventas diarias",
        data: scores,
        tension: 0.3, // curva de la linea
        borderColor: "rgb(75,192,192)", // color de la linea
        pointRadius: 10, //tamaño de los puntos
        pointBackgroundColor: "rgb(32, 178, 170)", // color de los puntos
        backgroundColor: "rgb(75,192,192, 0.3)", //color de fondo bajo la linea
      },
    ],
    labels,
  };

  return <Line data={data2} options={options} />;
}
