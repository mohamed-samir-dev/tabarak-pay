export default function Footer() {
  return (
    <footer className="bg-[#f7f9fc] w-full border-t border-outline-variant/15">
      <div className="flex flex-col md:flex-row-reverse justify-between items-center px-6 sm:px-12 py-6 sm:py-8 gap-3 max-w-7xl mx-auto text-center md:text-start">
        <p className="text-on-surface-variant text-sm" style={{ fontFamily: "var(--font-tajawal)" }}>
          © 2024 مؤسسة تبارك الذكية. جميع الحقوق محفوظة.
        </p>
        <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 sm:gap-6">
          {["سياسة الخصوصية", "اتفاقية الخدمة", "الأمان"].map((link) => (
            <a key={link} href="#" className="text-on-surface-variant text-sm hover:text-secondary transition-colors" style={{ fontFamily: "var(--font-tajawal)" }}>
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
