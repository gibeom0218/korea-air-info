import { AlertCircle, Info, Smile, Frown } from 'lucide-react';

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

function getStyles(khaiGrade: number) {
  switch (khaiGrade) {
    case 1:
      return {
        textColor: 'text-blue-700',
        bgColor: 'bg-blue-100',
        Icon: Smile,
        iconColor: 'text-blue-500',
      };
    case 2:
      return {
        textColor: 'text-green-700',
        bgColor: 'bg-green-100',
        Icon: Info,
        iconColor: 'text-green-500',
      };
    case 3:
      return {
        textColor: 'text-yellow-700',
        bgColor: 'bg-yellow-100',
        Icon: AlertCircle,
        iconColor: 'text-yellow-500',
      };
    case 4:
      return {
        textColor: 'text-red-700',
        bgColor: 'bg-red-100',
        Icon: Frown,
        iconColor: 'text-red-500',
      };
    default:
      return {
        textColor: 'text-gray-700',
        bgColor: 'bg-gray-100',
        Icon: Info,
        iconColor: 'text-gray-500',
      };
  }
}

export const AirQualitySummary = ({ khaiGrade }: Props) => {
  const grade = Number(khaiGrade);
  const summary = getAirQualitySummary(grade);
  const { textColor, bgColor, Icon, iconColor } = getStyles(grade);

  return (
    <div
      className={`flex w-full items-center gap-3 rounded-xl border p-4 shadow-sm ${bgColor} ${textColor}`}
    >
      <Icon className={`h-6 w-6 ${iconColor}`} />
      <div className="flex flex-col">
        <span className="text-base font-semibold md:text-lg">
          오늘의 대기질 요약
        </span>
        <span className="text-sm md:text-base">{summary}</span>
      </div>
    </div>
  );
};
