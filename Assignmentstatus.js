// AssignmentStatus.js
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, DoughnutElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(DoughnutElement, CategoryScale, LinearScale);

const AssignmentStatus = () => {
  const data = {
    labels: ['Completed', 'Pending', 'Overdue'],
    datasets: [
      {
        label: 'Assignments',
        data: [50, 30, 20],
        backgroundColor: ['#4CAF50', '#FFCE56', '#FF6384'],
      },
    ],
  };

  const options = {
    responsive: true,
  };

  return (
    <div className="assignments-container">
      <h2>Assignment Status</h2>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default AssignmentStatus;
