// Funktion zum Umschalten des Menüs
function toggleMenu() {
    const menu = document.getElementById('localMenu');
    menu.style.display = menu.style.display === 'none' || menu.style.display === '' ? 'block' : 'none';
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
            legalText: 'Imprint and Privacy Policy',
            countryHeader: 'Country',
            companyHeader: 'Company',
            emissionHeader: 'CO2 Emissions (in tons)',
            germany: 'Germany',
            brazil: 'Brazil',
            usa: 'USA',
            az: 'Alphabetically A-Z',
            za: 'Alphabetically Z-A',
            max: 'Highest Emission',
            min: 'Lowest Emission'
        },
        he: {
            title: 'טביעת רגל פחמנית',
            welcomeText: 'ברוכים הבאים לאתר טביעת הרגל הפחמנית שלנו. אתר זה נועד לספק שקיפות רבה יותר.',
            homeLink: 'דף הבית',
            aboutLink: 'עלינו',
            contactLink: 'צור קשר',
            co2Link: 'על CO2',
            environmentLink: 'סביבה',
            researchLink: 'מחקר',
            tableTitle: 'פליטת CO2',
            filterLabel: 'מיין לפי:',
            footerText: '© 2024 טביעת רגל פחמנית. כל הזכויות שמורות.',
            legalText: 'הצהרה משפטית ומדיניות פרטיות',
            countryHeader: 'מדינה',
            companyHeader: 'חברה',
            emissionHeader: 'פליטת CO2 (בטונות)',
            germany: 'גרמניה',
            brazil: 'ברזיל',
            usa: 'ארצות הברית',
            az: 'מ-א ועד ת',
            za: 'מת עד א',
            max: 'הפליטה הגבוהה ביותר',
            min: 'הפליטה הנמוכה ביותר'
        }
    };

    // Anwendung der Übersetzungen
    const translate = translations[lang];
    document.getElementById('title').textContent = translate.title;
    document.getElementById('welcomeText').textContent = translate.welcomeText;
    document.getElementById('homeLink').textContent = translate.homeLink;
    document.getElementById('aboutLink').textContent = translate.aboutLink;
    document.getElementById('contactLink').textContent = translate.contactLink;
    document.getElementById('co2Link').textContent = translate.co2Link;
    document.getElementById('environmentLink').textContent = translate.environmentLink;
    document.getElementById('researchLink').textContent = translate.researchLink;
    document.getElementById('tableTitle').textContent = translate.tableTitle;
    document.getElementById('filterLabel').textContent = translate.filterLabel;
    document.getElementById('footerText').textContent = translate.footerText;
    document.getElementById('legalText').textContent = translate.legalText;

    // Tabellen-Header
    document.getElementById('countryColumn').textContent = translate.countryHeader;
    document.getElementById('companyColumn').textContent = translate.companyHeader;
    document.getElementById('emissionColumn').textContent = translate.emissionHeader;

    // Tabelleneinträge
    const rows = document.querySelectorAll('#emissionsTable tbody tr');
    rows.forEach(row => {
        const countryCell = row.cells[0];
        const companyCell = row.cells[1];
        countryCell.textContent = translate[countryCell.dataset.translate];
        companyCell.textContent = translate[companyCell.dataset.translate];
    });

    // Anpassen der Leserichtung für Hebräisch
    if (lang === 'he') {
        document.body.setAttribute('dir', 'rtl');
    } else {
        document.body.setAttribute('dir', 'ltr');
    }
}

// Funktion zur Filterung und Suche in der Tabelle
function filterTable() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const filterValue = document.getElementById('filterSelect').value;
    const table = document.getElementById('emissionsTable');
    const rows = table.querySelectorAll('tbody tr');

    // Filterung und Sortierung der Tabelleneinträge
    rows.forEach(row => {
        const country = row.cells[0].textContent.toLowerCase();
        const company = row.cells[1].textContent.toLowerCase();
        const emission = parseInt(row.cells[2].textContent.replace(/,/g, ''));

        const isVisible = 
            (country.includes(searchInput) || company.includes(searchInput)) &&
            (filterValue === 'none' || filterValue === 'asc' && emission > 0 || filterValue === 'desc' && emission < Infinity);

        row.style.display = isVisible ? '' : 'none';
    });
}

// Event-Listener für Filter und Sprache
document.getElementById('searchInput').addEventListener('input', filterTable);
document.getElementById('filterSelect').addEventListener('change', filterTable);
document.getElementById('languageSelect').addEventListener('change', changeLanguage);

// Initiale Filter-Tabelle anzeigen
filterTable();
