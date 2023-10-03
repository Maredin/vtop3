// Бургер меню
function burger() {
    let burgerBtn = document.querySelector('.burger'),
    burgerMenu = document.querySelector('.burger__block'),
    burgerClose = document.querySelectorAll('.burger__btn'),
    burgerLink = document.querySelectorAll('.burger__block-list');

// меняем крестик

    function showMenu() {
        burgerMenu.style.height = burgerMenu.style.height == '100vh' ? '0' : '100vh';
        
        // Крестик крутится
        burgerClose[0].style.transform = burgerClose[0].style.transform == 'translateY(2px) rotate(-45deg)' ? 'translateY(0px) rotate(0deg)' : 'translateY(2px) rotate(-45deg)';
        burgerClose[1].style.display = burgerClose[1].style.display == 'none' ? 'block' : 'none'; 
        burgerClose[2].style.transform = burgerClose[2].style.transform == 'translateY(0px) rotate(45deg)' ? 'translateY(0px) rotate(0deg)' : 'translateY(0px) rotate(45deg)';
    }


    burgerBtn.addEventListener('click', showMenu);

    burgerLink.forEach(item => {
        item.addEventListener ('click', showMenu);
    });
}

export default burger;