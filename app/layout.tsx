import type { Metadata } from "next";
import { Cairo, Tajawal } from "next/font/google";
import "./globals.css";

const cairo = Cairo({ subsets: ["arabic"], variable: "--font-cairo", weight: ["400", "600", "700", "900"] });
const tajawal = Tajawal({ subsets: ["arabic"], variable: "--font-tajawal", weight: ["400", "500", "700"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://tabaraktechpay.com"),
  title: {
    default: "منصة التحقق المالي الذكي",
    template: "%s",
  },
  description: "منصة للتحقق المالي الذكي وإدارة الأقساط الشهرية بأعلى معايير الأمان. تحقق من مقدرتك على السداد بسهولة وأمان.",
  keywords: ["تحقق مالي", "أقساط شهرية", "بوابة دفع", "سداد إلكتروني"],
  authors: [{ name: "منصة التحقق المالي", url: "https://tabaraktechpay.com" }],
  creator: "منصة التحقق المالي",
  publisher: "منصة التحقق المالي",
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: { canonical: "https://tabaraktechpay.com" },
  openGraph: {
    type: "website",
    locale: "ar_SA",
    url: "https://tabaraktechpay.com",
    siteName: "منصة التحقق المالي",
    title: "منصة التحقق المالي الذكي",
    description: "منصة للتحقق المالي الذكي وإدارة الأقساط الشهرية بأعلى معايير الأمان.",
    images: [{ url: "https://tabaraktechpay.com/android-chrome-512x512.png", width: 512, height: 512, alt: "منصة التحقق المالي" }],
  },
  twitter: {
    card: "summary",
    title: "منصة التحقق المالي الذكي",
    description: "منصة للتحقق المالي الذكي وإدارة الأقساط الشهرية بأعلى معايير الأمان.",
    images: ["https://tabaraktechpay.com/android-chrome-512x512.png"],
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    other: { rel: "manifest", url: "/site.webmanifest" },
  },
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
