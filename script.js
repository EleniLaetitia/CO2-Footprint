// Sprache ändern
function changeLanguage() {
    const lang = document.getElementById('languageSelect').value;
    if (lang === 'de') {
        document.getElementById('title').innerText = 'CO2-Footprint';
        document.getElementById('welcomeText').innerText = 'Willkommen auf unserer CO2-Footprint Website. Diese Seite soll zu mehr Transparenz führen.';
        document.body.classList.remove('rtl');
    } else if (lang === 'en') {
        document.getElementById('title').innerText = 'CO2-Footprint';
        document.getElementById('welcomeText').innerText = 'Welcome to our CO2-Footprint website. This site aims to provide more transparency.';
        document.body.classList.remove('rtl');
    } else if (lang === 'he') {
        document.getElementById('title').innerText = 'טביעת רגל פחמנית';
        document.getElementById('welcomeText').innerText = 'ברוכים הבאים לאתר טביעת רגל פחמנית שלנו. אתר זה נועד להגביר את השקיפות.';
        document.body.classList.add('rtl');
    }
}

// Such- und Filterfunktion für die Tabelle
function filterTable() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const rows = document.querySelectorAll('#emissionsTable tbody tr');
    rows.forEach(row => {
        const country = row.cells[0].innerText.toLowerCase();
        const company = row.cells[1].innerText.toLowerCase();
        if (country.includes(searchTerm) || company.includes(searchTerm)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}

// Tabelle nach Spalten sortieren
function sortTable(n) {
    const table = document.getElementById('emissionsTable');
    let rows = Array.from(table.rows).slice(1);
    let asc = true;

    rows.sort((row1, row2) => {
        const cell1 = row1.cells[n].innerText.toLowerCase();
        const cell2 = row2.cells[n].innerText.toLowerCase();
        return asc ? (cell1 > cell2 ? 1 : -1) : (cell1 < cell2 ? 1 : -1);
    });

    asc = !asc;

    rows.forEach(row => table.appendChild(row));
}

// Eingabefelder absichern
document.querySelectorAll('input').forEach(input => {
    input.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/<\/?[^>]+(>|$)/g, "");
    });
});
