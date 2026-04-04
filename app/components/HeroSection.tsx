import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 lg:mb-20">
      <div className="space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#aaf470]/30 text-[#387000] rounded-full text-sm font-bold animate-pulse">
          <span className="w-2 h-2 bg-[#366b00] rounded-full" />
          نظام مدعوم بالذكاء الاصطناعي
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-black text-[#00354d] leading-tight" style={{ fontFamily: "var(--font-cairo)" }}>
          بوابة عملاء <br />
          <span className="text-[#366b00]">مؤسسة تبارك الذكية</span>
        </h1>

        <h2 className="text-base sm:text-xl lg:text-2xl font-bold text-[#41484d]" style={{ fontFamily: "var(--font-cairo)" }}>
          منظومة التحقق من مقدرتك على السداد الشهري
        </h2>

        <p className="text-sm sm:text-base lg:text-lg text-[#41484d] max-w-xl leading-relaxed">
          نقدم لك بوابة آمنة تتيح لك إدارة التزاماتك المالية بذكاء. نظامنا يضمن تشفير بياناتك بالكامل مع ميزة الاستقطاع التلقائي لضمان استمرارية خدماتك دون انقطاع.
        </p>

        <div className="flex flex-wrap items-center gap-3 pt-4">
          <a href="/verify" className="px-6 py-3 sm:px-8 sm:py-4 bg-[#366b00] text-white font-bold rounded-xl shadow-lg hover:scale-[0.98] transition-transform text-sm sm:text-base">
            ابدأ الآن
          </a>
          <Link href="/features" className="px-6 py-3 sm:px-8 sm:py-4 border-2 border-[#00354d] text-[#00354d] font-bold rounded-xl hover:bg-[#00354d]/5 transition-colors text-sm sm:text-base">
            اعرف أكتر
          </Link>
        </div>

        <div className="flex flex-wrap gap-6 pt-8 items-center">
          {[
            { icon: "verified_user", label: "مرخص من جهة رسمية" },
            { icon: "group", label: "+10 آلاف عميل نشط" },
            { icon: "star", label: "موثوق من العملاء" },
          ].map(({ icon, label }) => (
            <div key={label} className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100">
              <span className="material-symbols-outlined text-[#00354d]" style={{ fontVariationSettings: "'FILL' 1" }}>
                {icon}
              </span>
              <span className="text-sm font-bold text-[#41484d]">{label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="relative mt-4 lg:mt-0">
        <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#00354d]/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-[#366b00]/5 rounded-full blur-3xl" />
        <div className="relative bg-white p-6 rounded-3xl shadow-2xl shadow-[#00354d]/10 border border-[#c1c7ce]/15">
          <img
            alt="Financial Dashboard Preview"
            className="rounded-2xl shadow-inner w-full object-cover aspect-[4/3]"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRA27dTNubTv2kYF2OgGnh2LT9W3c02cGMmlJCJWwH_YtYDiL36QIWLEjvwwBRhOkxypCnbdMw8QKYxrjdBCMF2OL65xZk-oRrZWLk_uMAwWNIPuc2l-cGFO_YuVQWF6jfu_CE5JwDnFycTQLPebZX-EXJRM8P9T0h0qN18bBjBp7ogxrObJcQMb1PpHmoLJS_w3Bm4cymTOsBeqlM63H0Crrzgou0q1b7ub-F16cr_VpwLeNjpAy5LjHIkM9SQmpAmnt6mw"
          />
        </div>
      </div>
    </section>
  );
}
