// Funktion zum Sortieren der Tabelle nach Spalten
function sortTable(n) {
    const table = document.getElementById("emissions-table");
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

// Eingabefelder vor Code-Injektionen schützen
document.querySelectorAll('input').forEach(input => {
    input.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/<\/?[^>]+(>|$)/g, "");
    });
});
