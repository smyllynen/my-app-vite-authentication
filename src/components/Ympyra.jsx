

// UserPieChart.js
import { Pie,Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import PropTypes from 'prop-types';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  ArcElement,
  Tooltip,
  Legend
);




const UserBarChart = ({ activeUsers, inactiveUsers }) => {

  const options = {
    scales: {
      x: {
        type: 'category',
      },
      y: {
        beginAtZero: true,
        max: 30,
      },
    },
  }
  
  const data = {
    labels: ['Aktiiviset käyttäjät', 'Ei aktiiviset käyttäjät'],
    datasets: [{
      label: 'Käyttäjät',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [activeUsers, inactiveUsers],
    }]}

  return <Bar data={data} options={options}/>;
}



  UserBarChart.propTypes = {
    activeUsers: PropTypes.number.isRequired,
    inactiveUsers: PropTypes.number.isRequired,
  }  

export {  UserBarChart }
