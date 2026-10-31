import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'SalesPulse | Sales Dashboard', description: 'Interactive annual sales analytics dashboard' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
