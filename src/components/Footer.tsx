import React from 'react';
import { Language, translations } from '../i18n/translations';

interface FooterProps {
  currentLang: Language;
}

export default function Footer({ currentLang }: FooterProps) {
  const t = translations[currentLang].footer;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-2xl font-bold text-white tracking-tighter">DOSAM</span>
            <p className="text-sm mt-2">Biro za knjigovodstvene usluge</p>
          </div>
          <div className="text-sm text-center md:text-right">
            &copy; {currentYear} DOSAM. {t.rights}
          </div>
        </div>
      </div>
    </footer>
  );
}
