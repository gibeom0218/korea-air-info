'use client';

import { Bar } from 'react-chartjs-2';
import { AirQualityData } from '@/types/air-quality-data';
import '@/app/lib/chart';

interface Props {
  item: AirQualityData;
}

// 각 항목과 기준치 정의
const pollutantKeys = [
  { label: '미세먼지(PM10)', valueKey: 'pm10Value', standard: 80 },
  { label: '초미세먼지(PM2.5)', valueKey: 'pm25Value', standard: 35 },
  { label: '오존(O₃)', valueKey: 'o3Value', standard: 0.1 },
  { label: '이산화질소(NO₂)', valueKey: 'no2Value', standard: 0.06 },
  { label: '일산화탄소(CO)', valueKey: 'coValue', standard: 9 },
  { label: '아황산가스(SO₂)', valueKey: 'so2Value', standard: 0.02 },
];

export const AirQualityChart = ({ item }: Props) => {
  const labels = pollutantKeys.map((p) => p.label);
  const dataValues = pollutantKeys.map((p) =>
    Number(item[p.valueKey as keyof AirQualityData]),
  );
  const standards = pollutantKeys.map((p) => p.standard);

  return (
    <div className="flex w-full">
      <Bar
        data={{
          labels,
          datasets: [
            {
              label: '측정값',
              data: dataValues,
              backgroundColor: dataValues.map((v, i) =>
                v > standards[i]
                  ? 'rgba(255, 99, 132, 0.6)'
                  : 'rgba(54, 162, 235, 0.6)',
              ),
            },
            {
              type: 'bar',
              label: '기준치',
              data: standards,
              borderColor: 'gray',
              borderWidth: 2,
            },
          ],
        }}
        options={{
          responsive: true,
          plugins: {
            legend: {
              position: 'top' as const,
            },
          },
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        }}
      />
    </div>
  );
};
