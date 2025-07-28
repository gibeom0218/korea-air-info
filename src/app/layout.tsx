import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '한국 대기 정보',
  description: '한국 각 지역의 대기 정보를 표시해주는 사이트',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className="font-sans">
      <body>{children}</body>
    </html>
  );
}
