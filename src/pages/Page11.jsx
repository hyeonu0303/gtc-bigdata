
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


const Page11 = () => {
  const options1 = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: '재산세(소득) 상위 3개구',
        font:{
          size:30
        }
      },
    },
  };
  const options2 = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: '재산세(소득) 하위 3개구',
        font:{
          size:30
        }
      },
    },
  };
  
  
  
  
  const selectAfterData = [...jsonData.slice(0, 3)];
  const selectBeforeData = [ ...jsonData.slice(-3)];

  const highGuNames = selectAfterData.map(item=>item.자치구);
  const highTax = selectAfterData.map(item=> item.재산세);
  const highAnimals = selectAfterData.map(item=>item.유기동물수);

  const lowGuNames = selectBeforeData.map(item=>item.자치구);
  const lowTax = selectBeforeData.map(item=>item.재산세); 
  const lowAnimals = selectBeforeData.map(item=>item.유기동물수);

  const labels1 = highGuNames;
  const labels2 = lowGuNames;

  const data1 = {
    labels:labels1,
    datasets: [
      {
        label: '재산세(십억 원)',
        data: highTax,
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
      {
        label: '유기동물수',
        data: highAnimals,
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };
  const data2 = {
    labels:labels2,
    datasets: [
      {
        label: '재산세(십억 원)',
        data: lowTax,
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
      {
        label: '유기동물수',
        data: lowAnimals,
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };
  return(
    <Area width="1000px">
      <Bar options={options1} data={data1}/>
      <Bar options={options2} data={data2}/>
    </Area>
  )
}

export default Page11;
