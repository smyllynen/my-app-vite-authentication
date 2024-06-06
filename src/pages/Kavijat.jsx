
import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import axios from 'axios';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const KavijatBarChart = () => {
  const [chartData, setChartData] = useState([]);

  const kuukaudet = ['Tammikuu', 'Helmikuu', 'Maaliskuu', 'Huhtikuu', 'Toukokuu'];
  const colors = [
    'rgba(255, 0, 0, 1)',   // Punainen
    'rgba(0, 255, 0, 1)',   // Vihreä
    'rgba(0, 0, 255, 1)',   // Sininen
    'rgba(255, 255, 0, 1)', // Keltainen
    'rgba(255, 0, 255, 1)'  // Purppura
  ];

  useEffect(() => {
    const fetchData = () => {
      // Hae tiedot palvelimelta
      axios.get('http://localhost:5000/get_chart_data')
        .then(response => {
          if (response.data && response.data.months && response.data.months.length > 0) {
            const data = response.data.months.map((month, index) => {
              return {
                label: kuukaudet[index],
                data: month.days.map(day => day.total),
                backgroundColor: colors[index % colors.length],
                borderColor: colors[index % colors.length],
                borderWidth: 1,
                hoverBackgroundColor: colors[index % colors.length],
                hoverBorderColor: colors[index % colors.length],
              };
            });
            setChartData(data);
          } else {
            console.error('Invalid data format: ', response.data);
          }
        })
        .catch(error => {
          console.error('Error fetching data: ', error);
        });
    };

    fetchData(); // Fetch data immediately on component mount
    const intervalId = setInterval(fetchData, 86400000); // Fetch data every 24 hours

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const data = {
    labels: chartData.length > 0 ? chartData[0].data.map((_, index) => ` ${index + 1}`) : [],
    datasets: chartData,
  };

  return (
    <div>
      <h2>Vierailija määrät 2024 vuosi</h2>
      <div style={{ marginBottom: '60px' }}>
        <Bar data={data} />
      </div>
    </div>
  );
};

export default KavijatBarChart;