// Sprache ändern
function changeLanguage() {
    const lang = document.getElementById('languageSelect').value;
    const localMenu = document.getElementById('localMenu');
    
    if (lang === 'de') {
        document.body.style.direction = 'ltr';  // Links-nach-rechts
        localMenu.style.right = 'auto';         // Menü auf der linken Seite
        localMenu.style.left = '0';             // Standard-Position
        
        document.getElementById('title').innerText = 'CO2-Footprint';
        document.getElementById('welcomeText').innerText = 'Willkommen auf unserer CO2-Footprint Website. Diese Seite soll zu mehr Transparenz führen.';
        document.getElementById('homeLink').innerText = 'Startseite';
        document.getElementById('aboutLink').innerText = 'Über uns';
        document.getElementById('contactLink').innerText = 'Kontakt';
        document.getElementById('co2Link').innerText = 'Über CO2';
        document.getElementById('environmentLink').innerText = 'Umwelt';
        document.getElementById('researchLink').innerText = 'Forschung';
        document.getElementById('tableTitle').innerText = 'CO2-Emissionen';
        document.getElementById('filterLabel').innerText = 'Filter nach:';
        document.getElementById('countryColumn').innerText = 'Land';
        document.getElementById('companyColumn').innerText = 'Unternehmen';
        document.getElementById('emissionColumn').innerText = 'CO2-Ausstoß (in Tonnen)';
        document.getElementById('footerText').innerText = '© 2024 CO2-Footprint. Alle Rechte vorbehalten. Impressum und Datenschutz';

        // Filteroptionen auf Deutsch
        document.getElementById('filterAll').innerText = 'Alle';
        document.getElementById('filterUS').innerText = 'USA';
        document.getElementById('filterDE').innerText = 'Deutschland';
        document.getElementById('filterBR').innerText = 'Brasilien';
        document.getElementById('filterBMW').innerText = 'BMW';
        document.getElementById('filterPetronas').innerText = 'Petronas';
        document.getElementById('filterAmazon').innerText = 'Amazon';

        // Tabelle: Länder und Unternehmen auf Deutsch
        document.getElementById('de').innerText = 'Deutschland';
        document.getElementById('us').innerText = 'USA';
        document.getElementById('br').innerText = 'Brasilien';
        document.getElementById('bmw').innerText = 'BMW';
        document.getElementById('amazon').innerText = 'Amazon';
        document.getElementById('petronas').innerText = 'Petronas';
    } else if (lang === 'en') {
        document.body.style.direction = 'ltr';  // Links-nach-rechts
        localMenu.style.right = 'auto';         // Menü auf der linken Seite
        localMenu.style.left = '0';             // Standard-Position

        document.getElementById('title').innerText = 'CO2-Footprint';
        document.getElementById('welcomeText').innerText = 'Welcome to our CO2-Footprint website. This site aims to provide more transparency.';
        document.getElementById('homeLink').innerText = 'Home';
        document.getElementById('aboutLink').innerText = 'About Us';
        document.getElementById('contactLink').innerText = 'Contact';
        document.getElementById('co2Link').innerText = 'About CO2';
        document.getElementById('environmentLink').innerText = 'Environment';
        document.getElementById('researchLink').innerText = 'Research';
        document.getElementById('tableTitle').innerText = 'CO2 Emissions';
        document.getElementById('filterLabel').innerText = 'Filter by:';
        document.getElementById('countryColumn').innerText = 'Country';
        document.getElementById('companyColumn').innerText = 'Company';
        document.getElementById('emissionColumn').innerText = 'CO2 Emissions (in tons)';
        document.getElementById('footerText').innerText = '© 2024 CO2-Footprint. All rights reserved. Legal Notice and Privacy Policy';

        // Filteroptionen auf Englisch
        document.getElementById('filterAll').innerText = 'All';
        document.getElementById('filterUS').innerText = 'USA';
        document.getElementById('filterDE').innerText = 'Germany';
        document.getElementById('filterBR').innerText = 'Brazil';
        document.getElementById('filterBMW').innerText = 'BMW';
        document.getElementById('filterPetronas').innerText = 'Petronas';
        document.getElementById('filterAmazon').innerText = 'Amazon';

        // Tabelle: Länder und Unternehmen auf Englisch
        document.getElementById('de').innerText = 'Germany';
        document.getElementById('us').innerText = 'USA';
        document.getElementById('br').innerText = 'Brazil';
        document.getElementById('bmw').innerText = 'BMW';
        document.getElementById('amazon').innerText = 'Amazon';
        document.getElementById('petronas').innerText = 'Petronas';
    } else if (lang === 'he') {
        document.body.style.direction = 'rtl';  // Rechts-nach-links
        localMenu.style.left = 'auto';          // Menü auf der rechten Seite
        localMenu.style.right = '0';            // Standard-Position

        document.getElementById('title').innerText = 'מדד פחמן דו חמצני';
        document.getElementById('welcomeText').innerText = 'ברוכים הבאים לאתר מדד פחמן דו חמצני שלנו. אתר זה מטרתו לספק שקיפות רבה יותר.';
        document.getElementById('homeLink').innerText = 'דף הבית';
        document.getElementById('aboutLink').innerText = 'אודותינו';
        document.getElementById('contactLink').innerText = 'יצירת קשר';
        document.getElementById('co2Link').innerText = 'אודות CO2';
        document.getElementById('environmentLink').innerText = 'סביבה';
        document.getElementById('researchLink').innerText = 'מחקר';
        document.getElementById('tableTitle').innerText = 'פליטת CO2';
        document.getElementById('filterLabel').innerText = 'סנן לפי:';
        document.getElementById('countryColumn').innerText = 'מדינה';
        document.getElementById('companyColumn').innerText = 'חברה';
        document.getElementById('emissionColumn').innerText = 'פליטת CO2 (בטון)';
        document.getElementById('footerText').innerText = '© 2024 מדד פחמן דו חמצני. כל הזכויות שמורות. הערות חוקיות ומדיניות פרטיות';

        // Filteroptionen auf Hebräisch
        document.getElementById('filterAll').innerText = 'הכל';
        document.getElementById('filterUS').innerText = 'ארצות הברית';
        document.getElementById('filterDE').innerText = 'גרמניה';
        document.getElementById('filterBR').innerText = 'ברזיל';
        document.getElementById('filterBMW').innerText = 'BMW';
        document.getElementById('filterPetronas').innerText = 'פטרונס';
        document.getElementById('filterAmazon').innerText = 'אמזון';

        // Tabelle: Länder und Unternehmen auf Hebräisch
        document.getElementById('de').innerText = 'גרמניה';
        document.getElementById('us').innerText = 'ארצות הברית';
        document.getElementById('br').innerText = 'ברזיל';
        document.getElementById('bmw').innerText = 'BMW';
        document.getElementById('amazon').innerText = 'אמזון';
        document.getElementById('petronas').innerText = 'פטרונס';
    }
    filterTable(); // Tabelle nach Sprachwechsel filtern
}

// Filtert die Tabelle basierend auf dem ausgewählten Filter und der Suchzeile
function filterTable() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const filterValue = document.getElementById('filterSelect').value;
    const tableRows = document.querySelectorAll('#emissionsTable tbody tr');

    tableRows.forEach(row => {
        const country = row.querySelector('td[id]').innerText.toLowerCase();
        const company = row.querySelector('td[id]').innerText.toLowerCase();
        const emission = row.querySelector('td:last-child').innerText;

        const matchesSearch = country.includes(searchInput) || company.includes(searchInput);
        let matchesFilter = filterValue === 'all' || filterValue === country || filterValue === company;

        if (filterValue === 'all') {
            matchesFilter = true;
        } else if (filterValue === country || filterValue === company) {
            matchesFilter = true;
        } else {
            matchesFilter = false;
        }

        if (matchesSearch && matchesFilter) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}

// Menü ein- und ausblenden
function toggleMenu() {
    const menu = document.getElementById('localMenu');
    menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
}
