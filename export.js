import jsPDF from 'jspdf';
import 'jspdf-autotable';

const generatePDF = () => {
  const doc = new jsPDF();
  doc.text('Custom Report', 20, 10);
  
  // Add a table to the PDF
  doc.autoTable({
    head: [['Name', 'Date', 'Status']],
    body: [
      ['John Doe', '2024-10-01', 'Present'],
      ['Jane Smith', '2024-10-01', 'Absent'],
    ],
  });

  doc.save('report.pdf');
};

<button onClick={generatePDF}>Export as PDF</button>
