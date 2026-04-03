export type Language = 'en' | 'sr' | 'ru';

export const translations = {
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      about: 'About',
      contact: 'Contact',
    },
    hero: {
      tagline: 'Expert answers to all your business needs',
      title: 'Professional Accounting Services for Your Business',
      subtitle: 'DOSAM kancelarija za knjigovodstvene usluge provides reliable bookkeeping, tax consulting, and financial services.',
      form: {
        name: 'Your Name',
        email: 'Your Email',
        message: 'Message...',
        submit: 'Book an Appointment',
      }
    },
    services: {
      title: 'Our Services',
      items: [
        {
          title: 'Bookkeeping',
          description: 'Accurate and timely recording of financial transactions.',
        },
        {
          title: 'Tax Consulting',
          description: 'Strategic tax planning and compliance.',
        },
        {
          title: 'Payroll Services',
          description: 'Efficient payroll processing for your employees.',
        },
        {
          title: 'Financial Reporting',
          description: 'Clear insights into your business performance.',
        },
      ],
    },
    about: {
      title: 'About DOSAM',
      text: 'We are an accounting agency from Novi Beograd dedicated to providing support to all legal entities. With years of experience navigating tax and financial regulations, we ensure your business is fully compliant with the law. We understand the dynamics of business, which is why we are always available for consultations, providing you with reliable information and solutions when you need them.\n\nOur business is fully digitized, allowing us to provide top-notch support regardless of where your headquarters are located. We eliminate the need for physical delivery of documents and office visits, making your administration fast, efficient, and completely location-independent.',
      stats: [
        { label: 'Years Experience', value: '10+' },
        { label: 'Happy Clients', value: '150+' },
        { label: 'Financial Reports', value: '1000+' },
      ]
    },
    contact: {
      title: 'Contact Us',
      subtitle: 'Ready to streamline your accounting? Get in touch with us today.',
      address: 'Omladinskih brigada 43A, Novi Beograd, Belgrade',
      phone: '064/44-86-000',
      email: 'dosam14@gmail.com',
      form: {
        name: 'Your Name',
        email: 'Your Email',
        message: 'Your Message',
        submit: 'Send Message',
      }
    },
    footer: {
      rights: 'All rights reserved.',
    }
  },
  sr: {
    nav: {
      home: 'Početna',
      services: 'Usluge',
      about: 'O nama',
      contact: 'Kontakt',
    },
    hero: {
      tagline: 'Stručni odgovori na sve vaše poslovne potrebe',
      title: 'Profesionalne knjigovodstvene usluge za vaš biznis',
      subtitle: 'DOSAM kancelarija za knjigovodstvene usluge pruža pouzdano vođenje poslovnih knjiga, poresko savetovanje i finansijske usluge.',
      form: {
        name: 'Vaše ime',
        email: 'Vaš Email',
        message: 'Poruka...',
        submit: 'Zakažite sastanak',
      }
    },
    services: {
      title: 'Naše usluge',
      items: [
        {
          title: 'Vođenje poslovnih knjiga',
          description: 'Tačno i pravovremeno evidentiranje finansijskih transakcija.',
        },
        {
          title: 'Poresko savetovanje',
          description: 'Strateško planiranje poreza i usklađenost sa zakonima.',
        },
        {
          title: 'Obračun zarada',
          description: 'Efikasan obračun plata za vaše zaposlene.',
        },
        {
          title: 'Finansijsko izveštavanje',
          description: 'Jasni uvidi u poslovanje vaše kompanije.',
        },
      ],
    },
    about: {
      title: 'O nama',
      text: 'Mi smo računovodstvena agencija sa Novog Beograda posvećena pružanju podrške svim pravnim licima. Sa dugogodišnjim iskustvom u navigaciji kroz poreske i finansijske propise, osiguravamo potpunu usklađenost vašeg poslovanja sa zakonom. Razumemo dinamiku biznisa, zbog čega smo uvek dostupni za konsultacije, pružajući vam pouzdane informacije i rešenja onda kada su vam potrebna.\n\nNaše poslovanje je u potpunosti digitalizovano, što nam omogućava da pružamo vrhunsku podršku bez obzira na to gde se nalazi vaše sedište. Eliminišemo potrebu za fizičkom dostavom dokumentacije i dolaskom u kancelariju, čime vašu administraciju činimo brzom, efikasnom i potpuno nezavisnom od lokacije.',
      stats: [
        { label: 'Godina iskustva', value: '10+' },
        { label: 'Zadovoljnih klijenata', value: '150+' },
        { label: 'Finansijskih izveštaja', value: '1000+' },
      ]
    },
    contact: {
      title: 'Kontaktirajte nas',
      subtitle: 'Spremni ste da unapredite svoje računovodstvo? Stupite u kontakt sa nama danas.',
      address: 'Omladinskih brigada 43A, Novi Beograd, Beograd',
      phone: '064/44-86-000',
      email: 'dosam14@gmail.com',
      form: {
        name: 'Vaše ime',
        email: 'Vaš Email',
        message: 'Vaša poruka',
        submit: 'Pošalji poruku',
      }
    },
    footer: {
      rights: 'Sva prava zadržana.',
    }
  },
  ru: {
    nav: {
      home: 'Главная',
      services: 'Услуги',
      about: 'О нас',
      contact: 'Контакты',
    },
    hero: {
      tagline: 'Экспертные решения для всех ваших бизнес-потребностей',
      title: 'Профессиональные бухгалтерские услуги для вашего бизнеса',
      subtitle: 'DOSAM kancelarija za knjigovodstvene usluge предоставляет надежные бухгалтерские, налоговые и финансовые услуги.',
      form: {
        name: 'Ваше имя',
        email: 'Ваш Email',
        message: 'Сообщение...',
        submit: 'Записаться на прием',
      }
    },
    services: {
      title: 'Наши услуги',
      items: [
        {
          title: 'Бухгалтерский учет',
          description: 'Точный и своевременный учет финансовых операций.',
        },
        {
          title: 'Налоговое консультирование',
          description: 'Стратегическое налоговое планирование и соблюдение законодательства.',
        },
        {
          title: 'Расчет заработной платы',
          description: 'Эффективный расчет заработной платы для ваших сотрудников.',
        },
        {
          title: 'Финансовая отчетность',
          description: 'Четкое понимание эффективности вашего бизнеса.',
        },
      ],
    },
    about: {
      title: 'О компании DOSAM',
      text: 'Мы — бухгалтерское агентство из Нового Белграда, специализирующееся на оказании поддержки всем юридическим лицам. Обладая многолетним опытом работы с налоговыми и финансовыми правилами, мы обеспечиваем полное соответствие вашего бизнеса закону. Мы понимаем динамику бизнеса, поэтому всегда готовы к консультациям, предоставляя вам надежную информацию и решения тогда, когда они вам нужны.\n\nНаш бизнес полностью оцифрован, что позволяет нам предоставлять первоклассную поддержку независимо от того, где находится ваша штаб-квартира. Мы устраняем необходимость физической доставки документов и посещения офиса, делая ваше администрирование быстрым, эффективным и полностью независимым от местоположения.',
      stats: [
        { label: 'Лет опыта', value: '10+' },
        { label: 'Довольных клиентов', value: '150+' },
        { label: 'Финансовых отчетов', value: '1000+' },
      ]
    },
    contact: {
      title: 'Свяжитесь с нами',
      subtitle: 'Готовы оптимизировать свой бухгалтерский учет? Свяжитесь с нами сегодня.',
      address: 'Omladinskih brigada 43A, Novi Beograd, Белград',
      phone: '064/44-86-000',
      email: 'dosam14@gmail.com',
      form: {
        name: 'Ваше имя',
        email: 'Ваш Email',
        message: 'Ваше сообщение',
        submit: 'Отправить сообщение',
      }
    },
    footer: {
      rights: 'Все права защищены.',
    }
  }
};
