'use client';

import '@/app/lib/chart';
import { Bar } from 'react-chartjs-2';

interface Props {
  label: string;
  value: number;
  grade: string | null;
  unit: string;
  standard: number;
}

const getGradeInfo = (grade: string | null) => {
  switch (grade) {
    case '1':
      return { label: '좋음', color: 'bg-blue-400' };
    case '2':
      return { label: '보통', color: 'bg-green-400' };
    case '3':
      return { label: '나쁨', color: 'bg-yellow-400' };
    case '4':
      return { label: '매우 나쁨', color: 'bg-red-500' };
    default:
      return { label: '정보 없음', color: 'bg-gray-300' };
  }
};

export const AirQualityItemChart = ({
  label,
  value,
  grade,
  unit,
  standard,
}: Props) => {
  const { label: gradeLabel, color } = getGradeInfo(grade);

  return (
    <div className="rounded-xl border p-4 shadow-sm">
      <div className="mb-2 flex items-center justify-between">
        <div className="font-medium">{label}</div>
        <div className={`rounded-full px-2 py-1 text-sm text-white ${color}`}>
          {gradeLabel}
        </div>
      </div>

      <Bar
        data={{
          labels: ['측정값', '기준치'],
          datasets: [
            {
              label,
              data: [value, standard],
              backgroundColor: [
                'rgba(54, 162, 235, 0.6)',
                'rgba(200, 200, 200, 0.5)',
              ],
            },
          ],
        }}
        options={{
          indexAxis: 'y' as const,
          plugins: {
            legend: { display: false },
          },
          scales: {
            x: {
              beginAtZero: true,
            },
          },
        }}
      />

      <p className="mt-2 text-sm text-gray-600">
        현재 수치: <strong>{value}</strong> {unit}
      </p>
    </div>
  );
};
