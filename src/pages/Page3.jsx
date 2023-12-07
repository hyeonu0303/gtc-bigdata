
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
import jsonData from '../python/json/반려인.json';
import Area from '../components/Area';
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


const Page3 = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: '자치구별 인구수 대비 반려인 통계',
      },
    },
  };
  
  const guNames = jsonData.map(item => item.자치구);
  const population = jsonData.map(item=> item.반려인비율); 
  const labels = guNames;
  
  const data = {
    labels,
    datasets: [
      {
        label: '반려인',
        data: population,
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      }
    ],
  };
  return(
    <Area width="1300px">
      <Bar options={options} data={data}/>
    </Area>
  )
}

export default Page3;