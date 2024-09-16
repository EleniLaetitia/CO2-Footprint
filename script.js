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
        document.getElementById('countryColumn').innerText = 'Land';
        document.getElementById('companyColumn').innerText = 'Unternehmen';
        document.getElementById('emissionColumn').innerText = 'CO2-Ausstoß (in Tonnen)';
        document.getElementById('footerText').innerText = '© 2024 CO2-Footprint. Alle Rechte vorbehalten. Impressum und Datenschutz';
        updateFilterOptions('de');
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
        document.getElementById('countryColumn').innerText = 'Country';
        document.getElementById('companyColumn').innerText = 'Company';
        document.getElementById('emissionColumn').innerText = 'CO2 Emissions (in tons)';
        document.getElementById('footerText').innerText = '© 2024 CO2-Footprint. All rights reserved. Legal Notice and Privacy Policy';
        updateFilterOptions('en');
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
        document.getElementById('filterLabel').innerText = 'סינון לפי:';
        document.getElementById('countryColumn').innerText = 'מדינה';
        document.getElementById('companyColumn').innerText = 'חברה';
        document.getElementById('emissionColumn').innerText = 'פליטות CO2 (בטונות)';
        document.getElementById('footerText').innerText = '© 2024 טביעת רגל פחמנית. כל הזכויות שמורות. הודעות משפטיות ומדיניות פרטיות';
        updateFilterOptions('he');
        document.body.classList.add('rtl');
    }
}

function updateFilterOptions(lang) {
    const filterSelect = document.getElementById('filterSelect');
    filterSelect.innerHTML = '';
    
    const options = {
        de: [
            { value: 'az', text: 'Alphabetisch A-Z' },
            { value: 'za', text: 'Alphabetisch Z-A' },
            { value: 'max', text: 'Größter Ausstoß' },
            { value: 'min', text: 'Kleinster Ausstoß' },
            { value: 'bmw', text: 'BMW' },
            { value: 'amazon', text: 'Amazon' },
            { value: 'petronas', text: 'Petronas' }
        ],
        en: [
            { value: 'az', text: 'Alphabetical A-Z' },
            { value: 'za', text: 'Alphabetical Z-A' },
            { value: 'max', text: 'Highest Emissions' },
            { value: 'min', text: 'Lowest Emissions' },
            { value: 'bmw', text: 'BMW' },
            { value: 'amazon', text: 'Amazon' },
            { value: 'petronas', text: 'Petronas' }
        ],
        he: [
            { value: 'az', text: 'מ-א עד ת' },
            { value: 'za', text: 'מ-ת עד א' },
            { value: 'max', text: 'הכי הרבה פליטות' },
            { value: 'min', text: 'הכי מעט פליטות' },
            { value: 'bmw', text: 'BMW' },
            { value: 'amazon', text: 'אמזון' },
            { value: 'petronas', text: 'פטרונאס' }
        ]
    };
    
    options[lang].forEach(opt => {
        const option = document.createElement('option');
        option.value = opt.value;
        option.text = opt.text;
        filterSelect.add(option);
    });
}

// Menü umschalten
function toggleMenu() {
    const menu = document.getElementById('localMenu');
    menu.style.display = (menu.style.display === 'none' || menu.style.display === '') ? 'block' : 'none';
}

// Tabelle filtern
function filterTable() {
    const filterValue = document.getElementById('filterSelect').value;
    const searchValue = document.getElementById('searchInput').value.toLowerCase();
    const rows = document.querySelectorAll('#emissionsTable tbody tr');

    rows.forEach(row => {
        const country = row.querySelector('td:nth-child(1)').innerText.toLowerCase();
        const company = row.querySelector('td:nth-child(2)').innerText.toLowerCase();
        const emission = parseInt(row.dataset.emission);

        let matchesSearch = country.includes(searchValue) || company.includes(searchValue);
        let matchesFilter = true;

        switch (filterValue) {
            case 'az':
                matchesFilter = true;  // Alphabetische Sortierung wird anders umgesetzt
                break;
            case 'za':
                matchesFilter = true;  // Alphabetische Sortierung wird anders umgesetzt
                break;
            case 'max':
                matchesFilter = emission >= 1000000;  // Beispielwert für großen Ausstoß
                break;
            case 'min':
                matchesFilter = emission < 1000000;  // Beispielwert für kleinen Ausstoß
                break;
            case 'bmw':
                matchesFilter = company.includes('bmw');
                break;
            case 'amazon':
                matchesFilter = company.includes('amazon');
                break;
            case 'petronas':
                matchesFilter = company.includes('petronas');
                break;
            default:
                matchesFilter = true;
                break;
        }

        row.style.display = (matchesSearch && matchesFilter) ? '' : 'none';
    });
}
