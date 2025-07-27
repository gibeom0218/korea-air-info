'use client';

import { SIDO_LIST, SidoName } from '@/constants/sido-data';
import { useState } from 'react';

interface SidoDropdownProps {
  onChangeSido: (value: SidoName) => void;
}

export const SidoDropdown = ({ onChangeSido }: SidoDropdownProps) => {
  const [sido, setSido] = useState<SidoName>('서울');
  return (
    <div className="flex flex-row items-center gap-2">
      {/* 드롭다운 */}
      <label htmlFor="sido-select">시도 선택 : </label>
      <select
        id="sido-select"
        value={sido}
        onChange={(e) => {
          setSido(e.target.value as SidoName);
          onChangeSido(e.target.value as SidoName);
        }}
      >
        {SIDO_LIST.map((name) => (
          <option key={name} value={name}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
};
