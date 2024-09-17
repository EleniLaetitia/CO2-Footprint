// Sprachwechsel-Funktion (bleibt unverändert)
function changeLanguage(lang) {
    const localMenu = document.getElementById('localMenu');

    if (lang === 'de') {
        document.body.style.direction = 'ltr'; 
        localMenu.style.left = '0';              
        localMenu.style.right = 'auto';          

        document.getElementById('title').innerText = 'CO2-Footprint';
        document.getElementById('welcomeText').innerText = 'Willkommen auf unserer CO2-Footprint Website. Diese Seite soll zu mehr Transparenz führen.';
        document.getElementById('homeLink').innerText = 'Startseite';
        document.getElementById('aboutLink').innerText = 'Über uns';
        document.getElementById('contactLink').innerText = 'Kontakt';
        document.getElementById('co2Link').innerText = 'Über CO2';
        document.getElementById('environmentLink').innerText = 'Umwelt';
        document.getElementById('researchLink').innerText = 'Forschung';
        document.getElementById('tableTitle').innerText = 'CO2-Emissionen';
        document.getElementById('filterLabel').innerText = 'Filtern nach:';
        document.getElementById('countryColumn').innerText = 'Land';
        document.getElementById('companyColumn').innerText = 'Unternehmen';
        document.getElementById('emissionColumn').innerText = 'CO2-Ausstoß (in Tonnen)';
        document.getElementById('footerText').innerText = '© 2024 CO2-Footprint. Alle Rechte vorbehalten. Rechtliche Hinweise und Datenschutz';

        document.getElementById('filterAll').innerText = 'Alle';
        document.getElementById('filterUS').innerText = 'USA';
        document.getElementById('filterDE').innerText = 'Deutschland';
        document.getElementById('filterBR').innerText = 'Brasilien';
        document.getElementById('filterBMW').innerText = 'BMW';
        document.getElementById('filterPetronas').innerText = 'Petronas';
        document.getElementById('filterAmazon').innerText = 'Amazon';

        document.getElementById('de').innerText = 'Deutschland';
        document.getElementById('us').innerText = 'USA';
        document.getElementById('br').innerText = 'Brasilien';
        document.getElementById('bmw').innerText = 'BMW';
        document.getElementById('amazon').innerText = 'Amazon';
        document.getElementById('petronas').innerText = 'Petronas';

    } else if (lang === 'en') {
        document.body.style.direction = 'ltr';  
        localMenu.style.left = '0';            
        localMenu.style.right = 'auto';         

        document.getElementById('title').innerText = 'CO2 Footprint';
        document.getElementById('welcomeText').innerText = 'Welcome to our CO2 Footprint website. This page aims to increase transparency.';
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
        document.getElementById('emissionColumn').innerText = 'CO2 Emission (in tons)';
        document.getElementById('footerText').innerText = '© 2024 CO2 Footprint. All rights reserved. Legal notes and privacy policy';

        document.getElementById('filterAll').innerText = 'All';
        document.getElementById('filterUS').innerText = 'USA';
        document.getElementById('filterDE').innerText = 'Germany';
        document.getElementById('filterBR').innerText = 'Brazil';
        document.getElementById('filterBMW').innerText = 'BMW';
        document.getElementById('filterPetronas').innerText = 'Petronas';
        document.getElementById('filterAmazon').innerText = 'Amazon';

        document.getElementById('de').innerText = 'Germany';
        document.getElementById('us').innerText = 'USA';
        document.getElementById('br').innerText = 'Brazil';
        document.getElementById('bmw').innerText = 'BMW';
        document.getElementById('amazon').innerText = 'Amazon';
        document.getElementById('petronas').innerText = 'Petronas';
    } else if (lang === 'he') {
        document.body.style.direction = 'rtl';  
        localMenu.style.left = 'auto';          
        localMenu.style.right = '0';            

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

        document.getElementById('filterAll').innerText = 'הכל';
        document.getElementById('filterUS').innerText = 'ארצות הברית';
        document.getElementById('filterDE').innerText = 'גרמניה';
        document.getElementById('filterBR').innerText = 'ברזיל';
        document.getElementById('filterBMW').innerText = 'BMW';
        document.getElementById('filterPetronas').innerText = 'פטרונס';
        document.getElementById('filterAmazon').innerText = 'אמזון';

        document.getElementById('de').innerText = 'גרמניה';
        document.getElementById('us').innerText = 'ארצות הברית';
        document.getElementById('br').innerText = 'ברזיל';
        document.getElementById('bmw').innerText = 'BMW';
        document.getElementById('amazon').innerText = 'אמזון';
        document.getElementById('petronas').innerText = 'פטרונס';
    }
    filterTable(); // Tabelle nach Sprachwechsel filtern
}

// Funktion zur Filterung der Tabelle
function filterTable() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const filterValue = document.getElementById('filterSelect').value.toLowerCase();
    const tableRows = document.querySelectorAll('#emissionsTable tbody tr');

    tableRows.forEach(row => {
        const countryCell = row.querySelector('td[data-country]');
        const companyCell = row.querySelector('td[data-company]');
        const country = countryCell ? countryCell.innerText.toLowerCase() : '';
        const company = companyCell ? companyCell.innerText.toLowerCase() : '';

        const matchesSearch = country.includes(searchInput) || company.includes(searchInput);
        const matchesFilter = filterValue === 'all' || filterValue === country || filterValue === company;

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
