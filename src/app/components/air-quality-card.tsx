import { AirQualityData } from '@/types/air-quality-data';
import { AirQualityItemChart } from './air-quality-chart';

interface AirQualityCardProps {
  item: AirQualityData;
}

export const AirQualityCard = ({ item }: AirQualityCardProps) => {
  const pollutantInfo = [
    {
      label: '미세먼지(PM10)',
      value: Number(item.pm10Value),
      grade: item.pm10Grade,
      unit: '㎍/㎥',
      standard: 80,
    },
    {
      label: '초미세먼지(PM2.5)',
      value: Number(item.pm25Value),
      grade: item.pm25Grade,
      unit: '㎍/㎥',
      standard: 35,
    },
    {
      label: '오존(O₃)',
      value: Number(item.o3Value),
      grade: item.o3Grade,
      unit: 'ppm',
      standard: 0.1,
    },
    {
      label: '이산화질소(NO₂)',
      value: Number(item.no2Value),
      grade: item.no2Grade,
      unit: 'ppm',
      standard: 0.06,
    },
    {
      label: '일산화탄소(CO)',
      value: Number(item.coValue),
      grade: item.coGrade,
      unit: 'ppm',
      standard: 9,
    },
    {
      label: '아황산가스(SO₂)',
      value: Number(item.so2Value),
      grade: item.so2Grade,
      unit: 'ppm',
      standard: 0.02,
    },
  ];

  return (
    <div className="flex h-auto w-full flex-col gap-4">
      <div className="mt-3 flex flex-col">
        <h2 className="text-lg font-semibold md:text-xl">
          {item.stationName} 측정소
        </h2>
        <p className="text-xs text-gray-500 md:text-sm">
          측정 시각: {item.dataTime}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {pollutantInfo.map((info) => (
          <AirQualityItemChart
            key={info.label}
            label={info.label}
            value={info.value}
            grade={info.grade}
            unit={info.unit}
            standard={info.standard}
          />
        ))}
      </div>
    </div>
  );
};
