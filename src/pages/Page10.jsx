
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
import jsonData from '../python/json/재산세(내림)+유기동물.json';
import Area from '../components/Area';
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Page10 = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: '자치구별 재산과 유기동물수 통계',
        font:{
          size:40
        }
      },
    },
  };
  
  const guNames = jsonData.map(item => item.자치구);
  const tax = jsonData.map(item=> item.재산세); 
  const abandonedAnimals = jsonData.map(item=>item.유기동물수)
  const labels = guNames;
  
  const data = {
    labels,
    datasets: [
      {
        label: '재산세(십억 원)',
        data: tax,
        backgroundColor: 'rgb(113, 176, 249)',
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

export default Page10;

