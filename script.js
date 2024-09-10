// Funktion zum Ändern der Sprache und des Layouts
function changeLanguage() {
    const language = document.getElementById("language").value;
    const navMenu = document.getElementById("nav-menu");
    const title = document.getElementById("title");
    const welcomeText = document.getElementById("welcome-text");
    const description = document.getElementById("description");
    const body = document.body;

    if (language === "de") {
        navMenu.classList.remove("nav-right");
        navMenu.classList.add("nav-left");
        body.classList.remove("rtl");

        // Texte auf Deutsch setzen
        title.innerHTML = "CO2-Footprint";
        welcomeText.innerHTML = "Willkommen auf unserer CO2-Footprint Website";
        description.innerHTML = "Hier können Sie sehen, welche Unternehmen und Länder jährlich wie viel CO2 emittieren. Unsere Arbeit soll für mehr Transparenz sorgen.";
    } else if (language === "en") {
        navMenu.classList.remove("nav-left");
        navMenu.classList.add("nav-right");
        body.classList.remove("rtl");

        // Texte auf Englisch setzen
        title.innerHTML = "CO2 Footprint";
        welcomeText.innerHTML = "Welcome to our CO2 Footprint Website";
        description.innerHTML = "Here you can see which companies and countries emit how much CO2 annually. Our work aims to provide more transparency.";
    } else if (language === "he") {
        navMenu.classList.remove("nav-left");
        navMenu.classList.add("nav-right");
        body.classList.add("rtl");

        // Texte auf Hebräisch setzen
        title.innerHTML = "טביעת רגל פחמנית";
        welcomeText.innerHTML = "ברוכים הבאים לאתר טביעת הרגל הפחמנית שלנו";
        description.innerHTML = "כאן תוכלו לראות אילו חברות ומדינות פולטות כמה פחמן דו חמצני בכל שנה. העבודה שלנו נועדה להבטיח שקיפות רבה יותר.";
    }
}

// Funktion zum Sortieren der Tabelle
function sortTable(n, dir) {
    const table = document.getElementById("emissions-table");
    let rows = Array.from(table.rows).slice(1);
    const asc = dir === "asc";

    rows.sort((row1, row2) => {
        const cell1 = row1.cells[n].innerText.toLowerCase();
        const cell2 = row2.cells[n].innerText.toLowerCase();

        return asc ? (cell1 > cell2 ? 1 : -1) : (cell1 < cell2 ? 1 : -1);
    });

    rows.forEach(row => table.appendChild(row));
}

// Funktion zum Anwenden des Filters
function applyFilter() {
    const filter = document.getElementById("filter").value;

    switch (filter) {
        case "country-asc":
            sortTable(0, "asc");
            break;
        case "country-desc":
            sortTable(0, "desc");
            break;
        case "company-asc":
            sortTable(1, "asc");
            break;
        case "company-desc":
            sortTable(1, "desc");
            break;
        case "co2-asc":
            sortTable(2, "asc");
            break;
        case "co2-desc":
            sortTable(2, "desc");
            break;
        default:
            break;
    }
}

// Suchfunktion für die Tabelle
function searchTable() {
    const input = document.getElementById("search");
    const filter = input.value.toLowerCase();
    const table = document.getElementById("emissions-table");
    const tr = table.getElementsByTagName("tr");

    for (let i = 1; i < tr.length; i++) {
        const tds = tr[i].getElementsByTagName("td");
        let displayRow = false;

        for (let j = 0; j < tds.length; j++) {
            const txtValue = tds[j].textContent || tds[j].innerText;
            if (txtValue.toLowerCase().indexOf(filter) > -1) {
                displayRow = true;
                break;
            }
        }

        tr[i].style.display = displayRow ? "" : "none";
    }
}

// Input-Felder vor Code-Injektionen schützen
document.querySelectorAll('input').forEach(input => {
    input.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/<\/?[^>]+(>|$)/g, "");
    });
});
