// Funktion zur Sprachumschaltung
function changeLanguage() {
    const language = document.getElementById('language').value;
    
    // Elemente, die übersetzt werden müssen
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
            welcome: "Welcome to our CO2-Footprint website.",
            intro: "Here you can see which companies and countries emit how much CO2 annually. Our work aims to provide more transparency.",
            searchPlaceholder: "Search...",
            countryHeader: "Country",
            companyHeader: "Company",
            co2Header: "CO2 Emissions (in tons)",
            footerText: "&copy; 2024 CO2-Footprint. All rights reserved. <a href='#impressum'>Imprint</a> and <a href='#datenschutz'>Privacy Policy</a>"
        },
        he: {
            welcome: "ברוכים הבאים לאתר CO2-Footprint שלנו.",
            intro: "כאן תוכלו לראות אילו חברות ומדינות פולטות כמה CO2 מדי שנה. העבודה שלנו מיועדת לספק שקיפות רבה יותר.",
            searchPlaceholder: "חיפוש...",
            countryHeader: "מדינה",
            companyHeader: "חברה",
            co2Header: "פליטת CO2 (בטון)",
            footerText: "&copy; 2024 CO2-Footprint. כל הזכויות שמורות. <a href='#impressum'>אימפרסום</a> ו-<a href='#datenschutz'>מדיניות פרטיות</a>"
        }
    };

    const translate = translations[language];

    // Text in den Elementen ändern
    document.getElementById('welcome').textContent = translate.welcome;
    document.getElementById('intro').textContent = translate.intro;
    document.getElementById('search').placeholder = translate.searchPlaceholder;
    document.getElementById('country-header').textContent = translate.countryHeader;
    document.getElementById('company-header').textContent = translate.companyHeader;
    document.getElementById('co2-header').textContent = translate.co2Header;
    document.getElementById('footer-text').innerHTML = translate.footerText;

    // RTL für Hebräisch setzen
    if (language === 'he') {
        document.body.setAttribute('dir', 'rtl');
        document.getElementById('sidebar').style.left = '0';
        document.getElementById('menu-icon').style.display = 'flex';
        document.getElementById('sidebar-menu').classList.remove('hidden');
    } else {
        document.body.removeAttribute('dir');
        document.getElementById('sidebar').style.left = '-250px';
        document.getElementById('menu-icon').style.display = 'none';
        document.getElementById('sidebar-menu').classList.add('hidden');
    }
}

// Sidebar Menü anzeigen
document.getElementById('menu-icon').addEventListener('click', function() {
    const sidebarMenu = document.getElementById('sidebar-menu');
    const isVisible = !sidebarMenu.classList.contains('hidden');
    sidebarMenu.classList.toggle('hidden', isVisible);
    document.getElementById('sidebar').style.left = isVisible ? '-250px' : '0';
});

// Hamburger Menü anzeigen
document.getElementById('hamburger-menu').addEventListener('click', function() {
    const navMenu = document.querySelector('nav ul');
    navMenu.classList.toggle('show');
});
