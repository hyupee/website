import { PageHeadline } from '@/components/layout/page-headline';
import { Card } from '@/components/ui/card/Card';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '소프트웨어 엔지니어 정상협 | 블로그',
};

export default function Page() {
  return (
    <div>
      <PageHeadline
        title="블로그"
        description={`기술과 일상을\n공유하는 공간.`}
      />
      <div className="py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card
          title="공사 중입니다."
          description="현재 블로그 단장 중입니다. 조금만 기다려주세요."
          createdAt="2025-09-25"
          emoji="😅"
        />
      </div>
    </div>
  );
}
