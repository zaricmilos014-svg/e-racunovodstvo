import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { Language, translations } from '../i18n/translations';

interface AboutProps {
  currentLang: Language;
}

export default function About({ currentLang }: AboutProps) {
  const t = translations[currentLang].about;

  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-100 rounded-3xl transform translate-x-4 translate-y-4 -z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
              alt="Team working" 
              className="rounded-3xl shadow-xl w-full object-cover h-[500px]"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden md:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  10+
                </div>
                <div>
                  <p className="font-semibold text-slate-900">{t.stats[0].label}</p>
                  <p className="text-sm text-slate-500">DOSAM kancelarija</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight">
              {t.title}
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed whitespace-pre-line">
              {t.text}
            </p>
            
            <div className="grid grid-cols-2 gap-8 mb-10">
              {t.stats.slice(1).map((stat, index) => (
                <div key={index}>
                  <p className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</p>
                  <p className="text-slate-600 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>

            <ul className="space-y-4">
              {[
                'Professional & Certified',
                'Timely Reporting',
                'Strict Confidentiality'
              ].map((item, index) => (
                <li key={index} className="flex items-center text-slate-700 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
