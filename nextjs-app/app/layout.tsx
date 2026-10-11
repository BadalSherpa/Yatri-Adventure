import type { Metadata } from 'next';
import './globals.css';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export const metadata: Metadata = {
  title: 'Yatri Adventure - Himalayan Expeditions & Escapes',
  description:
    'Discover curated Himalayan tour packages, peaceful homestays, local adventure experiences, and personalized trekking support across Nepal, Sikkim, and Darjeeling.',
  openGraph: {
    title: 'Yatri Adventure - Himalayan Expeditions & Escapes',
    description:
      'Curating raw, respectful, and transformative Himalayan journeys across Nepal, Sikkim, and the Darjeeling Hills.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#f7f9fb] text-[#191c1e] antialiased selection:bg-[#F2825B] selection:text-white min-h-screen flex flex-col font-['Inter']">
        <Header />
        <main className="w-full pt-20 flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
