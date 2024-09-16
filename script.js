// Funktion zum Umschalten des Menüs
function toggleMenu() {
    const menu = document.getElementById('localMenu');
    if (menu.style.display === 'none' || menu.style.display === '') {
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
        const emission = parseInt(cells[2].textContent.replace('.', '').replace(',', ''), 10);
        const matchesSearch = country.includes(searchInput) || company.includes(searchInput);

        row.style.display = matchesSearch ? '' : 'none';
    });

    // Sortieren nach Auswahl
    if (filterValue === 'az') {
        sortTable(0, 'asc');
    } else if (filterValue === 'za') {
        sortTable(0, 'desc');
    } else if (filterValue === 'max') {
        sortTable(2, 'desc');
    } else if (filterValue === 'min') {
        sortTable(2, 'asc');
    }
}

// Funktion zum Sortieren der Tabelle
function sortTable(columnIndex, order) {
    const table = document.getElementById('emissionsTable');
    const rows = Array.from(table.querySelectorAll('tbody tr'));

    rows.sort((a, b) => {
        const aText = a.cells[columnIndex].textContent;
        const bText = b.cells[columnIndex].textContent;
        const aValue = columnIndex === 2 ? parseInt(aText.replace('.', '').replace(',', ''), 10) : aText;
        const bValue = columnIndex === 2 ? parseInt(bText.replace('.', '').replace(',', ''), 10) : bText;

        if (aValue < bValue) return order === 'asc' ? -1 : 1;
        if (aValue > bValue) return order === 'asc' ? 1 : -1;
        return 0;
    });

    const tbody = table.querySelector('tbody');
    rows.forEach(row => tbody.appendChild(row));
}
