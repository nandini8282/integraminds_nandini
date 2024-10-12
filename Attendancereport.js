import React from 'react';

const AttendanceReport = () => {
  const attendanceData = [
    { name: 'John Doe', date: '2024-10-01', status: 'Present' },
    { name: 'Jane Smith', date: '2024-10-01', status: 'Absent' },
    { name: 'John Doe', date: '2024-10-02', status: 'Absent' },
    { name: 'Jane Smith', date: '2024-10-02', status: 'Present' },
  ];

  return (
    <div className="attendance-container">
      <h2>Attendance Report</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {attendanceData.map((record, index) => (
            <tr key={index}>
              <td>{record.name}</td>
              <td>{record.date}</td>
              <td>{record.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AttendanceReport;
