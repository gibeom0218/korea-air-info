'use client';

import React from 'react';

interface DropdownProps<T extends string | number> {
  id?: string;
  label?: string;
  value: T;
  onChange: (value: T) => void;
  options: readonly T[];
  optionLabel?: (value: T) => string;
  className?: string;
}

export function Dropdown<T extends string | number>({
  id,
  label,
  value,
  onChange,
  options,
  optionLabel = (v) => String(v),
  className = '',
}: DropdownProps<T>) {
  return (
    <div className={`flex flex-row items-center gap-2 ${className}`}>
      {label && <label htmlFor={id}>{label}</label>}
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value as T)}
        className="rounded border px-2 py-1 focus:outline-none"
      >
        {options.map((opt) => (
          <option key={String(opt)} value={opt}>
            {optionLabel(opt)}
          </option>
        ))}
      </select>
    </div>
  );
}
