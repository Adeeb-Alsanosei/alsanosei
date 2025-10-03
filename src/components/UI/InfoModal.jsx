import React from 'react';
import PropTypes from 'prop-types';

/**
 * InfoModal component displays important information in a glassmorphic modal dialog.
 * Responsive, RTL, bilingual (Arabic/English), accessible, minimalist.
 */
const InfoModal = ({
  title = '💡 معلومة مهمة / Important Info',
  bullets = [],
  onClose,
}) => {
  return (
    <div
      className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-2"
      role="dialog"
      aria-modal="true"
      tabIndex={-1}
      dir="rtl"
      style={{
        minHeight: '50vh',
        minWidth: '50vw',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        position: 'fixed',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 0,
        zIndex: 9999
      }}
    >
      <div className="infomodal backdrop-blur-2xl bg-white/40 dark:bg-slate-900/60 border border-white/40 dark:border-slate-700/40 rounded-3xl max-w-2xl w-full p-12 shadow-2xl text-right flex flex-col gap-10 min-h-[320px] justify-center items-center sm:p-16 md:p-20 lg:p-24 transition-all duration-300 animate-fade-in"
        style={{margin: 'auto', width: 'fit-content', minWidth: '320px', maxWidth: '96vw', height: 'fit-content', minHeight: '120px', maxHeight: '90vh', backdropFilter: 'blur(32px) saturate(200%)', WebkitBackdropFilter: 'blur(32px) saturate(200%)'}}
      >
        <h2 className="text-3xl font-extrabold mb-8 tracking-tight drop-shadow-sm">
          {title}
        </h2>
        <ul className="space-y-4 mb-8">
          {bullets.map((bullet, index) => {
            // Only show icon if bullet.text does not start with an emoji/icon
            const iconRegex = /^[\p{Emoji}\p{So}\p{Sk}\p{Sc}\p{P}\p{S}]/u;
            const hasIcon = iconRegex.test(bullet.text.trim());
            return (
              <li
                key={index}
                className={`text-base flex items-center gap-2 ${bullet.type === 'danger' ? 'text-red-500' : 'text-green-600'}`}
              >
                {!hasIcon && (
                  <span aria-label={bullet.type === 'danger' ? 'تحذير / Warning' : 'نجاح / Success'}>
                    {bullet.type === 'danger' ? '⚠️' : '✅'}
                  </span>
                )}
                <span>{bullet.text}</span>
              </li>
            );
          })}
        </ul>
        <button
          onClick={onClose}
          className="bg-white/30 dark:bg-slate-800/40 border border-[#38bdf8] dark:border-[#38bdf8] shadow-lg text-cyan-700 dark:text-cyan-200 px-8 py-3 font-semibold focus:outline-none focus:ring-2 focus:ring-cyan-300 text-lg transition-all duration-150 mt-4 mb-2 backdrop-blur-md hover:bg-white/50 hover:dark:bg-slate-800/60"
          style={{ borderRadius: '0.8rem'}}
          autoFocus
        >
          حسناً / OK
        </button>
      </div>
    </div>
  );
};

InfoModal.propTypes = {
  title: PropTypes.string,
  bullets: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      type: PropTypes.oneOf(['success', 'danger']).isRequired,
    })
  ),
  onClose: PropTypes.func.isRequired,
};

export default InfoModal;