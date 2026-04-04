import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const mainFeatures = [
  {
    icon: "verified_user",
    title: "تحقق ثنائي متقدم",
    desc: "نظام تحقق ثنائي يجمع بين بيانات البطاقة ورمز OTP البنكي لضمان أعلى مستويات الأمان لكل عملية.",
    badge: "أمان",
    badgeColor: "bg-secondary/10 text-secondary",
  },
  {
    icon: "database_off",
    title: "بدون حفظ بيانات",
    desc: "لا نقوم بتخزين أي بيانات حساسة على خوادمنا. كل المعلومات تُستخدم للتحقق اللحظي فقط ثم تُحذف فوراً.",
    badge: "خصوصية",
    badgeColor: "bg-secondary/10 text-secondary",
  },
  {
    icon: "encrypted",
    title: "تشفير SSL من طرف لطرف",
    desc: "جميع البيانات المرسلة محمية بتشفير TLS 1.3 وبروتوكولات أمان متوافقة مع معايير PCI DSS العالمية.",
    badge: "تشفير",
    badgeColor: "bg-primary/10 text-primary",
  },
  {
    icon: "payments",
    title: "استقطاع تلقائي ذكي",
    desc: "نظام ذكي لجدولة المدفوعات الشهرية تلقائياً في اليوم الذي تختاره، مع إشعارات مسبقة قبل كل عملية.",
    badge: "ذكاء",
    badgeColor: "bg-primary/10 text-primary",
  },
  {
    icon: "calendar_month",
    title: "تنظيم الأقساط الشهرية",
    desc: "إدارة كاملة لجدول أقساطك الشهرية مع إمكانية تعديل يوم السداد وعرض تاريخ المدفوعات بشكل واضح.",
    badge: "إدارة",
    badgeColor: "bg-secondary/10 text-secondary",
  },
  {
    icon: "undo",
    title: "استرجاع الدفعات",
    desc: "طلب استرجاع أي دفعة بسهولة تامة مع تتبع حالة الطلب لحظياً حتى يصل المبلغ لحسابك.",
    badge: "مرونة",
    badgeColor: "bg-primary/10 text-primary",
  },
];

const securityBadges = [
  { icon: "security", label: "PCI DSS" },
  { icon: "encrypted", label: "TLS 1.3" },
  { icon: "verified", label: "ISO 27001" },
  { icon: "shield", label: "SOC 2" },
];

export default function FeaturesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#f7f9fc] pt-24 sm:pt-28 pb-10 sm:pb-16 px-4 sm:px-6 md:px-8">
        <div className="max-w-5xl mx-auto space-y-10 sm:space-y-16">

          {/* Hero */}
          <div className="text-center space-y-3 sm:space-y-4 px-2">
            <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 bg-secondary/10 text-secondary text-xs sm:text-sm font-bold rounded-full" style={{ fontFamily: "var(--font-cairo)" }}>
              مميزات المنصة
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#00354d] leading-snug" style={{ fontFamily: "var(--font-cairo)" }}>
              لماذا تختار منصة تبارك؟
            </h1>
            <p className="text-[#41484d] text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              منظومة متكاملة للتحقق المالي الذكي مبنية على أعلى معايير الأمان والخصوصية لضمان تجربة سداد سلسة وآمنة.
            </p>
            <div className="w-14 sm:w-16 h-1.5 bg-[#366b00] mx-auto rounded-full" />
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 min-[480px]:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {mainFeatures.map(({ icon, title, desc, badge, badgeColor }) => (
              <div
                key={title}
                className="bg-white rounded-2xl p-4 sm:p-6 border border-[#c1c7ce]/20 shadow-[0_4px_20px_-4px_rgba(15,76,107,0.08)] hover:shadow-[0_8px_32px_-4px_rgba(15,76,107,0.14)] hover:-translate-y-1 transition-all duration-300 space-y-3 sm:space-y-4"
              >
                <div className="flex items-start justify-between">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#f2f4f7] rounded-xl flex items-center justify-center">
                    <span className="material-symbols-outlined text-[#00354d] text-xl sm:text-2xl">{icon}</span>
                  </div>
                  <span className={`text-xs font-bold px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full ${badgeColor}`}>{badge}</span>
                </div>
                <div className="space-y-1.5 sm:space-y-2">
                  <h3 className="font-black text-[#00354d] text-sm sm:text-base" style={{ fontFamily: "var(--font-cairo)" }}>{title}</h3>
                  <p className="text-[#41484d] text-xs sm:text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Security Standards */}
          <div className="bg-[#00354d] rounded-2xl p-6 sm:p-8 md:p-12 text-white">
            <div className="text-center mb-6 sm:mb-10 space-y-2 sm:space-y-3">
              <h2 className="text-xl sm:text-2xl font-black" style={{ fontFamily: "var(--font-cairo)" }}>معايير الأمان والامتثال</h2>
              <p className="text-white/70 text-xs sm:text-sm max-w-md mx-auto">
                منصة تبارك متوافقة مع أعلى المعايير الدولية لأمن البيانات والمدفوعات الإلكترونية.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {securityBadges.map(({ icon, label }) => (
                <div key={label} className="flex flex-col items-center gap-2 sm:gap-3 p-4 sm:p-5 bg-white/10 rounded-xl hover:bg-white/15 transition-colors">
                  <span className="material-symbols-outlined text-[#aaf470] text-2xl sm:text-3xl">{icon}</span>
                  <span className="font-bold text-xs sm:text-sm">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-[#f2f4f7] rounded-2xl p-5 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 border border-[#c1c7ce]/20 text-center sm:text-right">
            <div className="space-y-1">
              <h3 className="text-lg sm:text-xl font-black text-[#00354d]" style={{ fontFamily: "var(--font-cairo)" }}>جاهز للبدء؟</h3>
              <p className="text-[#41484d] text-xs sm:text-sm">ابدأ عملية التحقق الآن وفعّل ميزات حسابك الذكي.</p>
            </div>
            <a
              href="/verify"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#366b00] text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl font-bold hover:brightness-110 active:scale-95 transition-all whitespace-nowrap text-sm sm:text-base"
              style={{ fontFamily: "var(--font-cairo)" }}
            >
              ابدأ التحقق
              <span className="material-symbols-outlined text-base sm:text-xl">arrow_back</span>
            </a>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
