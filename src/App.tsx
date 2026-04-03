/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Language } from './i18n/translations';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('sr');

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-200 selection:text-blue-900">
      <Navbar currentLang={currentLang} setLanguage={setCurrentLang} />
      <main>
        <Hero currentLang={currentLang} />
        <Services currentLang={currentLang} />
        <About currentLang={currentLang} />
        <Contact currentLang={currentLang} />
      </main>
      <Footer currentLang={currentLang} />
    </div>
  );
}
