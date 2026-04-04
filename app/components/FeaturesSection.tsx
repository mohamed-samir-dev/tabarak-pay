const features = [
  { icon: "verified_user", title: "تحقق ثنائي", desc: "أمان مضاعف لكل عملية دخول لضمان حماية هويتك المالية." },
  { icon: "database_off", title: "بدون حفظ بيانات", desc: "لا نقوم بتخزين أي بيانات حساسة على خوادمنا نهائياً." },
  { icon: "encrypted", title: "تشفير آمن", desc: "بروتوكولات تشفير متطورة لحماية حركة البيانات لحظياً." },
  { icon: "payments", title: "استقطاع تلقائي", desc: "نظام ذكي لجدولة المدفوعات وتفادي التأخيرات المالية." },
];

export default function FeaturesSection() {
  return (
    <section className="bg-surface-container-low rounded-3xl p-6 sm:p-8 lg:p-12 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-l from-primary/5 to-transparent" />

      <div className="relative z-10 text-center mb-8 lg:mb-16">
        <h2 className="text-2xl sm:text-3xl font-black text-primary mb-4" style={{ fontFamily: "var(--font-cairo)" }}>
          لماذا تختار منصة تبارك؟
        </h2>
        <div className="w-20 h-1.5 bg-secondary mx-auto rounded-full" />
      </div>

      <div className="grid grid-cols-1 min-[350px]:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 relative z-10">
        {features.map(({ icon, title, desc }) => (
          <div key={title} className="text-center group">
            <div className="w-14 h-14 sm:w-20 sm:h-20 bg-white rounded-2xl sm:rounded-3xl shadow-sm flex items-center justify-center mx-auto mb-3 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
              <span className="material-symbols-outlined text-primary text-2xl sm:text-4xl">{icon}</span>
            </div>
            <h3 className="text-sm sm:text-xl font-bold text-primary mb-1 sm:mb-2">{title}</h3>
            <p className="text-on-surface-variant text-xs sm:text-sm px-1 sm:px-4">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
