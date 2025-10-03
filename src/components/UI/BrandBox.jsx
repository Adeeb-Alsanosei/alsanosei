import React from "react";

/**
 * BrandBox - Glassmorphic info box for brand highlights.
 * Responsive, accessible, and visually consistent with main design.
 * Optimized for RTL Arabic users.
 */

const brandBullets = [
  "✔️ الشفافية والموثوقية — بدون أي رسوم خفية أو تكاليف غير متوقعة",
  "🎯 نساعدك على اختيار أرخص وأفضل باقة تناسب احتياجك وسرعتك",
  "⚡ تنفيذ مضمون وسريع — نُنجز تجديدك حسب توجيهاتك بثقة وأمان",
  "💬 تواصل مباشر وسهل عبر الواتساب أو البريد الإلكتروني، بدون تعقيد",
  "🔖 خصم خاص عند تجديد 3 أجهزة أو أكثر دفعة واحدة — وفر أكثر"
];

const BrandBox = () => (
  <section
    className="brandbox box-border p-4 sm:p-6 md:p-8 lg:p-12 w-full max-w-2xl flex flex-col gap-5 justify-center items-center text-center mx-auto animate-fade-in overflow-hidden"
    tabIndex={0}
    aria-label="معلومات حول سبب اختيارك للسنوسي"
    lang="ar"
    dir="rtl"
    style={{ boxSizing: 'border-box', wordBreak: 'break-word', overflowWrap: 'break-word', padding: '2.5rem', minWidth: 0 }}
  >
    {/* Heading */}
    <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight drop-shadow flex items-center justify-center gap-2 text-cyan-500 dark:text-cyan-300 px-2">
      <span role="img" aria-label="Star">🌟</span>
      لماذا نحن؟
    </h2>

    {/* Divider */}
    <hr className="w-2/3 border-cyan-300 dark:border-cyan-700 opacity-60" />

    {/* Bullet List */}
    <ul className="space-y-3 w-full max-w-lg text-right px-3 break-words overflow-hidden">
      {brandBullets.map((text, idx) => (
        <li
          key={idx}
          className="text-base md:text-lg font-medium text-blue-900 dark:text-blue-100 bg-white/60 dark:bg-slate-800/40 rounded-xl px-4 py-3 shadow-md flex items-start gap-3 break-words overflow-hidden"
          style={{ wordBreak: 'break-word', overflowWrap: 'break-word' }}
        >
          <span className="text-cyan-500 text-xl leading-[1.25rem]">•</span>
          <span>{text}</span>
        </li>
      ))}
    </ul>

    {/* Divider */}
    <hr className="w-2/3 border-cyan-300 dark:border-cyan-700 opacity-60" />

    {/* Call to Action / Support Footer */}
    <div className="mt-1 text-base md:text-lg text-cyan-800 dark:text-cyan-200 font-semibold px-2">
      <span className="inline-block bg-cyan-100 dark:bg-cyan-900/30 px-6 py-3 rounded-2xl shadow-md">
        نخدمك بثقة ونوفّر لك كل ما تحتاجه لتجديد Starlink بكل سهولة
      </span>
    </div>
  </section>
);

export default BrandBox;
