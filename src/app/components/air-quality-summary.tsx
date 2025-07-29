interface Props {
  khaiGrade: string | number;
}

function getAirQualitySummary(khaiGrade: number): string {
  switch (khaiGrade) {
    case 1:
      return '대기질은 매우 좋습니다.';
    case 2:
      return '대기질은 보통입니다.';
    case 3:
      return '대기질이 다소 나쁩니다. 외출 시 주의하세요.';
    case 4:
      return '대기질이 매우 나쁨입니다. 실외활동을 자제하세요.';
    default:
      return '대기질 정보를 불러올 수 없습니다.';
  }
}

function getTextColorClass(khaiGrade: number): string {
  switch (khaiGrade) {
    case 1:
      return 'text-blue-600';
    case 2:
      return 'text-green-600';
    case 3:
      return 'text-yellow-600';
    case 4:
      return 'text-red-600';
    default:
      return 'text-gray-600';
  }
}

export const AirQualitySummary = ({ khaiGrade }: Props) => {
  const grade = Number(khaiGrade);
  const summary = getAirQualitySummary(grade);
  const textColorClass = getTextColorClass(grade);

  return (
    <div
      className={`w-full rounded-xl bg-gray-100 p-4 text-center text-sm md:text-base ${textColorClass}`}
    >
      {summary}
    </div>
  );
};
