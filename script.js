// Texte für die verschiedenen Sprachen
const translations = {
    de: {
        pageTitle: "CO2-Footprint",
        title: "CO2-Footprint",
        navHome: "Startseite",
        navAbout: "Über uns",
        navContact: "Kontakt",
        welcomeText: "Willkommen auf unserer CO2-Footprint Website",
        description: "Hier können Sie sehen, welche Unternehmen und Länder jährlich wie viel CO2 emittieren. Unsere Arbeit soll für mehr Transparenz sorgen.",
        tableCountry: "Land",
        tableCompany: "Unternehmen",
        tableCO2: "CO2-Ausstoß (Tonnen)",
        footerText: "&copy; 2024 CO2-Footprint. Alle Rechte vorbehalten. Impressum und Datenschutz"
    },
    en: {
        pageTitle: "CO2 Footprint",
        title: "CO2 Footprint",
        navHome: "Home",
        navAbout: "About Us",
        navContact: "Contact",
        welcomeText: "Welcome to our CO2 Footprint Website",
        description: "Here you can see which companies and countries emit how much CO2 annually. Our work aims to provide more transparency.",
        tableCountry: "Country",
        tableCompany: "Company",
        tableCO2: "CO2 Emissions (Tons)",
        footerText: "&copy; 2024 CO2 Footprint. All rights reserved. Imprint and Privacy Policy"
    },
    he: {
        pageTitle: "טביעת רגל פחמנית",
        title: "טביעת רגל פחמנית",
        navHome: "דף הבית",
        navAbout: "עלינו",
        navContact: "צור קשר",
        welcomeText: "ברוכים הבאים לאתר טביעת הרגל הפחמנית שלנו",
        description: "כאן תוכלו לראות אילו חברות ומדינות פולטות כמה פחמן דו חמצני בכל שנה. העבודה שלנו נועדה להבטיח שקיפות רבה יותר.",
        tableCountry: "מדינה",
        tableCompany: "חברה",
        tableCO2: "פליטת CO2 (טון)",
        footerText: "&copy; 2024 טביעת רגל פחמנית. כל הזכויות שמורות. פרטיות ותנאי השימוש"
    }
};

// Funktion zum Ändern der Sprache und des Layouts
function changeLanguage() {
    const language = document.getElementById("language").value;
    const body = document.body;

    const langContent = translations[language];

    // Überschriften und Texte anpassen
    document.getElementById("page-title").textContent = langContent.pageTitle;
    document.getElementById("title").textContent = langContent.title;
    document.getElementById("nav-home").textContent = langContent.navHome;
    document.getElementById("nav-about").textContent = langContent.navAbout;
    document.getElementById("nav-contact").textContent = langContent.navContact;
    document.getElementById("welcome-text").textContent = langContent.welcomeText;
    document.getElementById("description").textContent = langContent.description;
    document.getElementById("table-country").textContent = langContent.tableCountry;
    document.getElementById("table-company").textContent = langContent.tableCompany;
    document.getElementById("table-co2").textContent = langContent.tableCO2;
    document.getElementById("footer-text").innerHTML = langContent.footerText;

    // Layout je nach Sprache anpassen (z.B. RTL für Hebräisch)
    if (language === "he") {
        body.classList.add("rtl");
        body.classList.remove("ltr");
        document.getElementById("nav-menu").classList.remove("nav-left");
        document.getElementById("nav-menu").classList.add("nav-right");
    } else {
        body.classList.remove("rtl");
        body.classList.add("ltr");
        document.getElementById("nav-menu").classList.remove("nav-right");
        document.getElementById("nav-menu").classList.add("nav-left");
    }
}

// Funktion zum Sortieren der Tabelle nach Spalten
function sortTable(n) {
    const table = document.getElementById("emissions-table");
    const rows = Array.from(table.rows).slice(1);
    let asc = true;

    rows.sort((row1, row2) => {
        const cell1 = row1.cells[n].innerText.toLowerCase();
        const cell2 = row2.cells[n].innerText.toLowerCase();

        return asc ? (cell1 > cell2 ? 1 : -1) : (cell1 < cell2 ? 1 : -1);
    });

    asc = !asc;

    rows.forEach(row => table.appendChild(row));
}

// Funktion zum Anwenden von Filtern
function applyFilter() {
    const filter = document.getElementById("filter").value;
    const table = document.getElementById("emissions-table");
    const rows = Array.from(table.rows).slice(1);

    let sortFunction;

    switch (filter) {
        case "country-asc":
            sortFunction = (a, b) => a.cells[0].innerText.localeCompare(b.cells[0].innerText);
            break;
        case "country-desc":
            sortFunction = (a, b) => b.cells[0].innerText.localeCompare(a.cells[0].innerText);
            break;
        case "company-asc":
            sortFunction = (a, b) => a.cells[1].innerText.localeCompare(b.cells[1].innerText);
            break;
        case "company-desc":
            sortFunction = (a, b) => b.cells[1].innerText.localeCompare(a.cells[1].innerText);
            break;
        case "co2-asc":
            sortFunction = (a, b) => parseFloat(a.cells[2].innerText.replace(/,/g, '')) - parseFloat(b.cells[2].innerText.replace(/,/g, ''));
            break;
        case "co2-desc":
            sortFunction = (a, b) => parseFloat(b.cells[2].innerText.replace(/,/g, '')) - parseFloat(a.cells[2].innerText.replace(/,/g, ''));
            break;
    }

    rows.sort(sortFunction).forEach(row => table.appendChild(row));
}

// Funktion zum Filtern der Tabelle nach Suchbegriffen
function searchTable() {
    const searchTerm = document.getElementById("search").value.toLowerCase();
    const table = document.getElementById("emissions-table");
    const rows = table.getElementsByTagName("tbody")[0].getElementsByTagName("tr");

    Array.from(rows).forEach(row => {
        const cells = row.getElementsByTagName("td");
        const text = Array.from(cells).map(cell => cell.textContent.toLowerCase()).join(" ");
        row.style.display = text.includes(searchTerm) ? "" : "none";
    });
}
