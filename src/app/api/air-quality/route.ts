// app/api/air-quality/route.ts

import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const sidoName = searchParams.get('sidoName') || '서울';

  const serviceKey = process.env.NEXT_PUBLIC_DECODING_KEY;
  if (!serviceKey) {
    return NextResponse.json(
      { error: '환경 변수 SERVICE_KEY가 설정되지 않았습니다.' },
      { status: 500 },
    );
  }

  const baseUrl =
    'https://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty';
  const url = new URL(baseUrl);

  url.searchParams.set('serviceKey', serviceKey);
  url.searchParams.set('returnType', 'json');
  url.searchParams.set('numOfRows', '100');
  url.searchParams.set('pageNo', '1');
  url.searchParams.set('sidoName', sidoName);
  url.searchParams.set('ver', '1.0');

  try {
    const res = await fetch(url.toString());
    const data = await res.json();
    return NextResponse.json(data);
  } catch (err) {
    if (err instanceof Error) {
      return NextResponse.json(
        { error: '데이터 요청 실패', message: err.message },
        { status: 500 },
      );
    }

    return NextResponse.json(
      { error: '알 수 없는 오류 발생', message: String(err) },
      { status: 500 },
    );
  }
}
