'use client';

import { AirQualityData } from '@/types/air-quality-data';
import { useEffect, useState } from 'react';
import { SIDO_LIST, SidoName } from '@/constants/sido-data';
import { AirQualityCard } from './components/air-quality-card';
import { Dropdown } from './components/dropdown';

export default function Home() {
  const [data, setData] = useState<AirQualityData[] | null>(null);
  const [selectedSido, setSelectedSido] = useState<SidoName>('서울');
  const [selectedStation, setSelectedStation] = useState<string>('');

  //도시에 관한 드롭다운을 만들어 도시를 변경시킬때마다 업데이트 되도록
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`/api/air-quality?sidoName=${selectedSido}`);
      const json = await res.json();
      const items: AirQualityData[] = json.response.body.items;
      setData(items);
      setSelectedStation(items[0].stationName);
    }

    fetchData();
  }, [selectedSido]);

  if (!data) return <div>로딩 중...</div>;

  //시도를 선택 후에 군/구/동별로 나눔.
  const stationList = Array.from(new Set(data.map((item) => item.stationName)));

  //필터링 함수를 통해 데이터 정제
  const filteredData = data.filter(
    (item) => item.stationName === selectedStation,
  );

  return (
    <div className="flex flex-col items-center justify-center gap-4 p-5">
      <h1 className="text-3xl font-bold">
        {selectedSido} {selectedStation} 대기질 정보
      </h1>
      <Dropdown
        id="sido-select"
        label="시도 선택 : "
        value={selectedSido}
        onChange={(val) => setSelectedSido(val)}
        options={SIDO_LIST}
      />
      <Dropdown
        id="station-select"
        label="측정소 선택 : "
        value={selectedStation}
        onChange={(val) => setSelectedStation(val)}
        options={stationList}
      />
      <AirQualityCard item={filteredData[0]} />
    </div>
  );
}
