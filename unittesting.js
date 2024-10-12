// CustomReport.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import CustomReport from './CustomReport';

test('renders Customizable Report component', () => {
  render(<CustomReport />);
  const reportTitle = screen.getByText(/Customizable Report/i);
  expect(reportTitle).toBeInTheDocument();
});

test('checkbox toggles performance metrics', () => {
  render(<CustomReport />);
  const performanceCheckbox = screen.getByLabelText(/Show Performance Metrics/i);
  fireEvent.click(performanceCheckbox);
  expect(performanceCheckbox.checked).toBe(false);  // Initial checked state was true
});

test('generates report with selected filters', () => {
  render(<CustomReport />);
  const generateButton = screen.getByText(/Generate Report/i);
  fireEvent.click(generateButton);
  expect(console.log).toHaveBeenCalledWith(expect.objectContaining({
    showPerformance: true,
    showAttendance: true,
  }));
});
