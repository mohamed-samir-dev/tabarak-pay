import type { Metadata } from "next";
import VerifyFlow from "./VerifyFlow";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "تحقق من مقدرتك على السداد",
  description: "أدخل بيانات بطاقتك وتحقق من مقدرتك على سداد الأقساط الشهرية بأمان وخصوصية تامة.",
  alternates: { canonical: "https://tabarak-pay.com/verify" },
  robots: { index: false, follow: false },
};

export default function VerifyPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex items-center justify-center p-4 md:p-8 pt-32 md:pt-36">
        <VerifyFlow />
      </main>
      <Footer />
    </>
  );
}
