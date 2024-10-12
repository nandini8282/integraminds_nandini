import React, { useState } from 'react';
import PerformanceMetrics from './components/PerformanceMetrics';
import AttendanceTrends from './components/AttendanceTrends';

const CustomReport = () => {
  const [showPerformance, setShowPerformance] = useState(true);
  const [showAttendance, setShowAttendance] = useState(true);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleGenerateReport = () => {
    // Logic to fetch data based on selected filters
    console.log('Generating report with:', { showPerformance, showAttendance, startDate, endDate });
  };

  return (
    <div>
      <h2>Customizable Report</h2>
      <div>
        <label>
          <input
            type="checkbox"
            checked={showPerformance}
            onChange={(e) => setShowPerformance(e.target.checked)}
          />
          Show Performance Metrics
        </label>
        <label>
          <input
            type="checkbox"
            checked={showAttendance}
            onChange={(e) => setShowAttendance(e.target.checked)}
          />
          Show Attendance Trends
        </label>
      </div>
      <div>
        <label>Start Date:</label>
        <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
        <label>End Date:</label>
        <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
      </div>
      <button onClick={handleGenerateReport}>Generate Report</button>

      {/* Render components conditionally */}
      {showPerformance && <PerformanceMetrics />}
      {showAttendance && <AttendanceTrends />}
    </div>
  );
};

export default CustomReport;
