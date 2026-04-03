import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { Language, translations } from '../i18n/translations';

interface ContactProps {
  currentLang: Language;
}

export default function Contact({ currentLang }: ContactProps) {
  const t = translations[currentLang].contact;

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">{t.title}</h2>
        
        {/* FORMA BEZ DODATNIH KOMPLIKACIJA */}
        <form 
          name="contact" 
          method="POST" 
          data-netlify="true" 
          className="space-y-4 bg-slate-50 p-6 rounded-xl border"
        >
          {/* OVO JE NAJBITNIJE ZA NETLIFY */}
          <input type="hidden" name="form-name" value="contact" />
          
          <div>
            <label className="block mb-1 text-sm font-medium">Ime</label>
            <input type="text" name="name" required className="w-full p-2 border rounded" />
          </div>
          
          <div>
            <label className="block mb-1 text-sm font-medium">Email</label>
            <input type="email" name="email" required className="w-full p-2 border rounded" />
          </div>
          
          <div>
            <label className="block mb-1 text-sm font-medium">Poruka</label>
            <textarea name="message" rows={4} required className="w-full p-2 border rounded"></textarea>
          </div>
          
          <button 
            type="submit" 
            className="w-full bg-blue-600 text-white py-3 rounded font-bold hover:bg-blue-700 transition-colors"
          >
            POŠALJI PORUKU
          </button>
        </form>

        {/* INFO PODACI ISPOD FORME */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div><p className="font-bold">Adresa</p><p>{t.address}</p></div>
          <div><p className="font-bold">Telefon</p><p>{t.phone}</p></div>
          <div><p className="font-bold">Email</p><p>{t.email}</p></div>
        </div>
      </div>
    </section>
  );
}
