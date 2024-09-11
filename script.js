// Funktion zur Sprachumschaltung
function changeLanguage() {
    const language = document.getElementById('language').value;

    // Textübersetzungen
    const translations = {
        de: {
            pageTitle: 'CO2-Footprint',
            headerTitle: 'CO2-Footprint',
            languageLabel: 'Sprache:',
            navHome: 'Startseite',
            navAbout: 'Über uns',
            navContact: 'Kontakt',
            welcome: 'Willkommen auf unserer CO2-Footprint Website.',
            intro: 'Hier können Sie sehen, welche Unternehmen und Länder jährlich wie viel CO2 emittieren. Unsere Arbeit soll für mehr Transparenz sorgen.',
            sortCountryAsc: 'Land A-Z',
            sortCountryDesc: 'Land Z-A',
            sortCompanyAsc: 'Unternehmen A-Z',
            sortCompanyDesc: 'Unternehmen Z-A',
            sortCo2Asc: 'CO2 Ausstoß Aufsteigend',
            sortCo2Desc: 'CO2 Ausstoß Absteigend',
            countryHeader: 'Land',
            companyHeader: 'Unternehmen',
            co2Header: 'CO2 Ausstoß (in Tonnen)',
            footerText: '&copy; 2024 CO2-Footprint. Alle Rechte vorbehalten. <a href="#impressum">Impressum</a> und <a href="#datenschutz">Datenschutz</a>',
            sidebarCo2: 'Infos über CO2',
            sidebarEnvironment: 'Umwelt',
            sidebarResearch: 'Forschung'
        },
        en: {
            pageTitle: 'CO2 Footprint',
            headerTitle: 'CO2 Footprint',
            languageLabel: 'Language:',
            navHome: 'Home',
            navAbout: 'About Us',
            navContact: 'Contact',
            welcome: 'Welcome to our CO2 Footprint Website.',
            intro: 'Here you can see how much CO2 companies and countries emit annually. Our work is aimed at increasing transparency.',
            sortCountryAsc: 'Country A-Z',
            sortCountryDesc: 'Country Z-A',
            sortCompanyAsc: 'Company A-Z',
            sortCompanyDesc: 'Company Z-A',
            sortCo2Asc: 'CO2 Emission Ascending',
            sortCo2Desc: 'CO2 Emission Descending',
            countryHeader: 'Country',
            companyHeader: 'Company',
            co2Header: 'CO2 Emission (in tons)',
            footerText: '&copy; 2024 CO2 Footprint. All rights reserved. <a href="#impressum">Impressum</a> and <a href="#datenschutz">Privacy Policy</a>',
            sidebarCo2: 'CO2 Information',
            sidebarEnvironment: 'Environment',
            sidebarResearch: 'Research'
        },
        he: {
            pageTitle: 'טביעת רגל פחמנית',
            headerTitle: 'טביעת רגל פחמנית',
            languageLabel: 'שפה:',
            navHome: 'דף הבית',
            navAbout: 'עלינו',
            navContact: 'צור קשר',
            welcome: 'ברוכים הבאים לאתר טביעת הרגל הפחמנית שלנו.',
            intro: 'כאן תוכלו לראות כמה פחמן דו חמצני פולטות חברות ומדינות בכל שנה. העבודה שלנו מכוונת לשקיפות מוגברת.',
            sortCountryAsc: 'מדינה א-ב',
            sortCountryDesc: 'מדינה ב-א',
            sortCompanyAsc: 'חברה א-ב',
            sortCompanyDesc: 'חברה ב-א',
            sortCo2Asc: 'פליטת CO2 עולים',
            sortCo2Desc: 'פליטת CO2 יורדים',
            countryHeader: 'מדינה',
            companyHeader: 'חברה',
            co2Header: 'פליטת CO2 (בטון)',
            footerText: '&copy; 2024 טביעת רגל פחמנית. כל הזכויות שמורות. <a href="#impressum">אימפרסום</a> ו-<a href="#datenschutz">מדיניות פרטיות</a>',
            sidebarCo2: 'מידע על CO2',
            sidebarEnvironment: 'סביבה',
            sidebarResearch: 'מחקר'
        }
    };

    const texts = translations[language] || translations.de; // Fallback to German

    document.getElementById('page-title').textContent = texts.pageTitle;
    document.getElementById('header-title').textContent = texts.headerTitle;
    document.getElementById('language-label').textContent = texts.languageLabel;
    document.getElementById('nav-home').textContent = texts.navHome;
    document.getElementById('nav-about').textContent = texts.navAbout;
    document.getElementById('nav-contact').textContent = texts.navContact;
    document.getElementById('welcome').textContent = texts.welcome;
    document.getElementById('intro').textContent = texts.intro;
    document.getElementById('sort-country-asc').textContent = texts.sortCountryAsc;
    document.getElementById('sort-country-desc').textContent = texts.sortCountryDesc;
    document.getElementById('sort-company-asc').textContent = texts.sortCompanyAsc;
    document.getElementById('sort-company-desc').textContent = texts.sortCompanyDesc;
    document.getElementById('sort-co2-asc').textContent = texts.sortCo2Asc;
    document.getElementById('sort-co2-desc').textContent = texts.sortCo2Desc;
    document.getElementById('country-header').textContent = texts.countryHeader;
    document.getElementById('company-header').textContent = texts.companyHeader;
    document.getElementById('co2-header').textContent = texts.co2Header;
    document.getElementById('footer-text').innerHTML = texts.footerText;

    // Sidebar links
    document.querySelector('#sidebar-menu a[href="#co2"]').textContent = texts.sidebarCo2;
    document.querySelector('#sidebar-menu a[href="#environment"]').textContent = texts.sidebarEnvironment;
    document.querySelector('#sidebar-menu a[href="#research"]').textContent = texts.sidebarResearch;

    // Layout für RTL-Sprachen
    document.body.style.direction = language === 'he' ? 'rtl' : 'ltr';
}

// Event-Listener für Sprachauswahl
document.getElementById('language').addEventListener('change', changeLanguage);

// Initiale Spracheinstellung
changeLanguage();
