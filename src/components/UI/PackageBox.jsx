import React, { useState, useEffect, useCallback } from 'react';
import usePackageStore from '../../store/packageStore';

// --- Package Data & Utilities ---
const RATE = 3500;
const SHIPPING_FEE_PERCENT = 0.10;
const COMMISSION_FEE_PERCENT = 0.05;
const packageData = [
  {
    key: 'NGN 49,000 | نيجيريا روم قديم',
    usd: 35,
    rate: RATE,
    msg: `✅ تعمل في السودان.\n📶 سرعة التحميل: 43 - 150 Mbps.\n💵 سعر التجديد بالجنيه السوداني:`
  },
  {
    key: 'NGN 167,000 | نيجيريا روم',
    usd: 112.8,
    rate: RATE,
    msg: `✅ تعمل في السودان\n📶 سرعة التحميل : 43 - 150 Mbps\n💵 سعر التجديد بالجنيه السوداني:`
  },
  {
    key: 'MWK 170,000 | مالاوي روم',
    usd: 122,
    rate: RATE,
    msg: `✅ تعمل في السودان.\n📶 سرعة التحميل: 46 - 119 Mbps.\n💵 سعر التجديد بالجنيه السوداني:`
  },
  {
    key: 'ZMW 2,500 | زامبيا روم',
    usd: 103,
    rate: RATE,
    msg: `✅ تعمل في السودان.\n📶 سرعة التحميل: 46 - 119 Mbps.\n💵 سعر التجديد بالجنيه السوداني:`
  },
  {
    key: 'RWF 128,000 | رواندا روم',
    usd: 104,
    rate: RATE,
    msg: `✅ تعمل في السودان.\n📶 سرعة التحميل: 72 - 153 Mbps.\n💵 سعر التجديد بالجنيه السوداني:`
  },
  {
    key: 'KES 14,000 | كينيا روم',
    usd: 114,
    rate: RATE,
    msg: `✅ تعمل في السودان.\n📶 سرعة التحميل: 50 - 128 Mbps.\n💵 سعر التجديد بالجنيه السوداني:`
  },
  {
    key: 'MZN 6,000 | موزمبيق روم',
    usd: 99,
    rate: RATE,
    msg: `✅ تعمل في السودان.\n📶 سرعة التحميل: 58 - 132 Mbps.\n💵 سعر التجديد بالجنيه السوداني:`
  },
  {
    key: 'USD 100 | اليمن روم',
    usd: 102,
    rate: RATE,
    msg: `✅ مسموح للتنشيط لأول مرة (جهاز جديد).\n✅ تعمل في السودان.\n📶 سرعة التحميل: 43 - 150 Mbps.\n💵 السعر بالجنيه السوداني:`
  },
  {
    key: 'EUR 89 | اوروبا روم',
    usd: 98,
    rate: RATE,
    msg: `✅ تعمل في السودان.\n📶 سرعة التحميل: 60 - 150 Mbps.\n💵 سعر التجديد بالجنيه السوداني:`
  }
];

const getModalBullets = (msg, totalRenewalSDG) => {
  if (!msg) return [];
  return msg.split('\n').map((text, i) => {
    if (text.startsWith('💵 سعر التجديد بالجنيه السوداني') || text.startsWith('💵 السعر بالجنيه السوداني')) {
      return {
        text: `💵 سعر التجديد بالجنيه السوداني: ${totalRenewalSDG ? totalRenewalSDG.toLocaleString() : ''}.`,
        type: 'success',
      };
    }
    return { text, type: i === 0 ? 'danger' : 'success' };
  });
};

