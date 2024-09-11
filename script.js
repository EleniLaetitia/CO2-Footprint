// Funktion zur Sprachumschaltung
function changeLanguage() {
    const language = document.getElementById('language').value;
    const navMenu = document.getElementById('nav-menu');
    
    // Text für Navigation ändern
    const navLinks = navMenu.getElementsByTagName('a');
    if (language === 'de') {
        navLinks[0].textContent = 'Startseite';
        navLinks[1].textContent = 'Über uns';
        navLinks[2].textContent = 'Kontakt';
        navLinks[3].textContent = 'Infos über CO2';
        navLinks[4].textContent = 'Umwelt';
        navLinks[5].textContent = 'Forschung';
    } else if (language === 'en') {
        navLinks[0].textContent = 'Home';
        navLinks[1].textContent = 'About Us';
        navLinks[2].textContent = 'Contact';
        navLinks[3].textContent = 'CO2 Information';
        navLinks[4].textContent = 'Environment';
        navLinks[5].textContent = 'Research';
    } else if (language === 'he') {
        navLinks[0].textContent = 'דף הבית';
        navLinks[1].textContent = 'עלינו';
        navLinks[2].textContent = 'צור קשר';
        navLinks[3].textContent = 'מידע על CO2';
        navLinks[4].textContent = 'סביבה';
        navLinks[5].textContent = 'מחקר';
    }

    // RTL für Hebräisch setzen
    if (language === 'he') {
        document.body.setAttribute('dir', 'rtl');
    } else {
        document.body.removeAttribute('dir');
    }
}

// Funktion für das Hamburger Menü
document.getElementById('hamburger-menu').addEventListener('click', function()
