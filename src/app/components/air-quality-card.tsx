import { AirQualityData } from '@/types/air-quality-data';

interface AirQualityCardProps {
  idx: number;
  item: AirQualityData;
}

export const AirQualityCard = ({ idx, item }: AirQualityCardProps) => {
  return (
    <div
      key={idx}
      style={{
        border: '1px solid #ccc',
        padding: '1rem',
        marginBottom: '1rem',
      }}
    >
      <h2>{item.stationName} 측정소</h2>
      <p>측정 시각: {item.dataTime}</p>
      <ul>
        <li>
          통합대기환경지수 (KHAI): {item.khaiValue} (등급 {item.khaiGrade})
        </li>
        <li>
          미세먼지(PM10): {item.pm10Value}㎍/㎥ (등급 {item.pm10Grade})
        </li>
        <li>
          초미세먼지(PM2.5): {item.pm25Value}㎍/㎥ (등급 {item.pm25Grade})
        </li>
        <li>
          오존(O₃): {item.o3Value}ppm (등급 {item.o3Grade})
        </li>
        <li>
          이산화질소(NO₂): {item.no2Value}ppm (등급 {item.no2Grade})
        </li>
        <li>
          일산화탄소(CO): {item.coValue}ppm (등급 {item.coGrade})
        </li>
        <li>
          아황산가스(SO₂): {item.so2Value}ppm (등급 {item.so2Grade})
        </li>
      </ul>
    </div>
  );
};
