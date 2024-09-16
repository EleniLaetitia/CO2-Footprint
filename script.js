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
            tableTitle: 'פליטות CO2',
            filterLabel: 'מיון לפי:',
            footerText: '© 2024 טביעת רגל פחמנית. כל הזכויות שמורות. הודעה משפטית ומדיניות פרטיות',
            countryHeader: 'ארץ',
            companyHeader: 'חברה',
            emissionHeader: 'פליטות CO2 (בטונות)',
            germany: 'גרמניה',
            brazil: 'ברזיל'
        }
    };

    const selectedLang = translations[lang];

    document.getElementById('title').textContent = selectedLang.title;
    document.getElementById('welcomeText').textContent = selectedLang.welcomeText;
    document.getElementById('homeLink').textContent = selectedLang.homeLink;
    document.getElementById('aboutLink').textContent = selectedLang.aboutLink;
    document.getElementById('contactLink').textContent = selectedLang.contactLink;
    document.getElementById('co2Link').textContent = selectedLang.co2Link;
    document.getElementById('environmentLink').textContent = selectedLang.environmentLink;
    document.getElementById('researchLink').textContent = selectedLang.researchLink;
    document.getElementById('tableTitle').textContent = selectedLang.tableTitle;
    document.getElementById('filterLabel').textContent = selectedLang.filterLabel;
    document.getElementById('footerText').textContent = selectedLang.footerText;
    document.getElementById('countryColumn').textContent = selectedLang.countryHeader;
    document.getElementById('companyColumn').textContent = selectedLang.companyHeader;
    document.getElementById('emissionColumn').textContent = selectedLang.emissionHeader;

    // Handling RTL for Hebrew
    document.body.classList.toggle('rtl', lang === 'he');
}

// Funktion zum Filtern der Tabelle
function filterTable() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const filter = document.getElementById('filterSelect').value;
    const rows = document.querySelectorAll('#emissionsTable tbody tr');

    // Filter basierend auf der Suchleiste
    let filteredRows = Array.from(rows).filter(row => {
        const country = row.cells[0].textContent.toLowerCase();
        const company = row.cells[1].textContent.toLowerCase();
        return country.includes(searchInput) || company.includes(searchInput);
    });

    // Sortierung basierend auf dem Filter
    filteredRows.sort((a, b) => {
        const emissionA = parseInt(a.dataset.emission, 10);
        const emissionB = parseInt(b.dataset.emission, 10);

        if (filter === 'az') {
            return a.cells[0].textContent.localeCompare(b.cells[0].textContent);
        } else if (filter === 'za') {
            return b.cells[0].textContent.localeCompare(a.cells[0].textContent);
        } else if (filter === 'max') {
            return emissionB - emissionA;
        } else if (filter === 'min') {
            return emissionA - emissionB;
        }
    });

    // Tabelle zurücksetzen und neue Reihen hinzufügen
    const tbody = document.querySelector('#emissionsTable tbody');
    tbody.innerHTML = '';
    filteredRows.forEach(row => tbody.appendChild(row));
}
