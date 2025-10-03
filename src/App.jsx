import React, { useState } from "react";
import PackageBox from "./components/UI/PackageBox";
import BrandBox from "./components/UI/BrandBox";
import InfoModal from "./components/UI/InfoModal";

export default function App() {
  // Modal state lifted to App
  const [modalData, setModalData] = useState(null);

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      {/* Video background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 w-full h-full object-cover z-0"
        style={{ pointerEvents: 'none' }}
      >
        <source src="/assets/videos/background.mp4" type="video/mp4" />
      </video>
      {/* Overlay for content to ensure readability */}
      <div className="relative z-10 min-h-screen w-full flex flex-col items-center justify-start">
        {/* Header at the very top */}
        <header className="w-full flex flex-col items-center pt-8 pb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-cyan-700 dark:text-cyan-300 tracking-tight mb-6 text-center drop-shadow" style={{ fontFamily: "'Playfair Display', Didot, serif" }}>
            Adeeb Alsanosei
          </h1>
          {/* Glassmorphic line below header, not full width */}
          <div className="glassmorphic-line px-8 py-2 rounded-full shadow bg-white/40 dark:bg-slate-800/40 border border-white/30 dark:border-slate-700/30 backdrop-blur-md text-base md:text-lg font-semibold text-cyan-800 dark:text-cyan-200 text-center" style={{marginTop: 0, marginBottom: '2.5rem', letterSpacing: '0.01em', width: 'fit-content', minWidth: '180px', maxWidth: '90vw'}}>
            خيارك الأفضل للتجديد 
          </div>
        </header>
        {/* Main content centered below header */}
        <div className="flex-1 flex items-center justify-center w-full">
          <div className="responsive-flex-row">
            <div className="responsive-flex-col">
              <PackageBox setModalData={setModalData} />
            </div>
            <div className="responsive-flex-col">
              <BrandBox />
            </div>
          </div>
        </div>
        {/* Footer */}
        <footer className="w-full flex flex-col items-center mt-12 mb-4">
          {/* Glassmorphic contact line */}
          <div className="glassmorphic-line px-8 py-2 rounded-full shadow bg-white/40 dark:bg-slate-800/40 border border-white/30 dark:border-slate-700/30 backdrop-blur-md text-base md:text-lg font-semibold font-bold text-cyan-800 dark:text-cyan-200 text-center" style={{width: 'fit-content', minWidth: '160px', maxWidth: '90vw', margin: '2.5rem auto 0 auto'}}>
            تواصل معنا
          </div>
          {/* WhatsApp and Email Icon Buttons */}
          <div className="flex items-center justify-center gap-6 mb-6 mt-0" style={{ marginBottom: '3rem' }}>
            <a
              href="https://wa.me/249121862232"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="تواصل عبر واتساب"
              className="flex items-center justify-center rounded-full bg-green-500 hover:bg-green-600 shadow-lg w-16 h-16 transition-all duration-150"
              style={{ minWidth: '64px', minHeight: '64px' }}
            >
              <img src="/assets/icons/whatsapp.svg" alt="واتساب" width="45" height="45" style={{display: 'block'}} />
            </a>
            <a
              href="mailto:adeeb.adam2000@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="تواصل عبر البريد الإلكتروني"
              className="flex items-center justify-center rounded-full bg-blue-500 hover:bg-blue-600 shadow-lg w-16 h-16 transition-all duration-150"
              style={{ minWidth: '64px', minHeight: '64px' }}
            >
              <img src="/assets/icons/email.svg" alt="البريد الإلكتروني" width="45" height="45" style={{display: 'block'}} />
            </a>
          </div>
        </footer>
        {/* InfoModal rendered at the root for global centering */}
        {modalData && (
          <InfoModal
            title={modalData.title}
            bullets={modalData.bullets}
            onClose={() => setModalData(null)}
          />
        )}
      </div>
    </div>
  );
}
