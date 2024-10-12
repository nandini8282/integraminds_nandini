// StudentPerformance.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale);

const StudentPerformance = () => {
  const data = {
    labels: ['Math', 'Science', 'History', 'English', 'Art'],
    datasets: [
      {
        label: 'Average Grade (%)',
        data: [85, 78, 92, 88, 75],
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="performance-container">
      <h2>Student Performance</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default StudentPerformance;
