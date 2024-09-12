// Funktion zur Sprachumschaltung
function changeLanguage() {
    const language = document.getElementById('language').value;

    const translations = {
        de: {
            headerTitle: 'CO2-Footprint',
            welcomeMessage: 'Willkommen auf unserer CO2-Footprint Website. Diese Seite soll für mehr Transparenz sorgen.',
            navHome: 'Startseite',
            navAbout: 'Über uns',
            navContact: 'Kontakt',
            footerText: '&copy; 2024 CO2-Footprint. Alle Rechte vorbehalten. <a href="#impressum">Impressum</a> und <a href="#datenschutz">Datenschutz</a>'
        },
        en: {
            headerTitle: 'CO2 Footprint',
            welcomeMessage: 'Welcome to our CO2 Footprint Website. This page is designed for more transparency.',
            navHome: 'Home',
            navAbout: 'About Us',
            navContact: 'Contact',
            footerText: '&copy; 2024 CO2 Footprint. All rights reserved. <a href="#impressum">Legal Notice</a> and <a href="#datenschutz">Privacy Policy</a>'
        },
        he: {
            headerTitle: 'טביעת רגל פחמנית',
            welcomeMessage: 'ברוכים הבאים לאתר טביעת רגל פחמנית. אתר זה מיועד לשקיפות רבה יותר.',
            navHome: 'דף הבית',
            navAbout: 'עלינו',
            navContact: 'צור קשר',
            footerText: '&copy; 2024 טביעת רגל פחמנית. כל הזכויות שמורות. <a href="#impressum">פרטי משפטי</a> ו<a href="#datenschutz">מדיניות פרטיות</a>'
        }
    };

    const selectedTranslation = translations[language];

    document.getElementById('header-title').innerText = selectedTranslation.headerTitle;
    document.getElementById('welcome-message').innerText = selectedTranslation.welcomeMessage;
    document.getElementById('nav-home').innerText = selectedTranslation.navHome;
    document.getElementById('nav-about').innerText = selectedTranslation.navAbout;
    document.getElementById('nav-contact').innerText = selectedTranslation.navContact;
    document.querySelector('footer p').innerHTML = selectedTranslation.footerText;

    document.body.setAttribute('dir', language === 'he' ? 'rtl' : 'ltr');
}

document.getElementById('language').addEventListener('change', changeLanguage);

// Sidebar Menü Toggle
document.getElementById('menu-toggle').addEventListener('click', function () {
    document.getElementById('sidebar').classList.toggle('open');
});

// Such- und Filterfunktion
const table = document.querySelector('#data-table tbody');
const searchInput = document.getElementById('search');
const sortSelect = document.getElementById('sort');

// Suchfunktion
searchInput.addEventListener('input', function () {
    const searchTerm = searchInput.value.toLowerCase();
    for (let row of table.rows) {
        const country = row.cells[0].textContent.toLowerCase();
        const company = row.cells[1].textContent.toLowerCase();
        row.style.display = (country.includes(searchTerm) || company.includes(searchTerm)) ? '' : '
