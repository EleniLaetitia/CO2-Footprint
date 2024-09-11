// Funktion zur Sprachumschaltung
function changeLanguage() {
    const language = document.getElementById('language').value;

    // Textübersetzungen
    const translations = {
        de: {
            pageTitle: 'CO2-Footprint',
            headerTitle: 'CO2-Footprint',
            languageLabel: 'Sprache:',
            navHome: 'Startseite',
            navAbout: 'Über uns',
            navContact: 'Kontakt',
            welcome: 'Willkommen auf unserer CO2-Footprint Website.',
            intro: 'Hier können Sie sehen, welche Unternehmen und Länder jährlich wie viel CO2 emittieren. Unsere Arbeit soll für mehr Transparenz sorgen.',
            sortCountryAsc: 'Land A-Z',
            sortCountryDesc: 'Land Z-A',
            sortCompanyAsc: 'Unternehmen A-Z',
            sortCompanyDesc: 'Unternehmen Z-A',
            sortCo2Asc: 'CO2 Ausstoß Aufsteigend',
            sortCo2Desc: 'CO2 Ausstoß Absteigend',
            countryHeader: 'Land',
            companyHeader: 'Unternehmen',
            co2Header: 'CO2 Ausstoß (in Tonnen)',
            footerText: '&copy; 2024 CO2-Footprint. Alle Rechte vorbehalten. <a href="#impressum">Impressum</a> und <a href="#datenschutz">Datenschutz</a>',
            sidebarCo2: 'Infos über CO2',
            sidebarEnvironment: 'Umwelt',
            sidebarResearch: 'Forschung'
        },
        en: {
            pageTitle: 'CO2 Footprint',
            headerTitle: 'CO2 Footprint',
            languageLabel: 'Language:',
            navHome: 'Home',
            navAbout: 'About Us',
            navContact: 'Contact',
            welcome: 'Welcome to our CO2 Footprint Website.',
            intro: 'Here you can see how much CO2 companies and countries emit annually. Our work is aimed at increasing transparency.',
            sortCountryAsc: 'Country A-Z',
            sortCountryDesc: 'Country Z-A',
            sortCompanyAsc: 'Company A-Z',
            sortCompanyDesc: 'Company Z-A',
            sortCo2Asc: 'CO2 Emission Ascending',
            sortCo2Desc: 'CO2 Emission Descending',
            countryHeader: 'Country',
            companyHeader: 'Company',
            co2Header: 'CO2 Emission (in tons)',
            footerText: '&copy; 2024 CO2 Footprint. All rights reserved. <a href="#impressum">Impressum</a> and <a href="#datenschutz">Privacy Policy</a>',
            sidebarCo2: 'CO2 Information',
            sidebarEnvironment: 'Environment',
            sidebarResearch: 'Research'
        },
        he: {
            pageTitle: 'טביעת רגל פחמנית',
            headerTitle: 'טביעת רגל פחמנית',
            languageLabel: 'שפה:',
            navHome: 'דף הבית',
            navAbout: 'עלינו',
            navContact: 'צור קשר',
            welcome: 'ברוכים הבאים לאתר טביעת הרגל הפחמנית שלנו.',
            intro: 'כאן תוכלו לראות כמה פחמן דו חמצני פולטות חברות ומדינות בכל שנה. העבודה שלנו מכוונת לשקיפות מוגברת.',
            sortCountryAsc: 'מדינה א-ב',
            sortCountryDesc: 'מדינה ב-א',
            sortCompanyAsc: 'חברה א-ב',
            sortCompanyDesc: 'חברה ב-א',
            sortCo2Asc: 'פליטת CO2 עולים',
            sortCo2Desc: 'פליטת CO2 יורדים',
            countryHeader: 'מדינה',
            companyHeader: 'חברה',
