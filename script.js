// Sprache ändern
function changeLanguage() {
    const lang = document.getElementById('languageSelect').value;
    const localMenu = document.getElementById('localMenu');

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
            filterLabel: 'Filter nach:',
            countryColumn: 'Land',
            companyColumn: 'Unternehmen',
            emissionColumn: 'CO2-Ausstoß (in Tonnen)',
            footerText: '© 2024 CO2-Footprint. Alle Rechte vorbehalten. Impressum und Datenschutz',
            filters: {
                all: 'Alle',
                us: 'USA',
                de: 'Deutschland',
                br: 'Brasilien',
                bmw: 'BMW',
                petronas: 'Petronas',
                amazon: 'Amazon'
            },
            countries: {
                de: 'Deutschland',
                us: 'USA',
                br: 'Brasilien'
            }
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
            filterLabel: 'Filter by:',
            countryColumn: 'Country',
            companyColumn: 'Company',
            emissionColumn: 'CO2 Emissions (in tons)',
            footerText: '© 2024 CO2-Footprint. All rights reserved. Legal Notice and Privacy Policy',
            filters: {
                all: 'All',
                us: 'USA',
                de: 'Germany',
                br: 'Brazil',
                bmw: 'BMW',
                petronas: 'Petronas',
                amazon: 'Amazon'
            },
            countries: {
                de: 'Germany',
                us: 'USA',
                br: 'Brazil'
            }
        },
        he: {
            title: 'טביעת רגל פחמנית',
            welcomeText: 'ברוכים הבאים לאתר טביעת הרגל הפחמנית שלנו. אתר זה שואף לספק יותר שקיפות.',
            homeLink: 'דף הבית',
            aboutLink: 'עלינו',
            contactLink: 'צור קשר',
            co2Link: 'על CO2',
            environmentLink: 'סביבה',
            researchLink: 'מחקר',
            tableTitle: 'פליטות פחמן דו חמצני',
            filterLabel: 'סנן לפי:',
            countryColumn: 'מדינה',
            companyColumn: 'חברה',
            emissionColumn: 'פליטות CO2 (בטונות)',
            footerText: '© 2024 טביעת רגל פחמנית. כל הזכויות שמורות. הצהרה משפטית ומדיניות פרטיות',
            filters: {
                all: 'הכל',
                us: 'ארה"ב',
                de: 'גרמניה',
                br: 'ברזיל',
                bmw: 'BMW',
                petronas: 'פטרונס',
                amazon: 'אמזון'
            },
            countries: {
                de: 'גרמניה',
                us: 'ארה"ב',
                br: 'ברזיל'
            }
        }
    };

    const currentTranslations = translations[lang];
    document.body.style.direction = lang === 'he' ? 'rtl' : 'ltr';

    // Aktualisiere die Texte
    document.getElementById('title').textContent = currentTranslations.title;
    document.getElementById('welcomeText').textContent = currentTranslations.welcomeText;
    document.getElementById('homeLink').textContent = currentTranslations.homeLink;
    document.getElementById('aboutLink').textContent = currentTranslations.aboutLink;
    document.getElementById('contactLink').textContent = currentTranslations.contactLink;
    document.getElementById('co2Link').textContent = currentTranslations.co2Link;
    document.getElementById('environmentLink').textContent = currentTranslations.environmentLink;
    document.getElementById('researchLink').textContent = currentTranslations.researchLink;
    document.getElementById('tableTitle').textContent = currentTranslations.tableTitle;
    document.getElementById('filterLabel').textContent = currentTranslations.filterLabel;
    document.getElementById('countryColumn').textContent = currentTranslations.countryColumn;
    document.getElementById('companyColumn').textContent = currentTranslations.companyColumn;
    document.getElementById('emissionColumn').textContent = currentTranslations.emissionColumn;
    document.getElementById('footerText').textContent = currentTranslations.footerText;

    // Update der Filteroptionen
    const filterSelect = document.getElementById('filterSelect');
    Array.from(filterSelect.options).forEach(option => {
        option.textContent = currentTranslations.filters[option.value] || option.textContent;
    });

    // Update der Tabelle
    Array.from(document.querySelectorAll('#emissionsTable tbody tr')).forEach(row => {
        const countryCell = row.cells[0];
        countryCell.textContent = currentTranslations.countries[countryCell.textContent.toLowerCase()] || countryCell.textContent;
    });

    // Menü Positionierung
    localMenu.style.display = lang === 'he' ? 'block' : 'none';
}

// Menü ein- und ausblenden
function toggleMenu() {
    const localMenu = document.getElementById('localMenu');
    localMenu.style.display = localMenu.style.display === 'block' ? 'none' : 'block';
}

// Tabelle filtern
function filterTable() {
    const filter = document.getElementById('filterSelect').value;
    const search = document.getElementById('searchInput').value.toLowerCase();
    const rows = document.querySelectorAll('#emissionsTable tbody tr');

    rows.forEach(row => {
        const country = row.dataset.country;
        const company = row.dataset.company.toLowerCase();
        const emission = row.dataset.emission;

        const show = (filter === 'all' || filter === country || filter === company) &&
            (company.includes(search) || emission.includes(search));

        row.style.display = show ? '' : 'none';
    });
}
