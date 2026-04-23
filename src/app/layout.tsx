import type { Metadata } from 'next';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const siteUrl = 'https://libreincu.altermundi.net';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'LibreIncu – Tecnología Libre para la Soberanía Alimentaria',
    template: '%s | LibreIncu',
  },
  description:
    'Incubadora avícola de tecnología libre con monitoreo y control en línea, diseñada junto a la Agricultura Familiar, Campesina e Indígena (AFCI) de Córdoba, Argentina, como parte del ecosistema LibreAgro de AlterMundi y la CTO.',
  keywords: ['LibreIncu', 'LibreAgro', 'incubadora', 'soberanía alimentaria', 'tecnología libre', 'agricultura familiar', 'AFCI', 'AlterMundi', 'CTO', 'Córdoba', 'Argentina'],
  authors: [{ name: 'AlterMundi & CTO' }],
  creator: 'AlterMundi & CTO',
  publisher: 'AlterMundi',
  robots: { index: true, follow: true },
  alternates: { canonical: '/' },
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon.ico',
  },
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    siteName: 'LibreIncu',
    url: siteUrl,
    title: 'LibreIncu – Tecnología Libre para la Soberanía Alimentaria',
    description:
      'Incubadora avícola de tecnología libre, diseñada con la Agricultura Familiar Campesina e Indígena de Córdoba, Argentina. Parte del ecosistema LibreAgro.',
    images: [
      {
        url: '/images/IncuCeluQR.jpg',
        width: 1200,
        height: 630,
        alt: 'LibreIncu — incubadora con monitoreo en línea',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@altermundinet',
    creator: '@altermundinet',
    title: 'LibreIncu – Tecnología Libre para la Soberanía Alimentaria',
    description:
      'Incubadora avícola de tecnología libre, diseñada con la AFCI. Parte del ecosistema LibreAgro de AlterMundi.',
    images: ['/images/IncuCeluQR.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
