import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import jsonData from '../python/json/유기동물통계.json'
import Area from '../components/Area';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: '개,고양이 시기별 안락사비율',
    },
  },
};

const labels = ['2020', '2021', '2022'];

const 개_입양분양_인도_계류기증 = jsonData.map(item=>item.개_입양분양_인도_계류기증)
const 개_폐사안락사 = jsonData.map(item=>item.개_폐사안락사)
const 고양이_입양분양_인도_계류기증 = jsonData.map(item=>item.고양이_입양분양_인도_계류기증)
const 고양이_폐사안락사 = jsonData.map(item=>item.고양이_폐사안락사)
const data = {
  labels,
  datasets: [
    {
      label: '개_입양분양_인도_계류기증',
      data: 개_입양분양_인도_계류기증,
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: '개_폐사안락사',
      data: 개_폐사안락사,
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      
    },
    {
      label: '고양이_입양분양_인도_계류기증',
      data: 고양이_입양분양_인도_계류기증,
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
    {
      label: '개_계류기증',
      data: 고양이_폐사안락사,
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
    
  ],
};

const Page18=()=> {
  return  (
    <Area width="1200px">
      <Line options={options} data={data} />
    </Area>
  )
}
export default Page18;
