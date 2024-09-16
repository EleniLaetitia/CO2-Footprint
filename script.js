// Funktion zum Umschalten des Menüs
function toggleMenu() {
    const menu = document.getElementById('localMenu');
    if (menu.style.display === 'none') {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
}

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
            footerText: '© 2024 CO2-Footprint. Alle Rechte vorbehalten. Impressum und Datenschutz',
            countryHeader: 'Land',
            companyHeader: 'Unternehmen',
            emissionHeader: 'CO2-Ausstoß (in Tonnen)',
            germany: 'Deutschland',
            brazil: 'Brasilien',
            filterAz: 'Alphabetisch A-Z',
            filterZa: 'Alphabetisch Z-A',
            filterMax: 'Größter Ausstoß',
            filterMin: 'Kleinster Ausstoß'
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
            footerText: '© 2024 CO2-Footprint. All rights reserved. Legal Notice and Privacy Policy',
            countryHeader: 'Country',
            companyHeader: 'Company',
            emissionHeader: 'CO2 Emissions (in tons)',
            germany: 'Germany',
            brazil: 'Brazil',
            filterAz: 'Alphabetical A-Z',
            filterZa: 'Alphabetical Z-A',
            filterMax: 'Highest Emissions',
            filterMin: 'Lowest Emissions'
        },
        he: {
            title: 'טביעת רגל פחמנית',
            welcomeText: 'ברוכים הבאים לאתר טביעת הרגל הפחמנית שלנו. אתר זה נועד להוביל לשקיפות רבה יותר.',
            homeLink: 'דף הבית',
            aboutLink: 'אודותינו',
            contactLink: 'צור קשר',
            co2Link: 'על פליטת פחמן דו חמצני',
            environmentLink: 'סביבה',
            researchLink: 'מחקר',
            tableTitle: 'פליטת פחמן דו חמצני',
            filterLabel: 'מיין לפי:',
            footerText: '© 2024 טביעת רגל פחמנית. כל הזכויות שמורות. הצהרת פרטיות ותנאי שימוש',
            countryHeader: 'מדינה',
            companyHeader: 'חברה',
            emissionHeader: 'פליטת פחמן דו חמצני (בטון)',
            germany: 'גרמניה',
            brazil: 'ברזיל',
            filterAz: 'אלפביתי א-ת',
            filterZa: 'אלפביתי ת-א',
            filterMax: 'הפליטה הגבוהה ביותר',
            filterMin: 'הפליטה הנמוכה ביותר'
        }
    };

    // Anwendung der Übersetzungen
    const translation = translations[lang];
    document.getElementById('title').textContent = translation.title;
    document.getElementById('welcomeText').textContent = translation.welcomeText;
    document.getElementById('homeLink').textContent = translation.homeLink;
    document.getElementById('aboutLink').textContent = translation.aboutLink;
    document.getElementById('contactLink').textContent = translation.contactLink;
    document.getElementById('co2Link').textContent = translation.co2Link;
    document.getElementById('environmentLink').textContent = translation.environmentLink;
    document.getElementById('researchLink').textContent = translation.researchLink;
    document.getElementById('tableTitle').textContent = translation.tableTitle;
    document.getElementById('filterLabel').textContent = translation.filterLabel;
    document.getElementById('footerText').textContent = translation.footerText;
    document.getElementById('countryColumn').textContent = translation.countryHeader;
    document.getElementById('companyColumn').textContent = translation.companyHeader;
    document.getElementById('emissionColumn').textContent = translation.emissionHeader;

    const rows = document.querySelectorAll('#emissionsTable tbody tr');
    rows[0].querySelector('td').textContent = translation.germany;
    rows[2].querySelector('td').textContent = translation.brazil;

    const filterSelect = document.getElementById('filterSelect');
    filterSelect.options[0].textContent = translation.filterAz;
    filterSelect.options[1].textContent = translation.filterZa;
    filterSelect.options[2].textContent = translation.filterMax;
    filterSelect.options[3].textContent = translation.filterMin;

    // RTL-Unterstützung für Hebräisch
    if (lang === 'he') {
        document.body.classList.add('rtl');
    } else {
        document.body.classList.remove('rtl');
    }
}
