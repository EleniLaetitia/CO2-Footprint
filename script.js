// Funktion zum Wechseln der Sprache
function changeLanguage() {
    const lang = document.getElementById('languageSelect').value;

    // Übersetzungen für verschiedene Sprachen
    const translations = {
        de: {
            title: 'CO2-Footprint',
            welcomeText: 'Willkommen auf unserer CO2-Footprint Website. Diese Seite soll zu mehr Transparenz führen.',
            homeLink: 'Startseite',
            aboutLink: 'Über uns',
            contactLink: 'Kontakt',
            co2Link: 'Über CO2',
            environmentLink: 'Umwelt',
            researchLink: 'Forschung',
            tableTitle: 'CO2-Emissionen',
            filterLabel: 'Sortieren nach:',
            footerText: '© 2024 CO2-Footprint. Alle Rechte vorbehalten.',
            legalText: 'Impressum und Datenschutz',
            countryHeader: 'Land',
            companyHeader: 'Unternehmen',
            emissionHeader: 'CO2-Ausstoß (in Tonnen)',
            germany: 'Deutschland',
            brazil: 'Brasilien',
            usa: 'USA',
            az: 'Alphabetisch A-Z',
            za: 'Alphabetisch Z-A',
            max: 'Größter Ausstoß',
            min: 'Kleinster Ausstoß'
        },
        en: {
            title: 'CO2-Footprint',
            welcomeText: 'Welcome to our CO2-Footprint website. This site aims to provide more transparency.',
            homeLink: 'Home',
            aboutLink: 'About Us',
            contactLink: 'Contact',
            co2Link: 'About CO2',
            environmentLink: 'Environment',
            researchLink: 'Research',
            tableTitle: 'CO2 Emissions',
            filterLabel: 'Sort by:',
            footerText: '© 2024 CO2-Footprint. All rights reserved.',
            legalText: 'Legal Notice and Privacy Policy',
            countryHeader: 'Country',
            companyHeader: 'Company',
            emissionHeader: 'CO2 Emissions (in tons)',
            germany: 'Germany',
            brazil: 'Brazil',
            usa: 'USA',
            az: 'Alphabetical A-Z',
            za: 'Alphabetical Z-A',
            max: 'Highest Emission',
            min: 'Lowest Emission'
        },
        he: {
            title: 'טביעת רגל פחמנית',
            welcomeText: 'ברוכים הבאים לאתר טביעת רגל פחמנית שלנו. אתר זה נועד להגביר את השקיפות.',
            homeLink: 'בית',
            aboutLink: 'עלינו',
            contactLink: 'צור קשר',
            co2Link: 'על CO2',
            environmentLink: 'סביבה',
            researchLink: 'מחקר',
            tableTitle: 'פליטות CO2',
            filterLabel: 'מיון לפי:',
            footerText: '© 2024 טביעת רגל פחמנית. כל הזכויות שמורות.',
            legalText: 'הודעה משפטית ומדיניות פרטיות',
            countryHeader: 'ארץ',
            companyHeader: 'חברה',
            emissionHeader: 'פליטות CO2 (בטונות)',
            germany: 'גרמניה',
            brazil: 'ברזיל',
            usa: 'ארצות הברית',
            az: 'אלפביתי א–ב',
            za: 'אלפביתי ב–א',
            max: 'הפליטה הגדולה ביותר',
            min: 'הפליטה הקטנה ביותר'
        }
    };

    const selectedLang = translations[lang];

    document.getElementById('title').textContent = selectedLang.title;
    document.getElementById('welcomeText').textContent = selectedLang.welcomeText;
    document.getElementById('homeLink').textContent = selectedLang.homeLink;
    document.getElementById('aboutLink').textContent = selectedLang.aboutLink;
    document.getElementById('contactLink').textContent = selectedLang.contactLink;
    document.getElementById('co2Link').textContent = selectedLang.co2Link;
    document.getElementById('environmentLink').textContent = selectedLang.environmentLink;
    document.getElementById('researchLink').textContent = selectedLang.researchLink;
    document.getElementById('tableTitle').textContent = selectedLang.tableTitle;
    document.getElementById('filterLabel').textContent = selectedLang.filterLabel;
    document.getElementById('footerText').textContent = selectedLang.footerText;
    document.getElementById('legalText').textContent = selectedLang.legalText;
    document.getElementById('countryColumn').textContent = selectedLang.countryHeader;
    document.getElementById('companyColumn').textContent = selectedLang.companyHeader;
    document.getElementById('emissionColumn').textContent = selectedLang.emissionHeader;

    // Übersetzung der Länderdaten in der Tabelle
    document.querySelectorAll('#emissionsTable td[data-translate]').forEach(cell => {
        cell.textContent = selectedLang[cell.getAttribute('data-translate')];
    });

    // Übersetzung der Filteroptionen
    document.querySelectorAll('#filterSelect option').forEach(option => {
        option.textContent = selectedLang[option.value];
    });

    // Handling RTL für Hebräisch
    if (lang === 'he') {
        document.body.style.direction = 'rtl';
        document.body.style.textAlign = 'right';
        document.querySelectorAll('header, main, footer').forEach(el => {
            el.style.textAlign = 'right';
        });
    } else {
        document.body.style.direction = 'ltr';
        document.body.style.textAlign = 'left';
        document.querySelectorAll('header, main, footer').forEach(el => {
            el.style.textAlign = 'left';
        });
    }
}
