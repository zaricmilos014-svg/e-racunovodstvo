import React from 'react';
import { Language, translations } from '../i18n/translations';

interface HeroProps {
  currentLang: Language;
}

export default function Hero({ currentLang }: HeroProps) {
  const t = translations[currentLang].hero;

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2071&auto=format&fit=crop" 
          alt="Accounting Desk" 
          className="w-full h-full object-cover opacity-50"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-slate-900/40" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Text */}
          <div className="text-left">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-white/60"></div>
              <span className="text-white/80 text-sm font-medium tracking-wide uppercase">
                {t.tagline}
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6">
              {t.title}
            </h1>
            <p className="text-lg text-slate-300 max-w-lg leading-relaxed">
              {t.subtitle}
            </p>
          </div>

          {/* Right Column - Form (POPRAVLJENA) */}
          <div className="lg:ml-auto w-full max-w-md">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-xl shadow-2xl">
              <form 
                name="contact" 
                method="POST" 
                data-netlify="true" 
                className="space-y-5"
              >
                {/* Netlify identifikacija */}
                <input type="hidden" name="form-name" value="contact" />
                
                <div>
                  <div className="flex items-center border-b border-white/30 py-2">
                    <span className="text-white/60 mr-3">👤</span>
                    <input
                      type="text"
                      name="name"
                      required
                      className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none placeholder-white/60"
                      placeholder={t.form.name}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center border-b border-white/30 py-2">
                    <span className="text-white/60 mr-3">✉️</span>
                    <input
                      type="email"
                      name="email"
                      required
                      className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none placeholder-white/60"
                      placeholder={t.form.email}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-start border-b border-white/30 py-2">
                    <textarea
                      name="message"
                      rows={3}
                      required
                      className="appearance-none bg-transparent border-none w-full text-white py-1 px-2 leading-tight focus:outline-none placeholder-white/60 resize-none"
                      placeholder={t.form.message}
                    ></textarea>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#E5A95A] hover:bg-[#d49849] text-slate-900 font-semibold py-4 px-8 rounded transition-colors duration-200 mt-4"
                >
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
