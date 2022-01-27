//  scroll

$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});


// slider to features section

$(document).ready(function() {
    let position = 0;
    const slideToShow = 1;
    const slideToScroll = 1;
    const container = $('.slide-container');
    const track = $('.slide-track');
    const item = $('.slide-item');
    const btnNext = $('.btn-next');
    const btnPrev = $('.btn-prev');
    const itemsCount = item.length;
    const itemWidth = container.width() / slideToShow;
    const movePosition = slideToScroll * itemWidth;

    item.each(function (index, item) {
        $(item).css({
            minWidth: itemWidth,
        });
    });

    btnPrev.click(function(){
        position  += movePosition;

        setPosition();
        checkBtns();
    });

    btnNext.click(function(){
        position  -= movePosition;

        setPosition();
        checkBtns();
    });

    const setPosition = function() {
        track.css({
            transform: `translateX(${position}px)`
        });
    };

    const checkBtns = function() {

        btnPrev.prop('disabled', position === 0);
        btnNext.prop('disabled', position <= - (itemsCount - slideToShow) * itemWidth
        
        );
    };

    checkBtns();
});


// burger menu

function burgerMenu(selector) {
    let menu = $(selector);
    let burgerBtn = menu.find('.burger-menu__btn');
    let links = menu.find('.head__link');
    let overlay = menu.find('.burger-menu__overlay');

    burgerBtn.on('click', (e) => {
        e.preventDefault();
        toggleMenu();
    }); 

    links.on('click', () => toggleMenu());
    overlay.on('click', () => toggleMenu());

    function toggleMenu() {

        menu.toggleClass('burger-menu__active');

        if (menu.hasClass('burger-menu__active')) {
            $('body').css('overflow', 'hidden');
        } else {
        $('body').css('overflow', 'visible');
    }
}
}

burgerMenu('.burger__menu');