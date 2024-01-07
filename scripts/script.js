document.addEventListener("DOMContentLoaded", function () {
  const languageToggleBtn = document.getElementById("languageToggle");
  const languageDropdown = document.getElementById("languageDropdown");
  const defaultLanguage = "ru";
  let currentLanguage = defaultLanguage;

  function updateTextContent() {
      const elements = document.querySelectorAll("[data-translate]");
      elements.forEach((element) => {
          const key = element.getAttribute("data-translate");
          if (translations[currentLanguage] && translations[currentLanguage][key]) {
              element.textContent = translations[currentLanguage][key];
          }
      });
  }

  function changeLanguage(lang) {
      currentLanguage = lang;
      updateTextContent();
      // Скрываем выпадающий список после выбора языка
      languageDropdown.style.display = "none";
  }

  // Обработка выбора языка
  languageDropdown.addEventListener("click", function (event) {
      if (event.target.tagName === "A") {
          const selectedLanguage = event.target.getAttribute("data-language");
          changeLanguage(selectedLanguage);
      }
  });

  updateTextContent();
});