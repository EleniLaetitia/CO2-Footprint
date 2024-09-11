// Funktion zur Sprachumschaltung
function changeLanguage() {
    const language = document.getElementById('language').value;

    const translations = {
        de: {
            pageTitle: 'CO2-Footprint',
            headerTitle: 'CO2-Footprint',
            languageLabel: 'Sprache:',
            navHome: 'Startseite',
            navAbout: 'Über uns',
            navContact: 'Kontakt',
            welcome: 'Willkommen auf unserer CO2-Footprint Website.',
            intro: 'Hier können Sie sehen, welche Unternehmen und Länder jährlich wie viel CO2 emittieren.',
            countryHeader: 'Land',
            companyHeader: 'Unternehmen',
            co2Header: 'CO2 Ausstoß (in Tonnen)',
            footerText: '&copy; 2024 CO2-Footprint. Alle Rechte vorbehalten. <a href="#impressum">Impressum</a> und <a href="#datenschutz">Datenschutz</a>',
            sidebarLinks: ['Infos über CO2', 'Umwelt', 'Forschung']
        },
        en: {
            pageTitle: 'CO2 Footprint',
            headerTitle: 'CO2 Footprint',
            languageLabel: 'Language:',
            navHome: 'Home',
            navAbout: 'About Us',
            navContact: 'Contact',
            welcome: 'Welcome to our CO2 Footprint Website.',
            intro: 'Here you can see how much CO2 companies and countries emit annually.',
            countryHeader: 'Country',
            companyHeader: 'Company',
            co2Header: 'CO2 Emission (in tons)',
            footerText: '&copy; 2024 CO2 Footprint. All rights reserved. <a href="#impressum">Impressum</a> and <a href="#datenschutz">Privacy</a>',
            sidebarLinks: ['CO2 Info', 'Environment', 'Research']
        },
        he: {
            pageTitle: 'טביעת רגל פחמנית',
            headerTitle: 'טביעת רגל פחמנית',
            languageLabel: 'שפה:',
            navHome: 'דף הבית',
            navAbout: 'עלינו',
            navContact: 'צור קשר',
            welcome: 'ברוכים הבאים לאתר טביעת רגל פחמנית.',
            intro: 'כאן תוכלו לראות כמה CO2 פולטות חברות ומדינות מדי שנה.',
            countryHeader: 'מדינה',
            companyHeader: 'חברה',
            co2Header: 'פליטת CO2 (בטונות)',
            footerText: '&copy; 2024 טביעת רגל פחמנית. כל הזכויות שמורות. <a href="#impressum">Impressum</a> ו<a href="#datenschutz">פרטיות</a>',
            sidebarLinks: ['מידע על CO2', 'סביבה', 'מחקר']
        }
    };

    // Wähle die richtige Übersetzung
    const selectedTranslation = translations[language];

    // Aktualisiere den Inhalt basierend auf der gewählten Sprache
    document.getElementById('page-title').innerText = selectedTranslation.pageTitle;
    document.getElementById('language-label').innerText = selectedTranslation.languageLabel;
    document.getElementById('nav-home').innerText = selectedTranslation.navHome;
    document.getElementById('nav-about').innerText = selectedTranslation.navAbout;
    document.getElementById('nav-contact').innerText = selectedTranslation.navContact;
    document.getElementById('welcome').innerText = selectedTranslation.welcome;
    document.getElementById('intro').innerText = selectedTranslation.intro;
    document.getElementById('country-header').innerText = selectedTranslation.countryHeader;
    document.getElementById('company-header').innerText = selectedTranslation.companyHeader;
    document.getElementById('co2-header').innerText = selectedTranslation.co2Header;
    document.getElementById('footer-text').innerHTML = selectedTranslation.footerText;

    // Aktualisiere die Sidebar-Links
    document.getElementById('sidebar-info').innerText = selectedTranslation.sidebarLinks[0];
    document.getElementById('sidebar-environment').innerText = selectedTranslation.sidebarLinks[1];
    document.getElementById('sidebar-research').innerText = selectedTranslation.sidebarLinks[2];

    // Setze die Lesereihenfolge für Hebräisch (RTL)
    if (language === 'he') {
        document.body.setAttribute('dir', 'rtl');
    } else {
        document.body.removeAttribute('dir');
    }
}

// Event Listener für Sprachumschaltung
document.getElementById('language').addEventListener('change', changeLanguage);

// Event Listener für das Menü-Icon
document.getElementById('menu-toggle').addEventListener('click', function () {
    const sidebar = document.getElementById('sidebar');
    sidebar.style.display = sidebar.style.display === 'block' ? 'none' : 'block';
});
