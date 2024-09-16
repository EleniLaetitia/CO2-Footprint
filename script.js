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
            title: 'CO2 Footprint',
            welcomeText: 'Welcome to our CO2 Footprint website. This page aims to provide more transparency.',
            homeLink: 'Home',
            aboutLink: 'About Us',
            contactLink: 'Contact',
            co2Link: 'About CO2',
            environmentLink: 'Environment',
            researchLink: 'Research',
            tableTitle: 'CO2 Emissions',
            filterLabel: 'Sort by:',
            footerText: '© 2024 CO2 Footprint. All rights reserved. Imprint and Privacy Policy',
            countryHeader: 'Country',
            companyHeader: 'Company',
            emissionHeader: 'CO2 Emissions (in tons)',
            germany: 'Germany',
            brazil: 'Brazil',
            filterAz: 'Alphabetical A-Z',
            filterZa: 'Alphabetical Z-A',
            filterMax: 'Highest Emission',
            filterMin: 'Lowest Emission'
        },
        he: {
            title: 'טביעת רגל פחמנית',
            welcomeText: 'ברוכים הבאים לאתר טביעת רגל פחמנית שלנו. דף זה נועד לספק שקיפות רבה יותר.',
            homeLink: 'בית',
            aboutLink: 'עלינו',
            contactLink: 'צור קשר',
            co2Link: 'על CO2',
            environmentLink: 'סביבה',
            researchLink: 'מחקר',
            tableTitle: 'פליטות CO2',
            filterLabel: 'מיין לפי:',
            footerText: '© 2024 טביעת רגל פחמנית. כל הזכויות שמורות. חותמת פרטיות',
            countryHeader: 'מדינה',
            companyHeader: 'חברה',
            emissionHeader: 'פליטות CO2 (בטון)',
            germany: 'גרמניה',
            brazil: 'ברזיל',
            filterAz: 'אלפביתי א-ב',
            filterZa: 'אלפביתי ב-א',
            filterMax: 'פליטה גבוהה ביותר',
            filterMin: 'פליטה נמוכה ביותר'
        }
    };

    const trans = translations[lang] || translations.de;

    document.getElementById('title').innerText = trans.title;
    document.getElementById('welcomeText').innerText = trans.welcomeText;
    document.getElementById('homeLink').innerText = trans.homeLink;
    document.getElementById('aboutLink').innerText = trans.aboutLink;
    document.getElementById('contactLink').innerText = trans.contactLink;
    document.getElementById('co2Link').innerText = trans.co2Link;
    document.getElementById('environmentLink').innerText = trans.environmentLink;
    document.getElementById('researchLink').innerText = trans.researchLink;
    document.getElementById('tableTitle').innerText = trans.tableTitle;
    document.getElementById('filterLabel').innerText = trans.filterLabel;
    document.getElementById('footerText').innerHTML = trans.footerText;
    document.getElementById('countryColumn').innerText = trans.countryHeader;
    document.getElementById('companyColumn').innerText = trans.companyHeader;
    document.getElementById('emissionColumn').innerText = trans.emissionHeader;

    // Übersetzungen für Länder
    const rows = document.querySelectorAll('#emissionsTable tbody tr');
    rows.forEach(row => {
        const countryCell = row.children[0];
        const country = countryCell.innerText.trim();
        if (country === 'Deutschland') {
            countryCell.innerText = trans.germany;
        } else if (country === 'Brasilien') {
            countryCell.innerText = trans.brazil;
        }
    });

    // Filter-Optionen aktualisieren
    const filterSelect = document.getElementById('filterSelect');
    filterSelect.querySelector('option[value="az"]').innerText = trans.filterAz;
    filterSelect.querySelector('option[value="za"]').innerText = trans.filterZa;
    filterSelect.querySelector('option[value="max"]').innerText = trans.filterMax;
    filterSelect.querySelector('option[value="min"]').innerText = trans.filterMin;

    // Layout für RTL
    if (lang === 'he') {
        document.body.classList.add('rtl');
    } else {
        document.body.classList.remove('rtl');
    }
}

// Funktion zum Filtern der Tabelle
function filterTable() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const filterSelect = document.getElementById('filterSelect').value;
    const table = document.getElementById('emissionsTable');
    const rows = table.querySelectorAll('tbody tr');

    let filteredRows = Array.from(rows);

    // Filtern nach Suchbegriff
    filteredRows = filteredRows.filter(row => {
        const cells = row.querySelectorAll('td');
        return Array.from(cells).some(cell => cell.textContent.toLowerCase().includes(searchInput));
    });

    // Sortieren nach Filterauswahl
    switch (filterSelect) {
        case 'az':
            filteredRows.sort((a, b) => a.cells[0].innerText.localeCompare(b.cells[0].innerText));
            break;
        case 'za':
            filteredRows.sort((a, b) => b.cells[0].innerText.localeCompare(a.cells[0].innerText));
            break;
        case 'max':
            filteredRows.sort((a, b) => parseInt(b.cells[2].innerText.replace('.', '').replace(',', '')) - parseInt(a.cells[2].innerText.replace('.', '').replace(',', '')));
            break;
        case 'min':
            filteredRows.sort((a, b) => parseInt(a.cells[2].innerText.replace('.', '').replace(',', '')) - parseInt(b.cells[2].innerText.replace('.', '').replace(',', '')));
            break;
    }

    // Tabelle aktualisieren
    const tbody = table.querySelector('tbody');
    tbody.innerHTML = '';
    filteredRows.forEach(row => tbody.appendChild(row));
}
