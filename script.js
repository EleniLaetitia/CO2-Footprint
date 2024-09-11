document.getElementById('language').addEventListener('change', changeLanguage);
document.getElementById('search').addEventListener('input', filterTable);
document.getElementById('sort').addEventListener('change', sortTable);

function changeLanguage() {
    const language = document.getElementById('language').value;
    const navMenu = document.getElementById('nav-menu');
    
    const navLinks = navMenu.getElementsByTagName('a');
    if (language === 'de') {
        navLinks[0].textContent = 'Startseite';
        navLinks[1].textContent = 'Über uns';
        navLinks[2].textContent = 'Kontakt';
    } else if (language === 'en') {
        navLinks[0].textContent = 'Home';
        navLinks[1].textContent = 'About Us';
        navLinks[2].textContent = 'Contact';
    } else if (language === 'he') {
        navLinks[0].textContent = 'דף הבית';
        navLinks[1].textContent = 'עלינו';
        navLinks[2].textContent = 'צור קשר';
    }

    if (language === 'he') {
        document.body.style.direction = 'rtl';
        navMenu.style.justifyContent = 'flex-end';
    } else {
        document.body.style.direction = 'ltr';
        navMenu.style.justifyContent = 'flex-start';
    }

    const heading = document.querySelector('main h2');
    const paragraph = document.querySelector('main p');

    if (language === 'de') {
        heading.textContent = 'Willkommen auf unserer CO2-Footprint Website';
        paragraph.textContent = 'Hier können Sie sehen, welche Unternehmen und Länder jährlich wie viel CO2 emittieren. Unsere Arbeit soll für mehr Transparenz sorgen.';
    } else if (language === 'en') {
        heading.textContent = 'Welcome to our CO2 Footprint Website';
        paragraph.textContent = 'Here you can see how much CO2 companies and countries emit annually. Our work is aimed at increasing transparency.';
    } else if (language === 'he') {
        heading.textContent = 'ברוכים הבאים לאתר טביעת הרגל הפחמנית';
        paragraph.textContent = 'כאן תוכלו לראות כמה פחמן דו חמצני פולטות חברות ומדינות בכל שנה. העבודה שלנו מכוונת לשקיפות מוגברת.';
    }
}

function filterTable() {
    const query = document.getElementById('search').value.toLowerCase();
    const rows = document.querySelectorAll('#data-table tbody tr');

    rows.forEach(row => {
        const cells = row.getElementsByTagName('td');
        const match = Array.from(cells).some(cell => cell.textContent.toLowerCase().includes(query));
        row.style.display = match ? '' : 'none';
    });
}

function sortTable() {
    const sortValue = document.getElementById('sort').value;
    const table = document.getElementById('data-table');
    const rows = Array.from(table.querySelectorAll('tbody tr'));

    rows.sort((a, b) => {
        const aCells = a.getElementsByTagName('td');
        const bCells = b.getElementsByTagName('td');
        
        let aValue, bValue;

        switch (sortValue) {
            case 'country-asc':
                aValue = aCells[0].textContent;
                bValue = bCells[0].textContent;
                return aValue.localeCompare(bValue);
            case 'country-desc':
                aValue = aCells[0].textContent;
                bValue = bCells[0].textContent;
                return bValue.localeCompare(aValue);
            case 'company-asc':
                aValue = aCells[1].textContent;
                bValue = bCells[1].textContent;
                return aValue.localeCompare(bValue);
            case 'company-desc':
                aValue = aCells[1].textContent;
                bValue = bCells[1].textContent;
                return bValue.localeCompare(aValue);
            case 'co2-asc':
                aValue = parseFloat(aCells[2].textContent);
                bValue = parseFloat(bCells[2].textContent);
                return aValue - bValue;
            case 'co2-desc':
                aValue = parseFloat(aCells[2].textContent);
                bValue = parseFloat(bCells[2].textContent);
                return bValue - aValue;
            default:
                return 0;
        }
    });

    rows.forEach(row => table.querySelector('tbody').appendChild(row));
}
