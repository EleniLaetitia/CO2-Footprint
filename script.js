// Sprache ändern
function changeLanguage() {
    const lang = document.getElementById('languageSelect').value;
    
    if (lang === 'de') {
        document.getElementById('title').innerText = 'CO2-Footprint';
        document.getElementById('welcomeText').innerText = 'Willkommen auf unserer CO2-Footprint Website. Diese Seite soll zu mehr Transparenz führen.';
        document.getElementById('homeLink').innerText = 'Startseite';
        document.getElementById('aboutLink').innerText = 'Über uns';
        document.getElementById('contactLink').innerText = 'Kontakt';
        document.getElementById('co2Link').innerText = 'Über CO2';
        document.getElementById('environmentLink').innerText = 'Umwelt';
        document.getElementById('researchLink').innerText = 'Forschung';
        document.getElementById('tableTitle').innerText = 'CO2-Emissionen';
        document.getElementById('filterLabel').innerText = 'Filter nach Land:';
        document.getElementById('countryColumn').innerText = 'Land';
        document.getElementById('companyColumn').innerText = 'Unternehmen';
        document.getElementById('emissionColumn').innerText = 'CO2-Ausstoß (in Tonnen)';
        document.getElementById('footerText').innerText = '© 2024 CO2-Footprint. Alle Rechte vorbehalten. Impressum und Datenschutz';
        document.body.classList.remove('rtl');
    } else if (lang === 'en') {
        document.getElementById('title').innerText = 'CO2-Footprint';
        document.getElementById('welcomeText').innerText = 'Welcome to our CO2-Footprint website. This site aims to provide more transparency.';
        document.getElementById('homeLink').innerText = 'Home';
        document.getElementById('aboutLink').innerText = 'About Us';
        document.getElementById('contactLink').innerText = 'Contact';
        document.getElementById('co2Link').innerText = 'About CO2';
        document.getElementById('environmentLink').innerText = 'Environment';
        document.getElementById('researchLink').innerText = 'Research';
        document.getElementById('tableTitle').innerText = 'CO2 Emissions';
        document.getElementById('filterLabel').innerText = 'Filter by Country:';
        document.getElementById('countryColumn').innerText = 'Country';
        document.getElementById('companyColumn').innerText = 'Company';
        document.getElementById('emissionColumn').innerText = 'CO2 Emissions (in tons)';
        document.getElementById('footerText').innerText = '© 2024 CO2-Footprint. All rights reserved. Legal Notice and Privacy Policy';
        document.body.classList.remove('rtl');
    } else if (lang === 'he') {
        document.getElementById('title').innerText = 'טביעת רגל פחמנית';
        document.getElementById('welcomeText').innerText = 'ברוכים הבאים לאתר טביעת רגל פחמנית שלנו. אתר זה נועד להגביר את השקיפות.';
        document.getElementById('homeLink').innerText = 'בית';
        document.getElementById('aboutLink').innerText = 'עלינו';
        document.getElementById('contactLink').innerText = 'צור קשר';
        document.getElementById('co2Link').innerText = 'על CO2';
        document.getElementById('environmentLink').innerText = 'סביבה';
        document.getElementById('researchLink').innerText = 'מחקר';
        document.getElementById('tableTitle').innerText = 'פליטות פחמן';
        document.getElementById('filterLabel').innerText = 'סינון לפי מדינה:';
        document.getElementById('countryColumn').innerText = 'מדינה';
        document.getElementById('companyColumn').innerText = 'חברה';
        document.getElementById('emissionColumn').innerText = 'פליטות CO2 (בטונות)';
        document.getElementById('footerText').innerText = '© 2024 טביעת רגל פחמנית. כל הזכויות שמורות. הודעות משפטיות ומדיניות פרטיות';
        document.body.classList.add('rtl');
    }
}

// Menü umschalten
function toggleMenu() {
    const menu = document.getElementById('localMenu');
    if (menu.style.display === 'none') {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
}

// Such- und Filterfunktion für die Tabelle
function filterTable() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const rows = document.querySelectorAll('#emissionsTable tbody tr');
    rows.forEach(row => {
        const country = row.cells[0].innerText.toLowerCase();
        const company = row.cells[1].innerText.toLowerCase();
        if (country.includes(searchTerm) || company.includes(searchTerm)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}

// Filterfunktion nach Land
function filterByCountry() {
    const selectedCountry = document.getElementById('filterSelect').value;
    const rows = document.querySelectorAll('#emissionsTable tbody tr');
    rows.forEach(row => {
        const countryCode = row.getAttribute('data-country');
        if (selectedCountry === 'all' || countryCode === selectedCountry) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}

// Tabelle nach Spalten sortieren
function sortTable(n) {
    const table = document.getElementById('emissionsTable');
    let rows = Array.from(table.rows).slice(1);
    let asc = true;

    rows.sort((row1, row2) => {
        const cell1 = row1.cells[n].innerText.toLowerCase();
        const cell2 = row2.cells[n].innerText.toLowerCase();
        return asc ? (cell1 > cell2 ? 1 : -1) : (cell1 < cell2 ? 1 : -1);
    });

    asc = !asc;

    rows.forEach(row => table.appendChild(row));
}
