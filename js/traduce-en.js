const buttonLanguage = document.querySelector("#button-lenguaje");

buttonLanguage.addEventListener("click", () => {
    localStorage.setItem('language', 'es');
})