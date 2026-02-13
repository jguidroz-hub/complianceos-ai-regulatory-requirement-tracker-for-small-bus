import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { SessionProvider } from 'next-auth/react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ComplianceOS - AI regulatory requirement tracker for small business tax and compliance',
  description: 'Value Proposition: Automatically tracks changing regulatory requirements and tax obligations for small businesses. Reduces compliance errors by 60% and saves 10+ hours/month on regulatory research for business owners and accountants.

Target Customer: Small business owners (1-50 employees), accounting firms serving SMBs, and business formation service providers needing automated compliance tracking

---
Category: Micro-SaaS
Target Market: Small business owners (1-50 employees), accounting firms serving SMBs, and business formation service providers needing automated compliance tracking
Source Hypothesis ID: 5f2c3ef5-8c21-4531-97b2-ec4d5d331f80
Promotion Type: automatic',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
          <nav className="border-b">
            <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
              <a href="/" className="font-bold text-lg">ComplianceOS - AI regulatory requirement tracker for small business tax and compliance</a>
              <div className="flex items-center gap-4">
                <a href="/dashboard" className="text-sm hover:text-blue-600">Dashboard</a>
                <a href="/pricing" className="text-sm hover:text-blue-600">Pricing</a>
              </div>
            </div>
          </nav>
          <main>{children}</main>
        </SessionProvider>
      </body>
    </html>
  );
}
