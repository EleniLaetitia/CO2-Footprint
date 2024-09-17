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
    } else if (lang === 'en') {
        document.body.style.direction = 'ltr';  // Links-nach-rechts
        localMenu.style.right = 'auto';         // Menü auf der linken Seite
        localMenu.style.left = '0';             // Standard-Position
        
        document.getElementById('title').innerText = 'CO2 Footprint';
        document.getElementById('welcomeText').innerText = 'Welcome to our CO2 Footprint website. This page aims to provide more transparency.';
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
        document.getElementById('footerText').innerText = '© 2024 CO2 Footprint. All rights reserved. Imprint and Privacy Policy';

        // Filteroptionen auf Englisch
        document.getElementById('filterAll').innerText = 'All';
        document.getElementById('filterUS').innerText = 'USA';
        document.getElementById('filterDE').innerText = 'Germany';
        document.getElementById('filterBR').innerText = 'Brazil';
        document.getElementById('filterBMW').innerText = 'BMW';
        document.getElementById('filterPetronas').innerText = 'Petronas';
        document.getElementById('filterAmazon').innerText = 'Amazon';
    } else if (lang === 'he') {
        document.body.style.direction = 'rtl';  // Rechts-nach-links
        localMenu.style.left = 'auto';          // Menü auf der rechten Seite
        localMenu.style.right = '0';            // Standard-Position
        
        document.getElementById('title').innerText = 'כדור הארץ';
        document.getElementById('welcomeText').innerText = 'ברוכים הבאים לאתר CO2 Footprint שלנו. דף זה נועד לספק שקיפות רבה יותר.';
        document.getElementById('homeLink').innerText = 'דף הבית';
        document.getElementById('aboutLink').innerText = 'אודות';
        document.getElementById('contactLink').innerText = 'צור קשר';
        document.getElementById('co2Link').innerText = 'על CO2';
        document.getElementById('environmentLink').innerText = 'סביבה';
        document.getElementById('researchLink').innerText = 'מחקר';
        document.getElementById('tableTitle').innerText = 'פליטות CO2';
        document.getElementById('filterLabel').innerText = 'סנן לפי:';
        document.getElementById('countryColumn').innerText = 'מדינה';
        document.getElementById('companyColumn').innerText = 'חברה';
        document.getElementById('emissionColumn').innerText = 'פליטות CO2 (בטון)';
        document.getElementById('footerText').innerText = '© 2024 CO2 Footprint. כל הזכויות שמורות. מונחון פרטיות ותנאים';

        // Filteroptionen auf Hebräisch
        document.getElementById('filterAll').innerText = 'הכל';
        document.getElementById('filterUS').innerText = 'ארה"ב';
        document.getElementById('filterDE').innerText = 'גרמניה';
        document.getElementById('filterBR').innerText = 'ברזיל';
        document.getElementById('filterBMW').innerText = 'BMW';
        document.getElementById('filterPetronas').innerText = 'פטרונאס';
        document.getElementById('filterAmazon').innerText = 'אמזון';
    }
}

// Menü ein- und ausblenden
function toggleMenu() {
    const localMenu = document.getElementById('localMenu');
    localMenu.style.display = localMenu.style.display === 'block' ? 'none' : 'block';
}

// Filtert die Tabelle basierend auf den Benutzereingaben
function filterTable() {
    const filter = document.getElementById('filterSelect').value;
    const search = document.getElementById('searchInput').value.toLowerCase();
    const rows = document.querySelectorAll('#emissionsTable tbody tr');

    rows.forEach(row => {
        const country = row.querySelector('td:nth-child(1)').textContent.toLowerCase();
        const company = row.querySelector('td:nth-child(2)').textContent.toLowerCase();
        const emission = row.querySelector('td:nth-child(3)').textContent.toLowerCase();

        const matchesFilter = filter === 'all' || 
            (filter === 'us' && country === 'usa') ||
            (filter === 'de' && country === 'deutschland') ||
            (filter === 'br' && country === 'brasilien') ||
            (filter === 'bmw' && company === 'bmw') ||
            (filter === 'petronas' && company === 'petronas') ||
            (filter === 'amazon' && company === 'amazon');

        const matchesSearch = country.includes(search) || company.includes(search);

        row.style.display = matchesFilter && matchesSearch ? '' : 'none';
    });
}
