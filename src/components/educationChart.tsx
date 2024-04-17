import React from 'react';
import { Chart } from 'react-charts';
import { educationData } from '@/db/llms';

export function EducationChart() {
  const axes = React.useMemo(
    () => [
      {
        primary: true,
        type: 'linear',
        position: 'bottom',
        format: (d) => `${d}`,
      },
      { type: 'linear', position: 'left', hardMin: 0 },
    ],
    []
  );

  const series = React.useMemo(
    () => ({
      type: 'line',
    }),
    []
  );

  return (
    <div className="p-4 bg-white shadow-lg rounded-lg">
      <div className="text-xl font-semibold mb-4">
        Education Impact (2018-2022)
      </div>
      <div className="h-64">
        <Chart data={educationData} axes={axes} series={series} tooltip />
      </div>
    </div>
  );
}

export default MyChart;
