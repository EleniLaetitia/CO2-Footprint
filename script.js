// Hilfsfunktion zum Entschärfen von Eingaben
function sanitizeInput(input) {
    return $('<div>').text(input).html();
}

// Sprache ändern
function changeLanguage() {
    const lang = sanitizeInput($('#languageSelect').val());
    const localMenu = $('#localMenu');

    if (lang === 'de') {
        $('body').css('direction', 'ltr');
        localMenu.css({'right': 'auto', 'left': '0'});

        $('#title').text('CO2-Footprint');
        $('#welcomeText').text('Willkommen auf unserer CO2-Footprint Website. Diese Seite soll zu mehr Transparenz führen.');
        $('#homeLink').text('Startseite');
        $('#aboutLink').text('Über uns');
        $('#contactLink').text('Kontakt');
        $('#co2Link').text('Über CO2');
        $('#environmentLink').text('Umwelt');
        $('#researchLink').text('Forschung');
        $('#tableTitle').text('CO2-Emissionen');
        $('#filterLabel').text('Filter nach:');
        $('#countryColumn').text('Land');
        $('#companyColumn').text('Unternehmen');
        $('#emissionColumn').text('CO2-Ausstoß (in Tonnen)');
        $('#footerText').text('© 2024 CO2-Footprint. Alle Rechte vorbehalten. Impressum und Datenschutz');

        // Filteroptionen auf Deutsch
        $('#filterAll').text('Alle');
        $('#filterUS').text('USA');
        $('#filterDE').text('Deutschland');
        $('#filterBR').text('Brasilien');
        $('#filterBMW').text('BMW');
        $('#filterPetronas').text('Petronas');
        $('#filterAmazon').text('Amazon');

        // Tabelleninhalte auf Deutsch
        $('tr[data-country="de"] .country').text('Deutschland');
        $('tr[data-country="us"] .country').text('USA');
        $('tr[data-country="br"] .country').text('Brasilien');

        $('tr[data-company="bmw"] .company').text('BMW');
        $('tr[data-company="amazon"] .company').text('Amazon');
        $('tr[data-company="petronas"] .company').text('Petronas');

    } else if (lang === 'en') {
        $('body').css('direction', 'ltr');
        localMenu.css({'right': 'auto', 'left': '0'});

        $('#title').text('CO2-Footprint');
        $('#welcomeText').text('Welcome to our CO2-Footprint website. This site aims to increase transparency.');
        $('#homeLink').text('Home');
        $('#aboutLink').text('About Us');
        $('#contactLink').text('Contact');
        $('#co2Link').text('About CO2');
        $('#environmentLink').text('Environment');
        $('#researchLink').text('Research');
        $('#tableTitle').text('CO2 Emissions');
        $('#filterLabel').text('Filter by:');
        $('#countryColumn').text('Country');
        $('#companyColumn').text('Company');
        $('#emissionColumn').text('CO2 Emissions (in tons)');
        $('#footerText').text('© 2024 CO2-Footprint. All rights reserved. Imprint and Privacy Policy');

        // Filteroptionen auf Englisch
        $('#filterAll').text('All');
        $('#filterUS').text('USA');
        $('#filterDE').text('Germany');
        $('#filterBR').text('Brazil');
        $('#filterBMW').text('BMW');
        $('#filterPetronas').text('Petronas');
        $('#filterAmazon').text('Amazon');

        // Tabelleninhalte auf Englisch
        $('tr[data-country="de"] .country').text('Germany');
        $('tr[data-country="us"] .country').text('USA');
        $('tr[data-country="br"] .country').text('Brazil');

        $('tr[data-company="bmw"] .company').text('BMW');
        $('tr[data-company="amazon"] .company').text('Amazon');
        $('tr[data-company="petronas"] .company').text('Petronas');

    } else if (lang === 'he') {
        $('body').css('direction', 'rtl');
        localMenu.css({'right': '0', 'left': 'auto'});

        $('#title').text('טביעת רגל פחמנית');
        $('#welcomeText').text('ברוכים הבאים לאתר טביעת רגל פחמנית שלנו. אתר זה נועד להוביל לשקיפות רבה יותר.');
        $('#homeLink').text('דף הבית');
        $('#aboutLink').text('אודות');
        $('#contactLink').text('צור קשר');
        $('#co2Link').text('על CO2');
        $('#environmentLink').text('סביבה');
        $('#researchLink').text('מחקר');
        $('#tableTitle').text('פליטות CO2');
        $('#filterLabel').text('סינון לפי:');
        $('#countryColumn').text('מדינה');
        $('#companyColumn').text('חברה');
        $('#emissionColumn').text('פליטות CO2 (בטונות)');
        $('#footerText').text('© 2024 טביעת רגל פחמנית. כל הזכויות שמורות. תנאי השימוש ומדיניות פרטיות');

        // Filteroptionen auf Hebräisch
        $('#filterAll').text('הכל');
        $('#filterUS').text('ארצות הברית');
        $('#filterDE').text('גרמניה');
        $('#filterBR').text('ברזיל');
        $('#filterBMW').text('BMW');
        $('#filterPetronas').text('פטרונס');
        $('#filterAmazon').text('אמזון');

        // Tabelleninhalte auf Hebräisch
        $('tr[data-country="de"] .country').text('גרמניה');
        $('tr[data-country="us"] .country').text('ארצות הברית');
        $('tr[data-country="br"] .country').text('ברזיל');

        $('tr[data-company="bmw"] .company').text('BMW');
        $('tr[data-company="amazon"] .company').text('אמזון');
        $('tr[data-company="petronas"] .company').text('פטרונס');
    }
}

// Menü ein-/ausblenden
function toggleMenu() {
    $('#localMenu').toggle();
}

// Filtertabelle basierend auf Such- und Filterkriterien
function filterTable() {
    const searchInput = sanitizeInput($('#searchInput').val().toLowerCase());
    const filterValue = sanitizeInput($('#filterSelect').val());

    $('#emissionsTable tbody tr').each(function() {
        const country = $(this).data('country');
        const company = $(this).data('company');
        const emission = $(this).data('emission').toString();

        const isSearchMatch = (country + ' ' + company + ' ' + emission).toLowerCase().includes(searchInput);
        const isFilterMatch = (filterValue === 'all' || country === filterValue || company === filterValue);

        if (isSearchMatch && isFilterMatch) {
            $(this).show();
        } else {
            $(this).hide();
        }
    });
}
