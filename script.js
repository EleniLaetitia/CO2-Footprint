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
            footerText: '&copy; 2024 CO2 Footprint. All rights reserved. <a href="#impressum">Imprint</a> and <a href="#datenschutz">Privacy Policy</a>',
            sidebarLinks: ['CO2 Information', 'Environment', 'Research']
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
            footerText: '&copy; 2024 טביעת רגל פחמנית. כל הזכויות שמורות. <a href="#impressum">הדפסת</a> ו-<a href="#datenschutz">מדיניות פרטיות</a>',
            sidebarLinks: ['מידע על CO2', 'סביבה', 'מחקר']
        }
    };

    // Übersetzungen anwenden
    document.title = translations[language].pageTitle;
    document.getElementById('header-title').textContent = translations[language].headerTitle;
    document.getElementById('language-label').textContent = translations[language].languageLabel;
    document.getElementById('nav-home').textContent = translations[language].navHome;
    document.getElementById('nav-about').textContent = translations[language].navAbout;
    document.getElementById('nav-contact').textContent = translations[language].navContact;
    document.getElementById('welcome').textContent = translations[language].welcome;
    document.getElementById('intro').textContent = translations[language].intro;
    document.getElementById('sort-country-asc').textContent = translations[language].sortCountryAsc;
    document.getElementById('sort-country-desc').textContent = translations[language].sortCountryDesc;
    document.getElementById('sort-company-asc').textContent = translations[language].sortCompanyAsc;
    document.getElementById('sort-company-desc').textContent = translations[language].sortCompanyDesc;
    document.getElementById('sort-co2-asc').textContent = translations[language].sortCo2Asc;
    document.getElementById('sort-co2-desc').textContent = translations[language].sortCo2Desc;
    document.getElementById('country-header').textContent = translations[language].countryHeader;
    document.getElementById('company-header').textContent = translations[language].companyHeader;
    document.getElementById('co2-header').textContent = translations[language].co2Header;
    document.getElementById('footer-text').innerHTML = translations[language].footerText;

    // Sidebar Menü Links
    const sidebarLinks = document.querySelectorAll('#sidebar a');
    sidebarLinks.forEach((link, index) => {
        link.textContent = translations[language].sidebarLinks[index];
    });

    // RTL für Hebräisch einstellen
    document.body.setAttribute('dir', language === 'he' ? 'rtl' : 'ltr');
}

// Event Listener für Sprachauswahl
document.getElementById('language').addEventListener('change', changeLanguage);

// Initiale Sprachumschaltung
changeLanguage();

// Funktion für die Such- und Filterfunktion
document.getElementById('search').addEventListener('input', function () {
    const searchTerm = this.value.toLowerCase();
    const rows = document.querySelectorAll('#data-table tbody tr');

    rows.forEach(row => {
        const cells = row.querySelectorAll('td');
        const matches = Array.from(cells).some(cell => cell.textContent.toLowerCase().includes(searchTerm));
        row.style.display = matches ? '' : 'none';
    });
});

document.getElementById('sort').addEventListener('change', function () {
    const sortValue = this.value;
    const table = document.getElementById('data-table');
    const rows = Array.from(table.querySelectorAll('tbody tr'));

    rows.sort((a, b) => {
        const cellA = a.querySelectorAll('td')[sortValue.includes('country') ? 0 : sortValue.includes('company') ? 1 : 2];
        const cellB = b.querySelectorAll('td')[sortValue.includes('country') ? 0 : sortValue.includes('company') ? 1 : 2];
        const aText = cellA.textContent.trim();
        const bText = cellB.textContent.trim();
        
        if (sortValue.includes('asc')) {
            return aText.localeCompare(bText);
        } else {
            return bText.localeCompare(aText);
        }
    });

    const tbody = table.querySelector('tbody');
    rows.forEach(row => tbody.appendChild(row));
});

// Sidebar Menü Toggle
document.getElementById('menu-toggle').addEventListener('click', function () {
    const sidebar = document.getElementById('sidebar');
    const isVisible = sidebar.style.display === 'block';
    sidebar.style.display = isVisible ? 'none' : 'block';
});
