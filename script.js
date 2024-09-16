// Funktion zum Umschalten des Menüs
function toggleMenu() {
    const menu = document.getElementById('localMenu');
    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'flex';
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
            welcomeText: 'Welcome to our CO2-Footprint website. This site aims to promote transparency.',
            homeLink: 'Home',
            aboutLink: 'About Us',
            contactLink: 'Contact',
            co2Link: 'About CO2',
            environmentLink: 'Environment',
            researchLink: 'Research',
            tableTitle: 'CO2 Emissions',
            filterLabel: 'Sort by:',
            footerText: '© 2024 CO2-Footprint. All rights reserved. Imprint and Privacy Policy',
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
            welcomeText: 'ברוכים הבאים לאתר טביעת הרגל הפחמנית שלנו. אתר זה שואף לקדם שקיפות.',
            homeLink: 'דף הבית',
            aboutLink: 'אודותינו',
            contactLink: 'צור קשר',
            co2Link: 'על CO2',
            environmentLink: 'סביבה',
            researchLink: 'מחקר',
            tableTitle: 'פליטת CO2',
            filterLabel: 'מיין לפי:',
            footerText: '© 2024 טביעת רגל פחמנית. כל הזכויות שמורות. מדיניות פרטיות וטביעת רגל',
            countryHeader: 'מדינה',
            companyHeader: 'חברה',
            emissionHeader: 'פליטת CO2 (בטון)',
            germany: 'גרמניה',
            brazil: 'ברזיל',
            filterAz: 'א"ב א-ה',
            filterZa: 'א"ב ה-א',
            filterMax: 'פליטה הגבוהה ביותר',
            filterMin: 'פליטה הנמוכה ביותר'
        }
    };

    const trans = translations[lang];
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
    document.getElementById('footerText').innerText = trans.footerText;
    document.getElementById('countryColumn').innerText = trans.countryHeader;
    document.getElementById('companyColumn').innerText = trans.companyHeader;
    document.getElementById('emissionColumn').innerText = trans.emissionHeader;

    // Update Table Data
    document.querySelectorAll('#emissionsTable tbody tr').forEach(row => {
        const country = row.querySelector('td').innerText;
        row.querySelectorAll('td')[0].innerText = trans[country.toLowerCase()];
    });

    // Handle RTL for Hebrew
    if (lang === 'he') {
        document.body.classList.add('rtl');
    } else {
        document.body.classList.remove('rtl');
    }
}

// Funktion zum Filtern und Suchen der Tabelle
function filterTable() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const filterSelect = document.getElementById('filterSelect').value;
    const rows = Array.from(document.querySelectorAll('#emissionsTable tbody tr'));

    // Suchfunktion
    let filteredRows = rows.filter(row => {
        const text = row.innerText.toLowerCase();
        return text.includes(searchInput);
    });

    // Sortierung nach Filterauswahl
    filteredRows.sort((a, b) => {
        const aText = a.querySelector('td:nth-child(3)').innerText.replace(/,/g, '');
        const bText = b.querySelector('td:nth-child(3)').innerText.replace(/,/g, '');
        const aValue = parseInt(aText, 10);
        const bValue = parseInt(bText, 10);

        switch (filterSelect) {
            case 'az':
                return a.querySelector('td:first-child').innerText.localeCompare(b.querySelector('td:first-child').innerText);
            case 'za':
                return b.querySelector('td:first-child').innerText.localeCompare(a.querySelector('td:first-child').innerText);
            case 'min':
                return aValue - bValue;
            case 'max':
                return bValue - aValue;
            default:
                return 0;
        }
    });

    // Tabelle neu rendern
    const tbody = document.querySelector('#emissionsTable tbody');
    tbody.innerHTML = '';
    filteredRows.forEach(row => tbody.appendChild(row));

    // Bei leerer Sucheingabe, zeige die gesamte Tabelle
    if (searchInput === '') {
        tbody.innerHTML = rows.map(row => row.outerHTML).join('');
    }
}

// Initiales Laden der Seite
document.addEventListener('DOMContentLoaded', () => {
    // Setze das Menü auf "hidden" beim Laden der Seite
    document.getElementById('localMenu').style.display = 'none';

    // Füge Event-Listener für die Sprache und die Suche hinzu
    document.getElementById('searchInput').addEventListener('input', filterTable);
    document.getElementById('filterSelect').addEventListener('change', filterTable);
});
