document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('language').addEventListener('change', changeLanguage);
    document.getElementById('menu-icon').addEventListener('click', () => {
        const sidebar = document.getElementById('sidebar');
        sidebar.classList.toggle('hidden');
        document.body.style.marginLeft = sidebar.classList.contains('hidden') ? '0' : '250px';
    });

    document.getElementById('close-sidebar').addEventListener('click', () => {
        const sidebar = document.getElementById('sidebar');
        sidebar.classList.add('hidden');
        document.body.style.marginLeft = '0';
    });
});

function changeLanguage() {
    const language = document.getElementById('language').value;

    const translations = {
        de: {
            welcome: "Willkommen auf unserer CO2-Footprint Website.",
            intro: "Hier können Sie sehen, welche Unternehmen und Länder jährlich wie viel CO2 emittieren. Unsere Arbeit soll für mehr Transparenz sorgen.",
            searchPlaceholder: "Suche...",
            countryHeader: "Land",
            companyHeader: "Unternehmen",
            co2Header: "CO2 Ausstoß (in Tonnen)",
            footerText: "&copy; 2024 CO2-Footprint. Alle Rechte vorbehalten. <a href='#impressum'>Impressum</a> und <a href='#datenschutz'>Datenschutz</a>"
        },
        en: {
            welcome: "Welcome to our CO2 Footprint Website.",
            intro: "Here you can see how much CO2 companies and countries emit annually. Our work aims to increase transparency.",
            searchPlaceholder: "Search...",
            countryHeader: "Country",
            companyHeader: "Company",
            co2Header: "CO2 Emission (in tons)",
            footerText: "&copy; 2024 CO2-Footprint. All rights reserved. <a href='#impressum'>Impressum</a> and <a href='#datenschutz'>Privacy Policy</a>"
        },
        he: {
            welcome: "ברוכים הבאים לאתר טביעת הרגל הפחמנית",
            intro: "כאן תוכלו לראות כמה פחמן דו חמצני פולטות חברות ומדינות בכל שנה. העבודה שלנו מכוונת לשקיפות מוגברת.",
            searchPlaceholder: "חיפוש...",
            countryHeader: "מדינה",
            companyHeader: "חברה",
            co2Header: "פלט CO2 (בטון)",
            footerText: "&copy; 2024 CO2-Footprint. כל הזכויות שמורות. <a href='#impressum'>טביעת רגל</a> ו-<a href='#datenschutz'>מדיניות פרטיות</a>"
        }
    };

    const translation = translations[language];

    document.getElementById('welcome').textContent = translation.welcome;
    document.getElementById('intro').textContent = translation.intro;
    document.getElementById('search').placeholder = translation.searchPlaceholder;
    document.getElementById('country-header').textContent = translation.countryHeader;
    document.getElementById('company-header').textContent = translation.companyHeader;
    document.getElementById('co2-header').textContent = translation.co2Header;
    document.getElementById('footer-text').innerHTML = translation.footerText;

    if (language === 'he') {
        document.body.setAttribute('dir', 'rtl');
    } else {
        document.body.setAttribute('dir', 'ltr');
    }
}
