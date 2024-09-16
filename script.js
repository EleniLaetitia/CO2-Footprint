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
            brazil: 'Brasilien'
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
            brazil: 'Brazil'
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
            tableTitle: 'פליטות פחמן',
            filterLabel: 'מיין לפי:',
            footerText: '© 2024 טביעת רגל פחמנית. כל הזכויות שמורות. הודעות משפטיות ומדיניות פרטיות',
            countryHeader: 'מדינה',
            companyHeader: 'חברה',
            emissionHeader: 'פליטות פחמן (בטון)',
            germany: 'גרמניה',
            brazil: 'ברזיל'
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

    // Übersetzungen für Länderbezeichnungen
    const rows = document.querySelectorAll('#emissionsTable tbody tr');
    rows.forEach(row => {
        const countryCell = row.cells[0];
        if (countryCell.textContent === 'Deutschland') {
            countryCell.textContent = trans.germany;
        } else if (countryCell.textContent === 'Brasilien') {
            countryCell.textContent = trans.brazil;
        }
    });

    if (lang === 'he') {
        document.body.classList.add('rtl');
    } else {
        document.body.classList.remove('rtl');
    }

    // Initiales Filtern der Tabelle anwenden
    filterTable();
}

// Funktion zum Filtern und Sortieren der Tabelle
function filterTable() {
    const filterValue = document.getElementById('filterSelect').value;
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const table = document.getElementById('emissionsTable');
    const rows = Array.from(table.querySelectorAll('tbody tr'));

    let filteredRows = rows;

    // Wenn es eine Suchanfrage gibt, filtern
    if (searchInput) {
        filteredRows = rows.filter(row => {
            const country = row.cells[0].textContent.toLowerCase();
            const company = row.cells[1].textContent.toLowerCase();
            const emission = row.cells[2].textContent.replace('.', '').replace(',', ''); // Umwandeln der Emissionen in eine vergleichbare Form
            return country.includes(searchInput) || company.includes(searchInput) || emission.includes(searchInput);
        });
    }

    // Sortieren der gefilterten Zeilen basierend auf der Auswahl
    if (filterValue === 'az') {
        filteredRows.sort((a, b) => a.cells[0].textContent.localeCompare(b.cells[0].textContent));
    } else if (filterValue === 'za') {
        filteredRows.sort((a, b) => b.cells[0].textContent.localeCompare(a.cells[0].textContent));
    } else if (filterValue === 'max') {
        filteredRows.sort((a, b) => parseInt(b.getAttribute('data-emission')) - parseInt(a.getAttribute('data-emission')));
    } else if (filterValue === 'min') {
        filteredRows.sort((a, b) => parseInt(a.getAttribute('data-emission')) - parseInt(b.getAttribute('data-emission')));
    }

    const tbody = table.querySelector('tbody');
    tbody.innerHTML = ''; // Leeren des Tabellenkörpers
    filteredRows.forEach(row => tbody.appendChild(row)); // Hinzufügen der gefilterten Zeilen
}

// Event-Listener für Sprache und Filter
document.getElementById('languageSelect').addEventListener('change', changeLanguage);
document.getElementById('filterSelect').addEventListener('change', filterTable);
document.getElementById('searchInput').addEventListener('input', filterTable);

// Initiales Filtern und Übersetzen anwenden, wenn die Seite geladen wird
window.onload = function() {
    changeLanguage();
    filterTable();
};
