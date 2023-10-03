function lang() {
    const btnLang = document.querySelector('.header__edit-lang');
    btnLang.style.userSelect = 'none';
    
    function clickLang() {
        const lang = document.querySelector('.header__edit-lang-click');
        (lang.textContent == 'EN') ? lang.textContent = 'RU' : lang.textContent = 'EN';
    }
    
    btnLang.addEventListener('click', clickLang);
}


export default lang;