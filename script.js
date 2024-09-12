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

    const selectedTranslation = translations[language];

    document.title = selectedTranslation.pageTitle;
    document.getElementById('header-title').innerText = selectedTranslation.headerTitle;
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

    document.getElementById('sidebar-info').innerText = selectedTranslation.sidebarLinks[0];
    document.getElementById('sidebar-environment').innerText = selectedTranslation.sidebarLinks[1];
    document.getElementById('sidebar-research').innerText = selectedTranslation.sidebarLinks[2];

    // Sprachrichtung für Hebräisch
    if (language === 'he') {
        document.body.setAttribute('dir', 'rtl');
    } else {
        document.body.removeAttribute('dir');
    }
}

document.getElementById('language').addEventListener('change', changeLanguage);

// Menü öffnen und schließen
document.getElementById('menu-toggle').addEventListener('click', function () {
    document.getElementById('sidebar').classList.toggle('open');
});

// Such- und Filterfunktion
const table = document.getElementById('data-table').getElementsByTagName('tbody')[0];
const searchInput = document.getElementById('search');
const sortSelect = document.getElementById('sort');

// Suche
searchInput.addEventListener('input', function () {
    const searchTerm = searchInput.value.toLowerCase();
    for (let row of table.rows) {
        const country = row.cells[0].textContent.toLowerCase();
        const company = row.cells[1].textContent.toLowerCase();
        row.style.display = (country.includes(searchTerm) || company.includes(searchTerm)) ? '' : 'none';
    }
});

// Sortieren
sortSelect.addEventListener('change', function () {
    const rowsArray = Array.from(table.rows);
    const sortValue = sortSelect.value;
    let columnIndex, order;

    if (sortValue.includes('country')) {
        columnIndex = 0;
    } else if (sortValue.includes('company')) {
        columnIndex = 1;
    } else {
        columnIndex = 2;
    }

    order = sortValue.includes('asc') ? 1 : -1;

    rowsArray.sort(function (rowA, rowB) {
        const cellA = rowA.cells[columnIndex].textContent;
        const cellB = rowB.cells[columnIndex].textContent;

        if (columnIndex === 2) {
            return (parseInt(cellA) - parseInt(cellB)) * order;
        }

        return cellA.localeCompare(cellB) * order;
    });

    rowsArray.forEach(function (row) {
        table.appendChild(row);
    });
});
