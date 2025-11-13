// src/app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Linear Hub - Consultoria em Tecnologia e Gestão',
    template: '%s | Linear Hub',
  },
  description: 'Consultoria especializada em Tecnologia e Gestão de Negócios. Transformação Digital, SAP S/4HANA, Cloud, Cybersecurity e muito mais.',
  keywords: ['consultoria', 'tecnologia', 'SAP', 'transformação digital', 'cloud', 'cybersecurity', 'gestão de TI'],
  authors: [{ name: 'Linear Tecnologia e Gestão de Negócios' }],
  creator: 'Linear Hub',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://www.linear-hub.com.br',
    siteName: 'Linear Hub',
    title: 'Linear Hub - Consultoria em Tecnologia e Gestão',
    description: 'Transformação digital que gera resultados. Consultoria especializada em SAP, Cloud, Cybersecurity e Gestão de TI.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}