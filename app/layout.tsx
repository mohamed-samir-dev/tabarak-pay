import type { Metadata } from "next";
import { Cairo, Tajawal } from "next/font/google";
import "./globals.css";

const cairo = Cairo({ subsets: ["arabic"], variable: "--font-cairo", weight: ["400", "600", "700", "900"] });
const tajawal = Tajawal({ subsets: ["arabic"], variable: "--font-tajawal", weight: ["400", "500", "700"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://tabarak-pay.com"),
  title: {
    default: "تبارك الذكية | منصة التحقق المالي الذكي",
    template: "%s | تبارك الذكية",
  },
  description: "منصة تبارك الذكية للتحقق المالي الذكي وإدارة الأقساط الشهرية بأعلى معايير الأمان. تحقق من مقدرتك على السداد بسهولة وأمان.",
  keywords: ["تبارك الذكية", "تحقق مالي", "أقساط شهرية", "بوابة دفع", "سداد إلكتروني", "tabarak"],
  authors: [{ name: "مؤسسة تبارك الذكية", url: "https://tabarak-pay.com" }],
  creator: "مؤسسة تبارك الذكية",
  publisher: "مؤسسة تبارك الذكية",
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: { canonical: "https://tabarak-pay.com" },
  openGraph: {
    type: "website",
    locale: "ar_SA",
    url: "https://tabarak-pay.com",
    siteName: "تبارك الذكية",
    title: "تبارك الذكية | منصة التحقق المالي الذكي",
    description: "منصة تبارك الذكية للتحقق المالي الذكي وإدارة الأقساط الشهرية بأعلى معايير الأمان.",
    images: [{ url: "/android-chrome-512x512.png", width: 512, height: 512, alt: "تبارك الذكية" }],
  },
  twitter: {
    card: "summary",
    title: "تبارك الذكية | منصة التحقق المالي الذكي",
    description: "منصة تبارك الذكية للتحقق المالي الذكي وإدارة الأقساط الشهرية بأعلى معايير الأمان.",
    images: ["/android-chrome-512x512.png"],
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
