import type { Metadata } from "next";
import { Cairo, Tajawal } from "next/font/google";
import "./globals.css";

const cairo = Cairo({ subsets: ["arabic"], variable: "--font-cairo", weight: ["400", "600", "700", "900"] });
const tajawal = Tajawal({ subsets: ["arabic"], variable: "--font-tajawal", weight: ["400", "500", "700"] });

export const metadata: Metadata = {
  title: "مؤسسة تبارك الذكية - لوحة التحكم",
  description: "بوابة عملاء مؤسسة تبارك الذكية - منظومة التحقق من مقدرتك على السداد الشهري",
};

import FontLoader from "./components/FontLoader";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" className={`${cairo.variable} ${tajawal.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body className="min-h-screen" suppressHydrationWarning>
        <FontLoader />
        {children}
      </body>
    </html>
  );
}
