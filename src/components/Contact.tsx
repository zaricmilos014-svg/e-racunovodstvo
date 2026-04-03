import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { Language, translations } from '../i18n/translations';

interface ContactProps {
  currentLang: Language;
}

export default function Contact({ currentLang }: ContactProps) {
  const t = translations[currentLang].contact;

  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{t.title}</h2>
          <p className="text-lg text-slate-600 mb-6">{t.subtitle}</p>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Info deo - ostaje isti */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex items-start space-x-4">
              <div className="bg-blue-50 p-3 rounded-lg text-blue-600 flex-shrink-0"><MapPin className="w-6 h-6" /></div>
              <div><h4 className="text-lg font-semibold text-slate-900 mb-1">Address</h4><p className="text-slate-600">{t.address}</p></div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex items-start space-x-4">
              <div className="bg-blue-50 p-3 rounded-lg text-blue-600 flex-shrink-0"><Phone className="w-6 h-6" /></div>
              <div><h4 className="text-lg font-semibold text-slate-900 mb-1">Phone</h4><p className="text-slate-600">{t.phone}</p></div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex items-start space-x-4">
              <div className="bg-blue-50 p-3 rounded-lg text-blue-600 flex-shrink-0"><Mail className="w-6 h-6" /></div>
              <div><h4 className="text-lg font-semibold text-slate-900 mb-1">Email</h4><p className="text-slate-600">{t.email}</p></div>
            </div>
          </div>

          {/* FORMA - Očišćena od JavaScripta koji koči */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-slate-100">
              <form 
                name="contact" 
                method="POST" 
                data-netlify="true" 
                className="space-y-6"
              >
                <input type="hidden" name="form-name" value="contact" />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">{t.form.name}</label>
                    <input type="text" name="name" required className="w-full px-4 py-3 rounded-lg border border-slate-200 outline-none" placeholder="Ime i prezime" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">{t.form.email}</label>
                    <input type="email" name="email" required className="w-full px-4 py-3 rounded-lg border border-slate-200 outline-none" placeholder="vass@email.com" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">{t.form.message}</label>
                  <textarea name="message" rows={5} required className="w-full px-4 py-3 rounded-lg border border-slate-200 outline-none resize-none" placeholder="Kako možemo da vam pomognemo?"></textarea>
                </div>
                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-4 rounded-lg transition-colors shadow-lg">
                  {t.form.submit}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