// --- Main Component ---
const PackageBox = ({ setModalData }) => {
  const [selectedIdx, setSelectedIdx] = useState(null);
  const [arrowUp, setArrowUp] = useState(true);
  const setPackage = usePackageStore((state) => state.setSelectedPackage);
  const { totalRenewalSDG } = usePackageStore();
  const selected = packageData[selectedIdx];

  // Update store on selection
  useEffect(() => {
    if (selected) {
      setPackage(selected.key, selected);
    }
  }, [selected, setPackage]);

  // Show InfoModal for the selected package (including initial/default)
  useEffect(() => {
    if (selectedIdx !== null && selected) {
      if (selected.msg) {
        setModalData({
          title: '💡 معلومة مهمة',
          bullets: getModalBullets(selected.msg, totalRenewalSDG),
        });
      } else {
        setModalData(null);
      }
    } else {
      setModalData(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedIdx, totalRenewalSDG]);

  // Dropdown change handler
  const handleChange = useCallback((e) => {
    setSelectedIdx(Number(e.target.value));
  }, []);

  // Toggle arrow direction
  const toggleArrow = useCallback(() => setArrowUp((prev) => !prev), []);

  return (
    <section
      className="packagebox backdrop-blur-lg bg-white/30 dark:bg-white/10 border border-white/30 rounded-2xl p-12 shadow-2xl max-w-2xl w-full mx-auto my-12 flex flex-col gap-10 min-h-[420px] justify-center items-center"
      dir="rtl"
      tabIndex={0}
      aria-label="اختيار باقة ستارلينك / Starlink Package Selection"
    >
      <h2 className="text-3xl font-extrabold mb-6 text-center tracking-tight drop-shadow-sm" style={{ fontFamily: 'Mada, Amiri, Noto Naskh Arabic, Cairo, Noto Sans Arabic, Inter, Arial, sans-serif' }}>
        اختار الباقة المناسبة
      </h2>
      <div className="mb-8 w-full text-center text-lg font-semibold" style={{ fontFamily: 'Mada, Amiri, Noto Naskh Arabic, Cairo, Noto Sans Arabic, Inter, Arial, sans-serif' }}>
        اخر تحديث للسعر : <span className="text-[#38bdf8]">الان</span>
      </div>
      <select
        id="package"
        className="w-full packagerow bg-white/40 dark:bg-slate-800/40 border border-white/30 dark:border-slate-700/40 rounded-xl px-8 py-5 text-center text-lg font-medium shadow focus:outline-none focus:ring-2 focus:ring-green-400 transition-all duration-150 appearance-none cursor-pointer mb-8"
        style={{ minHeight: 64 }}
        value={selectedIdx === null ? '' : selectedIdx}
        onChange={handleChange}
        aria-label="اختيار الباقة"
      >
        <option value="" disabled className="font-bold text-[#38bdf8]" style={{ fontFamily: 'Mada, Cairo, Noto Sans Arabic, Inter, Arial, sans-serif' }}>اضغط هنا لاختيار الباقة المناسبة</option>
        {packageData.map((pkg, idx) => (
          <option
            key={pkg.key}
            value={idx}
            className={
              (selectedIdx === idx ? 'font-bold text-[#38bdf8]' : 'font-normal text-gray-700 dark:text-gray-200') +
              ' text-center text-lg'
            }
            style={{ fontFamily: 'Mada, Cairo, Noto Sans Arabic, Inter, Arial, sans-serif' }}
          >
            {pkg.key}
          </option>
        ))}
      </select>
      {selectedIdx !== null && (
        <table className="w-[600px] max-w-full mb-8 text-center border-separate border-spacing-y-5 overflow-hidden" style={{ borderRadius: '1rem' }}>
          <tbody>
            <tr className="packagerow bg-white/40 dark:bg-slate-800/40 border border-white/30 dark:border-slate-700/40 rounded-xl shadow">
              <td className="align-middle text-lg font-bold text-center">سعر الصرف</td>
              <td className="align-middle text-lg font-bold text-center">
                <span
                  className={arrowUp ? 'text-red-500' : 'text-green-600'}
                  style={{ cursor: 'pointer' }}
                  onClick={toggleArrow}
                  title="اضغط لتغيير اتجاه السهم"
                  tabIndex={0}
                  role="button"
                  aria-pressed={arrowUp}
                >
                  {arrowUp ? '▲' : '▼'} {selected?.rate} SDG
                </span>
              </td>
            </tr>
            <tr className="packagerow bg-white/40 dark:bg-slate-800/40 border border-white/30 dark:border-slate-700/40 rounded-xl shadow">
              <td className="align-middle text-lg font-bold text-center">سعر الباقة</td>
              <td className="align-middle text-lg font-semibold text-center">{selected?.usd ? selected.usd : ''} $</td>
            </tr>
            <tr className="packagerow bg-white/40 dark:bg-slate-800/40 border border-white/30 dark:border-slate-700/40 rounded-xl shadow">
              <td className="align-middle text-lg font-bold text-center">ضريبة الشحن</td>
              <td className="align-middle text-lg font-semibold text-center">{selected?.usd ? (selected.usd * SHIPPING_FEE_PERCENT).toFixed(2) : ''} $</td>
            </tr>
            <tr className="packagerow bg-white/40 dark:bg-slate-800/40 border border-white/30 dark:border-slate-700/40 rounded-xl shadow">
              <td className="align-middle text-lg font-bold text-center">العمولة</td>
              <td className="align-middle text-lg font-semibold text-center">{selected?.usd ? (((selected.usd + (selected.usd * SHIPPING_FEE_PERCENT)) * COMMISSION_FEE_PERCENT).toFixed(2)) : ''} $</td>
            </tr>
            <tr className="packagerow bg-white/40 dark:bg-slate-800/40 border border-white/30 dark:border-slate-700/40 rounded-xl shadow" style={{ backgroundColor: 'rgba(159, 193, 248, 0.13)' }}>
              <td className="align-middle text-lg font-bold text-center">اجمالي بنكك</td>
              {/* Always display from store, never recalculate here */}
              <td className="align-middle text-lg font-bold text-green-600 dark:text-green-400 text-center">{totalRenewalSDG ? totalRenewalSDG.toLocaleString() : ''} SDG ✔</td>
            </tr>
          </tbody>
        </table>
      )}
    </section>
  );
};

export default PackageBox;