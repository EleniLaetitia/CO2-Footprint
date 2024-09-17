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

        // Tabelle: Länder auf Deutsch
        document.getElementById('de').innerText = 'Deutschland';
        document.getElementById('us').innerText = 'USA';
        document.getElementById('br').innerText = 'Brasilien';
    } else if (lang === 'en') {
        document.body.style.direction = 'ltr';  // Links-nach-rechts
        localMenu.style.right = 'auto';         // Menü auf der linken Seite
        localMenu.style.left = '0';             // Standard-Position

        document.getElementById('title').innerText = 'CO2-Footprint';
        document.getElementById('welcomeText').innerText = 'Welcome to our CO2-Footprint website. This page aims to promote transparency.';
        document.getElementById('homeLink').innerText = 'Home';
        document.getElementById('aboutLink').innerText = 'About Us';
        document.getElementById('contactLink').innerText = 'Contact';
        document.getElementById('co2Link').innerText = 'About CO2';
        document.getElementById('environmentLink').innerText = 'Environment';
        document.getElementById('researchLink').innerText = 'Research';
        document.getElementById('filterLabel').innerText = 'Filter by:';
        document.getElementById('countryColumn').innerText = 'Country';
        document.getElementById('companyColumn').innerText = 'Company';
        document.getElementById('emissionColumn').innerText = 'CO2 Emissions (in tons)';
        document.getElementById('footerText').innerText = '© 2024 CO2-Footprint. All rights reserved. Imprint and Privacy';

        // Filteroptionen auf Englisch
        document.getElementById('filterAll').innerText = 'All';
        document.getElementById('filterUS').innerText = 'USA';
        document.getElementById('filterDE').innerText = 'Germany';
        document.getElementById('filterBR').innerText = 'Brazil';
        document.getElementById('filterBMW').innerText = 'BMW';
        document.getElementById('filterPetronas').innerText = 'Petronas';
        document.getElementById('filterAmazon').innerText = 'Amazon';

        // Tabelle: Länder auf Englisch
        document.getElementById('de').innerText = 'Germany';
        document.getElementById('us').innerText = 'USA';
        document.getElementById('br').innerText = 'Brazil';
    } else if (lang === 'he') {
        document.body.style.direction = 'rtl';  // Rechts-nach-links
        localMenu.style.left = 'auto';          // Menü auf der rechten Seite
        localMenu.style.right = '0';            // Menü an der rechten Seite

        document.getElementById('title').innerText = 'טביעת רגל פחמנית';
        document.getElementById('welcomeText').innerText = 'ברוכים הבאים לאתר טביעת הרגל הפחמנית שלנו. דף זה נועד לקדם שקיפות.';
        document.getElementById('homeLink').innerText = 'דף הבית';
        document.getElementById('aboutLink').innerText = 'אודותינו';
        document.getElementById('contactLink').innerText = 'צור קשר';
        document.getElementById('co2Link').innerText = 'אודות פחמן';
        document.getElementById('environmentLink').innerText = 'סביבה';
        document.getElementById('researchLink').innerText = 'מחקר';
        document.getElementById('filterLabel').innerText = 'מיון לפי:';
        document.getElementById('countryColumn').innerText = 'מדינה';
        document.getElementById('companyColumn').innerText = 'חברה';
        document.getElementById('emissionColumn').innerText = 'פליטות פחמן (בטון)';
        document.getElementById('footerText').innerText = '© 2024 טביעת רגל פחמנית. כל הזכויות שמורות. כתובת משפטית ופרטיות';

        // Filteroptionen auf Hebräisch
        document.getElementById('filterAll').innerText = 'הכל';
        document.getElementById('filterUS').innerText = 'ארה"ב';
        document.getElementById('filterDE').innerText = 'גרמניה';
        document.getElementById('filterBR').innerText = 'ברזיל';
        document.getElementById('filterBMW').innerText = 'BMW';
        document.getElementById('filterPetronas').innerText = 'פטרונס';
        document.getElementById('filterAmazon').innerText = 'אמזון';

        // Tabelle: Länder auf Hebräisch
        document.getElementById('de').innerText = 'גרמניה';
        document.getElementById('us').innerText = 'ארה"ב';
        document.getElementById('br').innerText = 'ברזיל';
    }
}

// Menü umschalten
function toggleMenu() {
    const localMenu = document.getElementById('localMenu');
    if (localMenu.style.display === 'none' || localMenu.style.display === '') {
        localMenu.style.display = 'block';
    } else {
        localMenu.style.display = 'none';
    }
}

// Tabelle filtern
function filterTable() {
    const filterValue = document.getElementById('filterSelect').value;
    const searchText = document.getElementById('searchInput').value.toLowerCase();
    const rows = document.querySelectorAll('#emissionsTable tbody tr');
    
    rows.forEach(row => {
        const country = row.getAttribute('data-country');
        const company = row.getAttribute('data-company');
        const emission = row.getAttribute('data-emission');
        
        const countryText = row.querySelector('td:nth-child(1)').innerText.toLowerCase();
        const companyText = row.querySelector('td:nth-child(2)').innerText.toLowerCase();
        const emissionText = row.querySelector('td:nth-child(3)').innerText.toLowerCase();
        
        const matchesFilter = filterValue === 'all' || filterValue === country || filterValue === company;
        const matchesSearch = countryText.includes(searchText) || companyText.includes(searchText) || emissionText.includes(searchText);
        
        if (matchesFilter && matchesSearch) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}
