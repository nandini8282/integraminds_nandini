import React from 'react';
import './App.css';
import PerformanceMetrics from './components/PerformanceMetrics';
import AttendanceReport from './components/AttendanceReport';

function App() {
  return (
    <div className="App">
      <h1>Reporting and Analytics Dashboard</h1>
      <div className="dashboard-container">
        <PerformanceMetrics />
        <AttendanceReport />
      </div>
    </div>
  );
}

export default App;
