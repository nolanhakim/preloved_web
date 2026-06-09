import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://preloved-web-mu.vercel.app"),
  title: "ReLove | Katalog Barang Preloved Premium & Terjangkau",
  description:
    "Temukan pakaian, sepatu, tas, dan aksesoris preloved kualitas premium dengan harga hemat. Semua barang dikurasi ketat, cuci bersih, dan siap pakai langsung.",

  // ── Open Graph ──
  openGraph: {
    type: "website",
    siteName: "ReLove",
    title: "ReLove | Katalog Barang Preloved Premium & Terjangkau",
    description:
      "Temukan pakaian, sepatu, tas, dan aksesoris preloved kualitas premium dengan harga hemat. Semua barang dikurasi ketat, cuci bersih, dan siap pakai langsung.",
    locale: "id_ID",
    images: [
      {
        url: "/og-image1.png",
        width: 1200,
        height: 630,
        alt: "ReLove — Katalog Barang Preloved Pilihan Terbaik",
      },
    ],
  },

  // ── Twitter / X Card ──
  twitter: {
    card: "summary_large_image",
    title: "ReLove | Katalog Barang Preloved Premium & Terjangkau",
    description:
      "Temukan pakaian, sepatu, tas, dan aksesoris preloved kualitas premium dengan harga hemat.",
    images: ["/og-image1.png"],
  },

  // ── Icons ──
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
