// Sprache ändern
function changeLanguage() {
    const lang = document.getElementById('languageSelect').value;
    const localMenu = document.getElementById('localMenu');
    
    // Übersetzung der Länder und Unternehmen
    const translations = {
        'de': {
            'USA': 'USA',
            'Germany': 'Deutschland',
            'Brazil': 'Brasilien',
            'BMW': 'BMW',
            'Petronas': 'Petronas',
            'Amazon': 'Amazon'
        },
        'en': {
            'USA': 'USA',
            'Germany': 'Germany',
            'Brazil': 'Brazil',
            'BMW': 'BMW',
            'Petronas': 'Petronas',
            'Amazon': 'Amazon'
        },
        'he': {
            'USA': 'ארה"ב',
            'Germany': 'גרמניה',
            'Brazil': 'ברזיל',
            'BMW': 'BMW',
            'Petronas': 'פטרונס',
            'Amazon': 'אמזון'
        }
    };

    if (lang === 'de') {
        document.body.style.direction = 'ltr';
        localMenu.style.right = 'auto';
        localMenu.style.left = '0';

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
        document.getElementById('filterUS').innerText = translations.de['USA'];
        document.getElementById('filterDE').innerText = translations.de['Germany'];
        document.getElementById('filterBR').innerText = translations.de['Brazil'];
        document.getElementById('filterBMW').innerText = translations.de['BMW'];
        document.getElementById('filterPetronas').innerText = translations.de['Petronas'];
        document.getElementById('filterAmazon').innerText = translations.de['Amazon'];

    } else if (lang === 'en') {
        document.body.style.direction = 'ltr';
        localMenu.style.right = 'auto';
        localMenu.style.left = '0';

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
        document.getElementById('filterUS').innerText = translations.en['USA'];
        document.getElementById('filterDE').innerText = translations.en['Germany'];
        document.getElementById('filterBR').innerText = translations.en['Brazil'];
        document.getElementById('filterBMW').innerText = translations.en['BMW'];
        document.getElementById('filterPetronas').innerText = translations.en['Petronas'];
        document.getElementById('filterAmazon').innerText = translations.en['Amazon'];

    } else if (lang === 'he') {
        document.body.style.direction = 'rtl';
        localMenu.style.left = 'auto';
        localMenu.style.right = '0';

        document.getElementById('title').innerText = 'ניקוד CO2';
        document.getElementById('welcomeText').innerText = 'ברוכים הבאים לאתר ניקוד CO2 שלנו. האתר נועד לספק יותר שקיפות.';
        document.getElementById('homeLink').innerText = 'דף הבית';
        document.getElementById('aboutLink').innerText = 'עלינו';
        document.getElementById('contactLink').innerText = 'צור קשר';
        document.getElementById('co2Link').innerText = 'על CO2';
        document.getElementById('environmentLink').innerText = 'סביבה';
        document.getElementById('researchLink').innerText = 'מחקר';
        document.getElementById('tableTitle').innerText = 'פליטת CO2';
        document.getElementById('filterLabel').innerText = 'סינון לפי:';
        document.getElementById('countryColumn').innerText = 'מדינה';
        document.getElementById('companyColumn').innerText = 'חברה';
        document.getElementById('emissionColumn').innerText = 'פליטת CO2 (בטונות)';
        document.getElementById('footerText').innerText = '© 2024 ניקוד CO2. כל הזכויות שמורות. הצהרה משפטית ומדיניות פרטיות';

        // Filteroptionen auf Hebräisch
        document.getElementById('filterAll').innerText = 'הכל';
        document.getElementById('filterUS').innerText = translations.he['USA'];
        document.getElementById('filterDE').innerText = translations.he['Germany'];
        document.getElementById('filterBR').innerText = translations.he['Brazil'];
        document.getElementById('filterBMW').innerText = translations.he['BMW'];
        document.getElementById('filterPetronas').innerText = translations.he['Petronas'];
        document.getElementById('filterAmazon').innerText = translations.he['Amazon'];
    }

    // Tabelleninhalte aktualisieren
    updateTableContents(translations[lang]);
}

// Funktion zum Aktualisieren der Tabelleninhalte
function updateTableContents(translations) {
    const rows = document.querySelectorAll('#emissionsTable tbody tr');
    rows.forEach(row => {
        const countryCell = row.querySelector('.country');
        const companyCell = row.querySelector('.company');
        
        const country = countryCell.innerText;
        const company = companyCell.innerText;
        
        if (translations[country]) {
            countryCell.innerText = translations[country];
        }
        if (translations[company]) {
            companyCell.innerText = translations[company];
        }
    });
}
