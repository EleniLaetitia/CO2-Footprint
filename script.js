// Funktion zur Sprachumschaltung
function changeLanguage() {
    const language = document.getElementById('language').value;

    const translations = {
        de: {
            headerTitle: 'CO2-Footprint',
            languageLabel: 'Sprache:',
            navHome: 'Startseite',
            navAbout: 'Über uns',
            navContact: 'Kontakt',
            welcome: 'Willkommen auf unserer CO2-Footprint Website. Diese Seite soll für mehr Transparenz sorgen.',
            footerText: '&copy; 2024 CO2-Footprint. Alle Rechte vorbehalten. <a href="#impressum">Impressum</a> und <a href="#datenschutz">Datenschutz</a>',
            sidebarLinks: ['Forschung', 'Umwelt']
        },
        en: {
            headerTitle: 'CO2 Footprint',
            languageLabel: 'Language:',
            navHome: 'Home',
            navAbout: 'About Us',
            navContact: 'Contact',
            welcome: 'Welcome to our CO2 Footprint Website. This page aims to provide more transparency.',
            footerText: '&copy; 2024 CO2 Footprint. All rights reserved. <a href="#impressum">Impressum</a> and <a href="#datenschutz">Privacy</a>',
            sidebarLinks: ['Research', 'Environment']
        },
        he: {
            headerTitle: 'טביעת רגל פחמנית',
            languageLabel: 'שפה:',
            navHome: 'דף הבית',
            navAbout: 'עלינו',
            navContact: 'צור קשר',
            welcome: 'ברוכים הבאים לאתר טביעת רגל פחמנית. עמוד זה מיועד לספק שקיפות רבה יותר.',
            footerText: '&copy; 2024 טביעת רגל פחמנית. כל הזכויות שמורות. <a href="#impressum">Impressum</a> ו<a href="#datenschutz">פרטיות</a>',
            sidebarLinks: ['מחקר', 'סביבה']
        }
    };

    const selectedTranslation = translations[language];

    // Texte aktualisieren
    document.getElementById('header-title').innerText = selectedTranslation.headerTitle;
    document.querySelector('.language-select label').innerText = selectedTranslation.languageLabel;
    document.getElementById('nav-home').innerText = selectedTranslation.navHome;
    document.getElementById('nav-about').innerText = selectedTranslation.navAbout;
    document.getElementById('nav-contact').innerText = selectedTranslation.navContact;
    document.getElementById('welcome-message').innerText = selectedTranslation.welcome;
    document.querySelector('footer p').innerHTML = selectedTranslation.footerText;

    // Sidebar Links aktualisieren
    const sidebarLinks = document.querySelectorAll('.sidebar a');
    sidebarLinks[0].innerText = selectedTranslation.sidebarLinks[0];
    sidebarLinks[1].innerText = selectedTranslation.sidebarLinks[1];

    // Layout für RTL anpassen
    if (language === 'he') {
        document.body.setAttribute('dir', 'rtl');
    } else {
        document.body.removeAttribute('dir');
    }
}

// Event Listener für die Sprachumschaltung
document.getElementById('language').addEventListener('change', changeLanguage);

// Funktion zum Umschalten des Sidebar-Menüs
document.querySelector('.menu-item').addEventListener('click', function () {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('open');
});

// Initiale Sprachänderung anwenden
changeLanguage();
