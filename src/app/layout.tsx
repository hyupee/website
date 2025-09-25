import { Navigation } from '@/components/layout/navigation';
import { PageContainer } from '@/components/layout/page-container';
import { pretendard } from '@/styles/theme';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '소프트웨어 엔지니어 정상협',
  description: '제 경험을 기록하고 공유하는 공간입니다.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko-KR" className={pretendard.className}>
      <body className="bg-[#f5f5f7]">
        <Navigation />
        <div className="animate-fade-in-up">
          <PageContainer>{children}</PageContainer>
        </div>
      </body>
    </html>
  );
}
