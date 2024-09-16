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
            title: 'טביעת רגל CO2',
            welcomeText: 'ברוכים הבאים לאתר טביעת רגל CO2 שלנו. האתר הזה נועד לספק שקיפות רבה יותר.',
            homeLink: 'דף הבית',
            aboutLink: 'אודותינו',
            contactLink: 'צור קשר',
            co2Link: 'על CO2',
            environmentLink: 'סביבה',
            researchLink: 'מחקר',
            tableTitle: 'פליטות CO2',
            filterLabel: 'מיין לפי:',
            footerText: '© 2024 טביעת רגל CO2. כל הזכויות שמורות.',
            legalText: 'רשימה משפטית ומדיניות פרטיות',
            countryHeader: 'מדינה',
            companyHeader: 'חברה',
            emissionHeader: 'פליטות CO2 (בטון)',
            germany: 'גרמניה',
            brazil: 'ברזיל',
            usa: 'ארצות הברית',
            az: 'בסדר אלפביתי א-ת',
            za: 'בסדר אלפביתי ת-א',
            max: 'פליטה הגבוהה ביותר',
            min: 'הפליטה הנמוכה ביותר'
        }
    };

    const translation = translations[lang];

    // Übersetzungen anwenden
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
    document.getElementById('legalText').textContent = translation.legalText;
    document.getElementById('countryColumn').textContent = translation.countryHeader;
    document.getElementById('companyColumn').textContent = translation.companyHeader;
    document.getElementById('emissionColumn').textContent = translation.emissionHeader;

    // Tabelle anpassen
    document.querySelectorAll('[data-translate]').forEach(td => {
        td.textContent = translation[td.getAttribute('data-translate')];
    });

    // Layout anpassen für RTL
    document.body.dir = lang === 'he' ? 'rtl' : 'ltr';
}

// Funktion zum Filtern der Tabelle
function filterTable() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const filterValue = document.getElementById('filterSelect').value;
    const table = document.getElementById('emissionsTable');
    const rows = table.querySelectorAll('tbody tr');

    rows.forEach(row => {
        const cells = row.querySelectorAll('td');
        const country = cells[0].textContent.toLowerCase();
        const company = cells[1].textContent.toLowerCase();
        const emission = parseInt(cells[2].textContent.replace(/,/g, ''));

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
