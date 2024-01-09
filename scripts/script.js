// scripts/script.js

document.addEventListener('DOMContentLoaded', function () {
    const languageDropdown = document.querySelector('.dropdown');
    const menuItems = document.querySelectorAll('.menu-item');

    function setLanguageAndURL(selectedLanguage) {
        translatePage(selectedLanguage);

        localStorage.setItem('selectedLanguage', selectedLanguage);
    }

    languageDropdown.addEventListener('click', function () {
        this.classList.toggle('active');
    });

    document.querySelectorAll('.dropdown-content a').forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const selectedLanguage = this.getAttribute('data-language');

            setLanguageAndURL(selectedLanguage);

            languageDropdown.classList.remove('active');
        });
    });

    function translatePage(language) {
        const translatedTexts = translations[language];

        if (translatedTexts) {
            Object.keys(translatedTexts).forEach(function (key) {
                const elements = document.querySelectorAll(`[data-translate="${key}"]`);
                elements.forEach(function (element) {
                    element.innerHTML = translatedTexts[key];
                });
            });
        }
    }

    const storedLanguage = localStorage.getItem('selectedLanguage');
    const selectedLanguage = storedLanguage || 'en'; //default language
    setLanguageAndURL(selectedLanguage);
});