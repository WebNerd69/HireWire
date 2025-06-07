import React from 'react';
import { Doughnut, Line } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, LineElement, PointElement, LinearScale, CategoryScale } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend, LineElement, PointElement, LinearScale, CategoryScale);

const doughnutData = {
  labels: ['Software', 'Engineering', 'Design', 'Architecture', 'Others'],
  datasets: [
    {
      label: 'Opportunities',
      data: [120, 80, 50, 30, 20],
      backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56', '#4BC0C0', '#9966FF'],
      hoverOffset: 10,
    },
  ],
};

const lineData = {
  labels: [2019, 2020, 2021, 2022, 2023, 2024],
  datasets: [
    {
      label: "Software Engineer",
      data: [103000, 108000, 118000, 125000, 132270, 133080],
      borderColor: "#36A2EB",   // blue
      backgroundColor: "rgba(54, 162, 235, 0.2)",
      tension: 0.3,
    },
    {
      label: "Data Analyst",
      data: [78000, 80000, 82360, 85000, 83640, 91290],
      borderColor: "#FF6384",   // pink
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      tension: 0.3,
    },
    {
      label: "Product Manager",
      data: [90000, 100000, 110000, 125000, 132056, 140000],
      borderColor: "#FFCE56",   // yellow
      backgroundColor: "rgba(255, 206, 86, 0.2)",
      tension: 0.3,
    },
    {
      label: "Architect",
      data: [95000, 100000, 105000, 110946, 114000, 117000],
      borderColor: "#4BC0C0",   // teal
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      tension: 0.3,
    },
    {
      label: "Electrical Engineer",
      data: [95000, 100000, 104000, 106000, 106950, 111910],
      borderColor: "#9966FF",   // purple
      backgroundColor: "rgba(153, 102, 255, 0.2)",
      tension: 0.3,
    },
    {
      label: "AI/ML Specialist",
      data: [100000, 110000, 120000, 130000, 146244, 140910],
      borderColor: "#FF9F40",   // orange
      backgroundColor: "rgba(255, 159, 64, 0.2)",
      tension: 0.3,
    }
  ]
};

const Charts = () => {
  return (
    <div className='w-[100vw] md:h-[100vh] h-[120vh] flex justify-center items-center flex-col'>
      <p className='text-2xl poppins-semi-bold tracking-wide py-3'>Job Market Insights</p>
        <div className='w-[100%] h-[80%] bg-white rounded-xl shadow-xl flex justify-center items-center flex-col md:flex-row'>
            <div className='md:w-[25%] w-[70%] h-[100%] md:px-10 flex items-center justify-center flex-col gap-y-3 relative'>
              <p className='poppins-medium text-lg top-10 absolute'>Job availability distribution</p>
              <Doughnut data={doughnutData} options={{responsive: true}}/>
            </div>
            <div className='md:w-[70%] w-[90%] h-[100%] md:px-10 flex items-center justify-center flex-col gap-y-3 relative' >
              <p className='poppins-medium text-lg absolute top-10'>Worldwide Job trends</p>
              <Line data={lineData} options={{responsive: true}}/>
            </div>
        </div>
    </div>
  )
}

export default Charts