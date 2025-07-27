'use client';

import { AirQualityData } from '@/types/air-quality-data';
import { useEffect, useState } from 'react';
import { SidoDropdown } from './components/sido-dropdown';
import { SidoName } from '@/constants/sido-data';
import { AirQualityCard } from './components/air-quality-card';

export default function Home() {
  const [data, setData] = useState<AirQualityData[] | null>(null);
  const [selectedSido, setSelectedSido] = useState<SidoName>('서울');

  //도시에 관한 드롭다운을 만들어 도시를 변경시킬때마다 업데이트 되도록
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`/api/air-quality?sidoName=${selectedSido}`);
      const json = await res.json();
      const items: AirQualityData[] = json.response.body.items;
      console.log(items);
      setData(items);
    }

    fetchData();
  }, [selectedSido]);

  if (!data) return <div>로딩 중...</div>;

  return (
    <div className="flex flex-col items-center justify-center gap-4 p-5">
      <h1 className="text-3xl font-bold">{selectedSido} 대기질 정보</h1>
      <SidoDropdown onChangeSido={setSelectedSido} />
      {data.map((item, idx) => (
        <AirQualityCard key={idx} item={item} idx={idx} />
      ))}
    </div>
  );
}
