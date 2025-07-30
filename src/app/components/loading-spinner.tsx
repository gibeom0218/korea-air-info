// components/loading-spinner.tsx
import { Loader2 } from 'lucide-react';

export function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center p-10">
      <Loader2 className="h-6 w-6 animate-spin text-blue-500" />
      <span className="ml-2 text-sm text-gray-500">
        데이터를 불러오는 중...
      </span>
    </div>
  );
}
