import type { Metadata } from 'next';
import './globals.css';
import { CourseProvider } from '@/lib/progress';
import { Shell } from '@/components/shell';
export const metadata: Metadata = { title: '好好吃 · 家庭营养学习室', description: '24周家庭营养与健康自学课程，每天一点，慢慢学会照顾自己与家人。' };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="zh-Hans"><body><CourseProvider><Shell>{children}</Shell></CourseProvider></body></html>;
}
