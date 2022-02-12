// burger menu

function burgerMenu(selector) {
    let menu = document.querySelector(selector);
    let burgerBtn = menu.querySelector('.burger-menu__btn');
    let links = menu.querySelectorAll('.head__link');
    let overlay = menu.querySelector('.burger-menu__overlay');

    burgerBtn.addEventListener('click', (e) => {
        e.preventDefault();
        toggleMenu();
    }); 

    [].forEach.call(links, function (el) {
        el.addEventListener("click", () => toggleMenu());
    });
    overlay.addEventListener('click', () => toggleMenu());

    function toggleMenu() {
        menu.classList.toggle("burger-menu__active");
        if (menu.classList.contains("burger-menu__active")) {
            document.body.style.overflow = "scroll";
        } else {
            document.body.style.overflow = "visible";
        }
    }
};
burgerMenu('.burger__menu');


//  scroll

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}