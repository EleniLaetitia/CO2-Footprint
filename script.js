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
    } else if (language === 'en') {
        navLinks[0].textContent = 'Home';
        navLinks[1].textContent = 'About Us';
        navLinks[2].textContent = 'Contact';
    } else if (language === 'ar') {
        navLinks[0].textContent = 'الصفحة الرئيسية';
        navLinks[1].textContent = 'معلومات عنا';
        navLinks[2].textContent = 'اتصال';
    } else if (language === 'he') {
        navLinks[0].textContent = 'דף הבית';
        navLinks[1].textContent = 'עלינו';
        navLinks[2].textContent = 'צור קשר';
    }

    // RTL für Arabisch und Hebräisch setzen
    if (language === 'ar' || language === 'he') {
        document.body.style.direction = 'rtl';
        navMenu.style.justifyContent = 'flex-end';
    } else {
        document.body.style.direction = 'ltr';
        navMenu.style.justifyContent = 'flex-start';
    }

    // Überschrift und Text ändern
    const heading = document.querySelector('main h2');
    const paragraph = document.querySelector('main p');

    if (language === 'de') {
        heading.textContent = 'Willkommen auf unserer CO2-Footprint Website';
        paragraph.textContent = 'Hier können Sie sehen, welche Unternehmen und Länder jährlich wie viel CO2 emittieren. Unsere Arbeit soll für mehr Transparenz sorgen.';
    } else if (language === 'en') {
        heading.textContent = 'Welcome to our CO2 Footprint Website';
        paragraph.textContent = 'Here you can see how much CO2 companies and countries emit annually. Our work is aimed at increasing transparency.';
    } else if (language === 'ar') {
        heading.textContent = 'مرحبًا بكم في موقع CO2 Footprint';
        paragraph.textContent = 'هنا يمكنك أن ترى كمية انبعاثات ثاني أكسيد الكربون التي تصدرها الشركات والدول سنويًا. هدفنا هو زيادة الشفافية.';
    } else if (language === 'he') {
        heading.textContent = 'ברוכים הבאים לאתר טביעת הרגל הפחמנית';
        paragraph.textContent = 'כאן תוכלו לראות כמה פחמן דו חמצני פולטות חברות ומדינות בכל שנה. העבודה שלנו מכוונת לשקיפות מוגברת.';
    }
}
