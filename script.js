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
        document.getElementById('filterLabel').innerText = 'Sortieren nach:';
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
        document.getElementById('filterLabel').innerText = 'Sort by:';
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
        document.getElementById('filterLabel').innerText = 'מיין לפי:';
        document.getElementById('footerText').innerText = '© 2024 טביעת רגל פחמנית. כל הזכויות שמורות. הודעות משפטיות ומדיניות פרטיות';
        document.body.classList.add('rtl');
    }
}

// Menü umschalten
function toggleMenu() {
    const menu = document.getElementById('localMenu');
    menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
}

// Such- und Filterfunktion für die Tabelle
function filterTable() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const filterType = document.getElementById('filterSelect').value;
    const rows = Array.from(document.querySelectorAll('#emissionsTable tbody tr'));

    // Suchfunktion
    rows.forEach(row => {
        const country = row.cells[0].innerText.toLowerCase();
        const company = row.cells[1].innerText.toLowerCase();
        if (country.includes(searchTerm) || company.includes(searchTerm)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });

    // Sortierfunktion
    if (filterType === 'az') {
        rows.sort((a, b) => a.cells[0].innerText.localeCompare(b.cells[0].innerText));
    } else if (filterType === 'za') {
        rows.sort((a, b) => b.cells[0].innerText.localeCompare(a.cells[0].innerText));
    } else if (filterType ===
