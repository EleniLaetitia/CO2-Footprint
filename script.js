document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const sideMenu = document.getElementById('side-menu');
    const languageButtons = document.querySelectorAll('.language-selector button');
    const translations = {
        de: {
            home: "Startseite",
            about: "Über uns",
            contact: "Kontakt",
            co2-info: "Infos über CO2",
            environment: "Umwelt",
            research: "Forschung",
            data-title: "CO2-Emissionsdaten",
            footer-text: "&copy; 2024 Non-Profit-Organisation. Alle Rechte vorbehalten."
        },
        en: {
            home: "Home",
            about: "About Us",
            contact: "Contact",
            co2-info: "CO2 Info",
            environment: "Environment",
            research: "Research",
            data-title: "CO2 Emissions Data",
            footer-text: "&copy; 2024 Non-Profit Organization. All rights reserved."
        },
        he: {
            home: "דף הבית",
            about: "אודות",
            contact: "צור קשר",
            co2-info: "מידע על CO2",
            environment: "סביבה",
            research: "מחקר",
            data-title: "נתוני פליטת CO2",
            footer-text: "&copy; 2024 ארגון ללא מטרות רווח. כל הזכויות שמורות."
        }
    };

    menuToggle.addEventListener('click', () => {
        sideMenu.classList.toggle('active');
    });

    languageButtons.forEach(button => {
        button.addEventListener('click', () => {
            const lang = button.getAttribute('data-lang');
            document.documentElement.setAttribute('lang', lang);
            document.documentElement.setAttribute('data-dir', lang === 'he' ? 'rtl' : 'ltr');
            
            Object.keys(translations[lang]).forEach(key => {
                const elements = document.querySelectorAll(`[data-key="${key}"]`);
                elements.forEach(el => el.textContent = translations[lang][key]);
            });
        });
    });

    const searchInput = document.getElementById('search');
    const table = document.getElementById('data-table');

    searchInput.addEventListener('input', () => {
        const filter = searchInput.value.toLowerCase();
        const rows = table.getElementsByTagName('tbody')[0].getElementsByTagName('tr');

        Array.from(rows).forEach(row => {
            const cells = row.getElementsByTagName('td');
            const text = Array.from(cells).map(cell => cell.textContent.toLowerCase()).join(' ');

            if (text.includes(filter)) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        });
    });
});
