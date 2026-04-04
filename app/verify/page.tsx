import VerifyFlow from "./VerifyFlow";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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
