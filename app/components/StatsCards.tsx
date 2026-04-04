export default function StatsCards() {
  return (
    <div className="grid grid-cols-1 min-[365px]:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-12 lg:mb-20">
      <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-sm border border-[#c1c7ce]/10 hover:shadow-md transition-shadow">
        <div className="flex justify-between items-start mb-3 sm:mb-4">
          <span className="p-1.5 sm:p-2 bg-[#366b00]/10 text-[#366b00] rounded-lg material-symbols-outlined text-xl sm:text-2xl">shield</span>
          <span className="px-2 py-0.5 sm:px-3 sm:py-1 bg-[#aaf470]/50 text-[#387000] text-[10px] sm:text-xs font-bold rounded-full">البوابة نشطة</span>
        </div>
        <h3 className="text-[#41484d] font-bold mb-1 text-xs sm:text-sm">الحالة التشغيلية</h3>
        <p className="text-lg sm:text-2xl font-black text-[#00354d]">آمن ومستقر</p>
      </div>

      <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-sm border border-[#c1c7ce]/10 hover:shadow-md transition-shadow">
        <div className="flex justify-between items-start mb-3 sm:mb-4">
          <span className="p-1.5 sm:p-2 bg-[#00354d]/10 text-[#00354d] rounded-lg material-symbols-outlined text-xl sm:text-2xl">hub</span>
        </div>
        <h3 className="text-[#41484d] font-bold mb-1 text-xs sm:text-sm">الخدمات النشطة</h3>
        <p className="text-lg sm:text-2xl font-black text-[#00354d]">+10,000</p>
      </div>

      <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-sm border border-[#c1c7ce]/10 hover:shadow-md transition-shadow">
        <div className="flex justify-between items-start mb-3 sm:mb-4">
          <span className="p-1.5 sm:p-2 bg-[#e0e3e6] text-[#41484d] rounded-lg material-symbols-outlined text-xl sm:text-2xl">pending_actions</span>
        </div>
        <h3 className="text-[#41484d] font-bold mb-1 text-xs sm:text-sm">الطلبات المعلقة</h3>
        <p className="text-lg sm:text-2xl font-black text-[#00354d]">0</p>
      </div>

      <div className="bg-[#00354d] text-white p-4 sm:p-6 rounded-2xl shadow-lg flex flex-col justify-between">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>lock</span>
          <span className="font-bold">وصول آمن</span>
        </div>
        <div>
          <p className="text-sm opacity-80 mb-2">تشفير بنكي 256-bit</p>
          <div className="h-1.5 w-full bg-white/20 rounded-full overflow-hidden">
            <div className="h-full bg-[#366b00] w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
