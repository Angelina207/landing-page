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


