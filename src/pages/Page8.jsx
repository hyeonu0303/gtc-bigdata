
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

import jsonData from '../python/json/병원(내림)+유기동물.json'
import Area from '../components/Area';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Page8= () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: '병원과 유기동물 통계',
      },
    },
  };
  
  const guNames = jsonData.map(item => item.자치구);
  const hospitals = jsonData.map(item=> item.영업중인병원);
  const abandonedAnimals = jsonData.map(item => item.유기동물수);
  
  const labels = guNames;
  const data = {
    labels,
    datasets: [
      {
        label: '영업중인병원수',
        data: hospitals,
        backgroundColor: 'rgb(40, 255, 47)',
      },
      {
        label: '유기동물수',
        data: abandonedAnimals,
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };
  return(
    <Area width="1300px">
      <Bar options={options} data={data}/>
    </Area>
  )
}

export default Page8;