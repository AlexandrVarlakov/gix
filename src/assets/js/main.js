var timer = 4000;
    var curTime = 0;
    var percentageProgress = 0;
    var circle = document.querySelector('.progress');
    if (circle !== null){
        var radius = circle.getAttribute('r');
        var circleLength = 2 * Math.PI * radius;

        var moveDerection = 'forward';
        circle.setAttribute('stroke-dashoffset', circleLength);
    }
    

    




/*Функция вставляет черные стрелки в кнопки навигации slick

Важно!!! Функция вешается на событие инициализации слайдера, поэтому ее необходимо объявить до инициализации слайдера

*/
function insertBlackArrow(slider){
    $(slider).on('setPosition', function(){
        $(this).find('.slick-next').html(
            '<svg width="62" height="16" viewBox="0 0 62 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="black-arrow">'+ 
                '<path d="M1.59375 8.07104H58.5777" stroke="#2A323E" stroke-width="2" stroke-linecap="square"/>'+
                '<path d="M52.7998 1L59.8709 8.07107L52.7998 15.1421" stroke="#2A323E" stroke-width="2"/>'+
            '</svg>'
        );
        $(this).find('.slick-prev').html(
            '<svg width="62" height="16" viewBox="0 0 62 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="black-arrow">'+
                '<path d="M60.2773 8.07104L3.29341 8.07104" stroke="#2A323E" stroke-width="2" stroke-linecap="square"/>'+
                '<path d="M9.07129 15.1421L2.00022 8.07102L9.07129 0.999954" stroke="#2A323E" stroke-width="2"/>'+
            '</svg>'
    
        )
    });
    
      
    
}

function insertWhiteArrow(slider){
    $(slider).on('init', function(){
        $(this).find('.slick-next').html(
            '<svg width="61" height="18" viewBox="0 0 61 18" fill="none" xmlns="http://www.w3.org/2000/svg" class="white-arrow">'+
                '<path d="M1.1582 8.87199H58.1422" stroke="white" stroke-width="2" stroke-linecap="square"/>'+
                '<path d="M52.3638 1.10107L59.4348 8.87196L52.3638 16.6429" stroke="white" stroke-width="2"/>'+
            '</svg>'

        );
    });
    
    $(slider).on('init', function(){
        $(this).find('.slick-prev').html(
            '<svg width="62" height="18" viewBox="0 0 62 18" fill="none" xmlns="http://www.w3.org/2000/svg" class="white-arrow">'+
                '<path d="M60.2769 8.77083L3.2929 8.77083" stroke="white" stroke-width="2" stroke-linecap="square"/>'+
                '<path d="M9.07129 16.5417L2.00022 8.77086L9.07129 0.99997" stroke="white" stroke-width="2"/>'+
            '</svg>'
            
    
        )
    })
    
}





/*
    Обработка светлых чекбоксов
*/

let checkboxes_l = document.querySelectorAll('.checkbox-l__checkbox');

checkboxes_l.forEach( (cb) => {
    if ( cb.checked ) {
        cb.parentElement.classList.add('checkbox-l_checked');
    } else{
        cb.parentElement.classList.remove('checkbox-l_checked');
    }
    
    cb.onclick = function(){
        if ( this.checked ) {
            this.parentElement.classList.add('checkbox-l_checked');
        } else{
            this.parentElement.classList.remove('checkbox-l_checked');
        }
    }
})


$('.checkbox-d__checkbox').each(function(i){
    if ( $(this).prop('checked') ) {
        $(this).parent().addClass('checkbox-d_checked');
    }
})

$('.checkbox-d__checkbox').on('change', function(){
    if ( $(this).prop('checked') ) {
        
        $(this).parent().addClass('checkbox-d_checked');
    } else {
        $(this).parent().removeClass('checkbox-d_checked');
    }
})


/*****КОНЕЦ: Обработка светлых чекбоксов******/

/* Обработка переходов по форме регистрация / авторизация */

let auth_items = document.querySelectorAll('.auth-v__item');

function clearAuthSelect(itemsList){
    itemsList.forEach( (item) => {
        item.classList.remove('auth-v__item_active');
    })
}


auth_items.forEach( (item) => {
    item.onclick = function(){
        clearAuthSelect(auth_items);
        this.classList.add('auth-v__item_active');

        let form_container = this.parentElement.parentElement.parentElement.querySelector('.form-container');

        
        if ( this.getAttribute('data-item') == 'sing-in'){
            form_container.classList.remove('form-container_singup');
        } else{
            form_container.classList.add('form-container_singup');
        }
    }
})

/***** КОНЕЦ: Обработка переходов по форме регистрация / авторизация *******/

/*Открываем pop-up*/

let cart_btn = document.querySelectorAll('.cart-btn');

cart_btn.forEach((item)=>{
    item.onclick = function(){
        $('.modalcart').bPopup({
            closeClass: 'modal__close',
           
        });
    }
})


let complectModal;
$('.checkbox-l-c').on('click', function(){
    complectModal = $('.modal-complect').bPopup({
        closeClass: 'modal-complect__close',
        
    });
})
/*
$('.cp-set-add-cart').on('click', function(){

    $('.cp-set-right-col_visible').clone().appendTo('.cp-set-container_modal-conainer');


    complectModal = $('.modal-complect').bPopup({
        closeClass: 'modal-complect__close',
        onClose: function(){
            $('.cp-set-container_modal-conainer').find('.cp-set-right-col_visible').remove();
        }
    });
})
*/
$('.complect-btn__apply').on('click', function(){
    complectModal.close();
})
$('.complect-btn__cancel').on('click', function(){
    complectModal.close();
})



let auth_btn = document.querySelectorAll('.auth-btn');

auth_btn.forEach( (item)=>{
    item.onclick = function(){
        $('.modal-auth').bPopup({
            closeClass: 'modal__close',
        });
    }
})




let btn_call = document.querySelector('.footer__btn-call');

btn_call.onclick = function(){
    $('.callback').bPopup({
        closeClass: 'modal__close',
    });
}






let btn_question = document.querySelector('.footer__btn-question');

btn_question.onclick = function(){
    $('.write-us').bPopup({
        closeClass: 'modal__close',
    });
}

/********КОНЕЦ: Открываем pop-up************/

/*Открываем дроп-меню*/

let openDrop = document.querySelector('.open-drop');

openDrop.onclick = function(){
    
}

/********КОНЕЦ: Открываем дроп-меню********/


/*Открываем выпадающее меню*/

    $('.has-child').hover(
        function(){
            $(this).addClass('open-child');
        }, 

        function(){
            $(this).removeClass('open-child');
        }
    );




    $('.has-child').on('click', function(e){
        
        if ( $(this).hasClass('open-child') ) {
            e.stopPropagation();
            $(this).removeClass('open-child');
            $(this).find('.open-child').removeClass('open-child');
            
        } else {
            e.stopPropagation();
            
            if (  $(this).siblings('.open-child').length > 0 ) {
                $(this).siblings('.open-child').find('.open-child').removeClass('open-child');
                $(this).siblings('.open-child').removeClass('open-child');
            }

            $(this).addClass('open-child');
        }
        


    });
/*КОНЕЦ: Открываем выпадающее меню*/


/*Открываем закрываем drop ОЧЕРЕДНОЙ ЧЕРНОВИК*/

$('.close-drop').on('click', function(){
    $(this).css('display', 'none');
    
    if ( $('.header').hasClass('header_dark') === false ){
        $('.drop-box').css('z-index', '9999');
    }
    
    
    
    $('.open-drop').css('display', 'block');
    $('.drop-box').addClass('hideDrop');
    $('.header').removeClass('l-to-d-header');
    
    
    setTimeout( ()=>{
        $('.drop-box').css('display', 'none');
        $('.drop-box').removeClass('hideDrop');
        $('.drop-box').removeAttr('style');
        $('.header').removeAttr('style');
    }, 800);
    
}) ; 
$('.open-drop').on('click', function(){
    $(this).css('display', 'none');
    $('.close-drop').css('display', 'block');
    $('.header').css('position', 'fixed');
    $('.header').css('z-index', '1000');
    $('.drop-box').css('display', 'flex');
    
    if ( $('.header').hasClass('header_dark') === false ){
        $('.header').addClass('l-to-d-header');
    }

}) ; 

$('.open-drop_mob').on('click', function(){
    
    $('.drop-box').css('display', 'flex');
    $(this).css('display', 'none');

    $('.close-drop_mob').css('display', 'flex');

    $('.header').css('position', 'fixed');
    $('.header').css('z-index', '1000');
    $('.drop-box').css('display', 'flex');
    if ( $('.header').hasClass('header_dark') === false ){
        $('.header').addClass('l-to-d-header');
    }
}) ; 

$('.close-drop_mob').on('click', function(){

    if ( $('.header').hasClass('header_dark') === false ){
        $('.drop-box').css('z-index', '9999');
    }

    $('.drop-box').addClass('hideDrop');
    $(this).css('display', 'none');
    $('.open-drop_mob').css('display', 'flex');
    $('.header').removeClass('l-to-d-header');
    
    
    setTimeout( ()=>{
        $('.drop-box').css('display', 'none');
        $('.drop-box').removeClass('hideDrop');
        $('.drop-box').removeAttr('style');
        $('.header').removeAttr('style');
    }, 800);

    
}) ; 

/*КОНЕЦ: Открываем закрываем drop*/



/*Слайдер комметариев*/
insertBlackArrow('.ac-reviews-list');
$('.ac-reviews-list').slick({
            variableWidth: true,
            variableHeight: false,
            dots: false,
            arrows: true,
            infinite: false,
            
            
})

/*КОНЕЦ: Слайдер комметариев*/



$(document).ready(function(){

    



    if (  $(window).width() <= 992) {
        $( '.cp-about-product-nav' ).slick({
            variableWidth: true,
            variableHeight: true,
            arrows: true,
            infinite: false,
            slidesToScroll: 1,
        });
    } 

        if ( circle !== null ){
            circle.setAttribute('stroke-dasharray', circleLength);

    
            let btn = $('.hh-slider').find('li.slick-active');
            $('.circle-anim').css('opacity', '1');
            let top = $(btn).offset().top;
            let left = $(btn).offset().left;
    
            $('.circle-anim').css('top', +top + ( -1 )+ 'px');
            $('.circle-anim').css('left', +left + (-1) +'px');
        
    
    
            let circleInterval = setInterval(()=>{
                curTime += 10;
                percentageProgress = curTime / timer;
                
                if ( percentageProgress >= 1) { 
                    $('.circle-anim').css('opacity', '1');
                    circle.setAttribute('stroke-dashoffset', circleLength);
        
                    if ( moveDerection == 'forward' ) {
                        $('.hh-slider').slick('slickNext');
                    } else {
                        $('.hh-slider').slick('slickPrev');
                    }
                    
                    curTime = 0;
                } else {
                    
                    circle.setAttribute('stroke-dashoffset', circleLength - circleLength * percentageProgress);
                }
            }, 10)
    
        }
        


    if (  $(window).width() <= 640) {
        let t = $( '.c-p-steps' ).slick({
            variableWidth: true,
            variableHeight: true,
            dots: false,
            arrows: false,
            infinite: false,
            slidesToScroll: 1,
            
        }) ; 
    }
    if (  $(window).width() <= 992) {
        insertWhiteArrow('.inx-adv-row');
        $( '.inx-adv-row' ).slick({
            variableWidth: true,
            variableHeight: true,
            arrows: true,
            infinite: false,
            slidesToScroll: 1,
        });
    } 
    

    if (  $(window).width() <= 992) {
        insertBlackArrow('.company-catalog-col__inner');

        let t = $( '.company-catalog-col__inner' ).slick({
            variableWidth: true,
            variableWidth: true,
            dots: false,
            arrows: true,
            infinite: false,
            slidesToScroll: 1,
            slidesToShow: 1,
        }) ; 
    }

    if (  $(window).width() <= 768) {
        $( '.b-filter-container' ).slick({
            variableWidth: true,
            dots: false,
            arrows: false,
            infinite: false,
        }) ;

        


        if (  $(window).width() <= 768) {
           let t = $( '.brands__list' ).slick({
                variableWidth: true,
                dots: false,
                arrows: false,
                infinite: true,
            }) ;

            $('.brand-slick-nav__prev').on('click', function(){
                $( '.brands__list' ).slick('slickPrev');
               
            });
            $('.brand-slick-nav__next').on('click', function(){
                
                $( '.brands__list' ).slick('slickNext');
            })
        }
        

    }
})





insertWhiteArrow('.hh-slider');
var hh = $('.hh-slider').slick({
    variableWidth: false,
    variableHeight: false,
    dots: true,
    arrows: true,
    infinite: false,
    slidesToScroll: 1,
    slidesToShow: 1,
    
    
});










$('.hh-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    $('.m-slider-block__text-content').css('display', 'none');
    $('.m-slider-block__text-content').removeClass('slideTextShowRight_s');
    $('.m-slider-block__text-content').removeClass('slideTextShowLeft_s');


    $('.circle-anim').css('opacity', 0);

    curTime = 0 ;


    if (nextSlide > currentSlide){
        $('.m-slider-block__text-content[data-sheet="'+nextSlide+'"]').addClass('slideTextShowRight_s');
    }

    if (nextSlide < currentSlide){
        $('.m-slider-block__text-content[data-sheet="'+nextSlide+'"]').addClass('slideTextShowLeft_s');
    }

    $('.m-slider-block__text-content[data-sheet="'+nextSlide+'"]').css('display', 'block');
})



$('.hh-slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
        let btn = $('.hh-slider').find('li.slick-active');
        circle.setAttribute('stroke-dashoffset', circleLength);
        $('.circle-anim').css('opacity', '1');
        let top = $(btn).offset().top;
        let left = $(btn).offset().left;

        $('.circle-anim').css('top', +top + ( -1 )+ 'px');
        $('.circle-anim').css('left', +left + (-1) +'px');
        curTime = 0;

       if ( currentSlide >= slick.slideCount - 1 ){
           moveDerection = 'back'
       } 
       if ( currentSlide == 0 ){
            moveDerection = 'forward';
       }
})

/*Слайдер фото со страницы blog-news*/

insertBlackArrow('.news-photo-slider');

$('.news-photo-slider').slick({
    variableWidth: false,
    variableHeight: false,
    dots: false,
    arrows: true,
    infinite: false,
});

/*КОНЕЦ: Слайдер фото со страницы blog-news*/



/*Страница Карточка продукта. "Большой" Слайдер фото товара*/

insertBlackArrow('.cp-big-slider');

$('.cp-big-slider').slick({
    variableWidth: false,
    variableHeight: false,
    dots: false,
    arrows: true,
    infinite: false,
    slidesToScroll: 1,
    slidesToShow: 1,
    asNavFor: '.cp-small-slider'
});

/*КОНЕЦ:Страница Карточка продукта. "Большой" Слайдер фото товара*/

$('.cp-small-slider').slick({
    variableWidth: false,
    variableHeight: false,
    dots: false,
    arrows: false,
    infinite: false,
    slidesToScroll: 1,
    slidesToShow: 5,
    focusOnSelect: true,
    asNavFor: '.cp-big-slider'
});

/*Слайдер Новостей блога*/

insertBlackArrow('.news-slider__inner');

$('.news-slider__inner').slick({
    variableWidth: true,
    variableHeight: false,
    dots: false,
    arrows: true,
    infinite: false,
    slidesToScroll: 1,
    slidesToShow: 3,

    responsive: [
        {
          breakpoint: 1025,
          settings: {
            variableWidth: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            
          }
        },
    ]


});

/*Конец: Слайдер Новостей блога*/


insertBlackArrow('.promo-slider__inner');
$('.promo-slider__inner').slick({
    variableWidth: true,
    variableHeight: false,
    dots: false,
    arrows: true,
    infinite: false,
    slidesToScroll: 1,
    slidesToShow: 1,

    

});



//Обработка клика по кнопки сортировки

$('.type-sort').on('click', function(){
    let sort = +( $(this).attr('data-sort-state'));
    sort++;
    if (sort > 2) sort = 0;

    $(this).attr('data-sort-state', sort);
})




$('.drop-sort').on('click', function(){
    if ( $(this).attr('data-state') == 'rolled' ){
        $('.drop-sort__sort-list').show(400);
        $(this).attr('data-state', 'deploy');
    } else{
        $('.drop-sort__sort-list').hide(400);
        $(this).attr('data-state', 'rolled');
    }

})

$('.drop-sort__sort-item').on('click', function(e){
    e.stopPropagation();
    $('.drop-sort__current-sort').html( $(this).html() );
    $('.drop-sort__sort-list').hide(400);
    $('.drop-sort').attr('data-state', 'rolled');
})


$('.filter-block__title-block').on('click', function(){
    
    if (  $(this).hasClass('filter-block__list-rolled')  ){
        $(this).removeClass('filter-block__list-rolled');

        $(this).siblings(".filter-block__list").show(500);
    } else {
        $(this).addClass('filter-block__list-rolled');
        $(this).siblings(".filter-block__list").hide(500);
    }
})

$('.filter-block__show-all').on('click', function(){

    let itemWrap = $(this).parent();

    if (  $(this).hasClass('filter-block__show-all-clicked')  ){
        itemWrap.siblings(".filter-block__hidden-item").hide(700);
        $(this).removeClass('filter-block__show-all-clicked');
        $(this).html('Посмотреть все');
    } else {
        itemWrap.siblings(".filter-block__hidden-item").show(700);
        $(this).addClass('filter-block__show-all-clicked');
        $(this).html('Основные');
    }
})

//Сброс фильтра
$('.f-panel__reset-btn').on('click', function(){
    let panel = $(this).parent().parent();
    

    panel.find('.checkbox-d_checked').removeClass('checkbox-d_checked');
    panel.find('.checkbox-d__checkbox').removeAttr("checked");
    panel.find('.filter-block__input-range').val('');
})

$('body').on('mouseover', '.c-product-wrap', function(){
    
        let h = $(this).height();
        let textH = $(this).find('.c-product__info-text').height();
        $(this).css('height', h + 'px');
        $(this).find('.c-product__info-text').css('height', textH + 'px');
        $(this).children('.c-product').css('position', 'absolute');
        $(this).children('.c-product').css('height', 'auto');
        $(this).children('.c-product').css('min-height', '100%');
        
        $(this).find('.c-product__buy-click-wrap').css('display', 'block');
});

$('body').on('mouseleave', '.c-product-wrap', function(){
    $(this).css('height', '');
        $(this).children('.c-product').css('position', '');
        $(this).find('.c-product__buy-click-wrap').css('display', '');
        $(this).find('.c-product__info-text').css('height', '');
        $(this).children('.c-product').css('height', '');
        $(this).children('.c-product').css('min-height', '');
});








$('.c-p-i-product__wrap').hover(
    function(
    ){
        let h = $(this).height();
        let textH = $(this).find('.c-product__info-text').height();
        $(this).css('height', h + 'px');
        
        
        $(this).find('.c-product__info-text').css('height', textH + 'px');
        $(this).children('.c-product').css('position', 'absolute');
        $(this).children('.c-product').css('height', 'auto');
        $(this).children('.c-product').css('min-height', '100%');
        $(this).children('.c-product').css('border-radius', '0 0 11px 11px');
        $(this).children('.c-product').css('border-color', 'transparent');


        $(this).find('.c-product__buy-click-wrap').css('display', 'block');
    },
    function(){
        $(this).css('height', '');
        $(this).children('.c-product').css('position', '');
        $(this).find('.c-product__buy-click-wrap').css('display', '');
        $(this).find('.c-product__info-text').css('height', '');
        $(this).children('.c-product').css('height', '');
        $(this).children('.c-product').css('min-height', '');
        $(this).children('.c-product').css('border-radius', '');
        $(this).children('.c-product').css('border-color', '');
    }
)


/*

$('.c-p-i-product__wrap').hover(
    function(
    ){
        let h = $(this).height();
        let textH = $(this).find('.c-product__info-text').height();
        $(this).css('height', h + 'px');
        
        
        $(this).find('.c-product__info-text').css('height', textH + 'px');
        $(this).children('.c-product').css('position', 'absolute');
        $(this).children('.c-product').css('height', 'auto');
        $(this).children('.c-product').css('min-height', '100%');
        

        $(this).find('.c-product__buy-click-wrap').css('display', 'block');
    },
    function(){
        $(this).css('height', '');
        $(this).children('.c-product').css('position', '');
        $(this).find('.c-product__buy-click-wrap').css('display', '');
        $(this).find('.c-product__info-text').css('height', '');
        $(this).children('.c-product').css('height', '');
        $(this).children('.c-product').css('min-height', '');
    }
)
*/



insertBlackArrow('.c-p-i-products-list');
$('.c-p-i-products-list').slick({
    variableWidth: true,
    variableHeight: true,
    dots: false,
    arrows: true,
    infinite: false,
    slidesToScroll: 1,
    slidesToShow: 3,

    responsive: [
        {
          breakpoint: 769,
          settings: {
            variableWidth: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            
          }
        },
    ]
});

/*Слайдер на главной странице "Новинки"*/



insertBlackArrow('.inx-novelty-list');



$('.inx-novelty-list').slick({
    variableWidth: false,
    variableHeight: true,
    dots: false,
    arrows: true,
    infinite: false,
    slidesToScroll: 1,
    slidesToShow: 4,

    responsive: [
        {
            breakpoint: 1601,
            settings: {
              variableWidth: true,
              
              
            }
          },
        
        {
          breakpoint: 769,
          settings: {
            variableWidth: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            
          }
        },
    ]
});

$('.inx-search-tag').on('click', function(){
    
    $('.inx-input-search').focus();
    $('.inx-input-search').val($(this).html());
    
    
})

/*КОНЕЦ: Слайдер на главной странице "Новинки"*/


/*Слайдер на главной странице "Хиты продаж"*/



insertBlackArrow('.inx-hits-list');

$('.inx-hits-list').slick({
    variableWidth: false,
    variableHeight: true,
    dots: false,
    arrows: true,
    infinite: false,
    slidesToScroll: 1,
    slidesToShow: 4,

    responsive: [
        {
            breakpoint: 1601,
            settings: {
              variableWidth: true,
              
              
            }
          },
        
        {
          breakpoint: 769,
          settings: {
            variableWidth: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            
          }
        },
    ]
});

/*КОНЕЦ: Слайдер на главной странице "Хиты продаж"*/

/* Страница карточка продукта. Слайдер "Комплектом будет дешевле"*/

insertBlackArrow('.cp-set-right-col__inner');

$('.cp-set-right-col__inner').slick({
    variableWidth: true,
    variableHeight: false,
    dots: false,
    arrows: true,
    infinite: false,
    slidesToScroll: 1,
    
})
/* КОНЕЦ: Страница карточка продукта. Слайдер "Комплектом будет дешевле"*/





$('.mob-filter-btn').on('click', function(){
    let panel = $(this).parent().parent();

    if ( panel.hasClass('mobile-filter-outer_open')  === false){
        panel.addClass('mobile-filter-outer_open');

        panel.find('.mobile-filter-panel').show('200');
        panel.find('.mobile-filter').css('border-radius', '10px 10px 0 0');

        $(this).html('Закрыть');
    } else {
        panel.removeClass('mobile-filter-outer_open');

        panel.find('.mobile-filter-panel').hide('200');
        panel.find('.mobile-filter').css('border-radius', '');

        $(this).html('Фильтр');
    }

    
    
})

//Страница "Доставка"

//Обработка меню

$('.delivery-menu__item').on('click', function(){
    if ( $(this).hasClass('delivery-menu__item_active') === false ){
        let curActive = $('.delivery-menu__item_active').attr('data-item');

        let curPage = $('.delivery-menu__item_active').attr('data-item');

        $('.delivery-menu__item_active').removeClass('delivery-menu__item_active');


        $(this).addClass('delivery-menu__item_active');

        let openPage = $(this).attr('data-item');


        switch ( curPage ) {
            case '0': $('.payment-col').css('display', 'none'); break;
            case '1': $('.delivery-col').css('display', 'none'); break;
            case '2': $('.guarantee-col').css('display', 'none'); break;
        }

        switch ( openPage ) {
            case '0': $('.payment-col').show(400); break;
            case '1': $('.delivery-col').show(400); break;
            case '2': $('.guarantee-col').show(400); break;
        }


    }
})



//Корзина. Открываем выпадающий список
$('.c-p-cart__qty-block').on('click', function(){
    if ( $(this).attr('data-state') == 'rolled' ){
        $(this).find('.c-p-cart__qty-list').show(300);
        $(this).attr('data-state', 'deploy');
    } else {
        $(this).find('.c-p-cart__qty-list').hide(300);
        $(this).attr('data-state', 'rolled');
    }
})
//Корзина. Выбор элемента выпадающего списка
$('.c-p-cart__qty-item').on('click', function(e){
    e.stopPropagation();

    let block = $(this).parent().parent();

    block.attr('data-state', 'rolled');
    block.find('.c-p-cart__qty-cur-value').html($(this).html());
    block.find('.c-p-cart__qty-list').hide(300);
    

})

//Удаляем элемент
$('.c-p-cart-item-del').on('click', function(){
    $(this).parent().parent().remove();
})


//Корзина. Фокус на поле

$('.form-input').on('focus', function(){
    $(this).siblings('.input-label').css('opacity', 1);
})

$('.form-input').on('blur', function(){

    if ( $(this).val().length == 0 ) 
        $(this).siblings('.input-label').css('opacity', 0);
})



//Фокус на поле с паролем
$('.form-password').on('blur', function(){

    if ( $(this).val().length == 0 ) 
        $(this).parent().parent().find('.input-label').css('opacity', 0);
})

$('.form-password').on('focus', function(){
    $(this).parent().parent().find('.input-label').css('opacity', 1);
})



//Корзина. Выбор формы

$('.a-c-s-form__item').on('click', function(){
    let form = $(this).attr('data-form');
    $('.a-c-s-form__item_active').removeClass('a-c-s-form__item_active');
    $(this).addClass('a-c-s-form__item_active');


    if ( form == 'auth' ){
        $('.a-c-f-personal').removeClass('form-active');
        $('.a-c-f-auth').addClass('form-active');
    } else {
        $('.a-c-f-personal').addClass('form-active');
        $('.a-c-f-auth').removeClass('form-active');
    }
})


//Клик на показ пароля 
$('.cab-show-hide-p').on('click', function(){
    if ( $(this).hasClass('cab-show-hide-p_active') ){
        $(this).removeClass('cab-show-hide-p_active');
        $(this).siblings('.form-password').attr('type', 'password');
    } else {
        $(this).addClass('cab-show-hide-p_active');
        $(this).siblings('.form-password').attr('type', 'text');
    }
})

//Устанавливаем активный radio
$('.c-p-radio-outer').on('click', function(){
    $('.c-p-radio-outer').removeClass('c-p-radio__active');
    $(this).addClass('c-p-radio__active');

})


$('input[name="place-divelery"]').on('change', function(){
    //    console.log($(window).width());

    if ( $(window).width() > 768 ){
        switch ( $(this).val() ){
            case 'inMoscow' : 
                $('.a-c-f-city').css('display', 'none');
                $('.c-p-address-inputs').css('display', 'block');
                break;
            case 'inMoscowExpress': 
                $('.a-c-f-city').css('display', 'none');
                $('.c-p-address-inputs').css('display', 'block');
                break;
            case 'inCountry': 
                $('.a-c-f-city').css('display', 'block');
                $('.c-p-address-inputs').css('display', 'block');
                break;
            case 'pickup': 
                $('.c-p-address-inputs').css('display', 'none');
                break;
                
        }
    }
    
})



//Открываем список городов

$('.a-c-f-city').on('click', function(){

    if ( $(this).attr('data-state') == 'rolled' ){
        $(this).find('.a-c-f-city__list').show(300);
        $(this).attr('data-state', 'deploy');
    } else {
        $(this).find('.a-c-f-city__list').hide(300);
        $(this).attr('data-state', 'rolled');
    }
    
})
//Обрабатываем выбор города
$('.a-c-f-city__list--i').on('click', function(e){
    e.stopPropagation();

    let block = $(this).parent().parent();
    block.find('.a-c-f-city__value').html($(this).html());
    block.find('.city-hidden').val($(this).html());
    block.find('.a-c-f-city__list').hide(300);
    block.attr('data-state', 'rolled');
    

})

//Выбор способа оплаты

$('.c-p-payment-method').on('click', function(){
    $('.c-p-payment-method').removeClass('c-p-payment-method_active');

    $(this).addClass('c-p-payment-method_active');
})


//Переключаем экраны на корзине
$('.c-p-steps__step--c-p-1step').on('click', function(){
    $('.c-p-1step').css('display', 'block');
    $('.c-p-2step').css('display', 'none');
    $('.c-p-3step').css('display', 'none');

    $('.c-p-steps__step').removeClass('c-p-steps__step-active');
    $(this).addClass('c-p-steps__step-active');
})

$('.c-p-steps__step--c-p-2step').on('click', function(){
    $('.c-p-1step').css('display', 'none');
    $('.c-p-2step').css('display', 'block');
    $('.c-p-3step').css('display', 'none');
    $(this).addClass('c-p-steps__step-active');
    $('.c-p-steps__step--c-p-3step').removeClass('c-p-steps__step-active');
})

$('.c-p-steps__step--c-p-3step').on('click', function(){
    $('.c-p-1step').css('display', 'none');
    $('.c-p-2step').css('display', 'none');
    $('.c-p-3step').css('display', 'block');
    $('.c-p-steps__step--c-p-2step').addClass('c-p-steps__step-active');
    $(this).addClass('c-p-steps__step-active');
    
})

$('.c-p-next-step_2').on('click', function(){
    $('.c-p-1step').css('display', 'none');
    $('.c-p-2step').css('display', 'block');
    $('.c-p-3step').css('display', 'none');
    $('.c-p-steps__step--c-p-2step').addClass('c-p-steps__step-active');
    
})

$('.c-p-next-step_3').on('click', function(){
    $('.c-p-1step').css('display', 'none');
    $('.c-p-2step').css('display', 'none');
    $('.c-p-3step').css('display', 'block');
    $('.c-p-steps__step--c-p-3step').addClass('c-p-steps__step-active');
    
})


//Личный кабинет. Открываем/сворачиваем заказ

$('.cab-order__header').on('click', function(){
    let order = $(this).parent().parent();

    if ( order.hasClass('cab-order_active') ) {
        
        order.addClass('cab-hide-order');

        setTimeout(()=>{
            order.removeClass('cab-order_active');
            order.removeClass('cab-hide-order');
        }, 250);
        
        

       
    } else {
        order.addClass('cab-order_active');
        
        
    }

    
})
//Кабинет. Открываем/сворачиваем список товаров в заказе
$('.cab-prod-arrow').on('click', function(){
    let prodctsList = $(this).parent().parent();

    if ( prodctsList.hasClass('cab-order__products_active') ) {

        prodctsList.addClass('cab-order-products-list-hide');

        setTimeout(()=>{
            prodctsList.removeClass('cab-order__products_active');  
            prodctsList.removeClass('cab-order-products-list-hide');
              
        }, 250)

       
    } else {
        prodctsList.addClass('cab-order__products_active');
    }
})

//Личный кабинет обработка выбора вкладки

$('.cab-menu__item').on('click', function(){
    if ( $(this).hasClass('cab-menu__item_active') === false ){
        $('.cab-menu__item').removeClass('cab-menu__item_active');
        $(this).addClass('cab-menu__item_active');

        $('.cab-sheet').css('display', 'none');

        let openSheet = $(this).attr('data-sheet');
        $('.' + openSheet).css('display', 'flex');
    }
})


/*Слайдер на странице "сравнение"*/

insertBlackArrow('.comp-s-list');

$('.comp-s-list').slick({
    variableWidth: true,
    variableHeight: false,
    dots: false,
    arrows: true,
    infinite: false,
});




//После загрузки  показываем активный список
$(document).ready(function(){
    
    let sheet  = $('.comp-list__item_active').attr('data-sheet');
    $('div[data-sheet="'+sheet+'"]').css('display', 'block');

    //console.log($('div[data-sheet]'));
})


$('.comp-list__item').on('click', function(){
    
    if ($(this).hasClass('comp-list__item_active') === false ){
        $('.comp-list__item').removeClass('comp-list__item_active');
        $(this).addClass('comp-list__item_active');

        $('div[data-sheet]').css('display', 'none');
        
        let sheet  = $(this).attr('data-sheet');
        $('div[data-sheet="'+sheet+'"]').css('display', 'block');

    }

})



//Удаляем сравниваемый товар
$('.comp-svg-del').on('click', function(){
    
    
    let list =  $(this).closest('.comp-sheets');

    $(this).parent().parent().remove();

    if (  $(list).find('.comp-s-item').length == 0 ){

        $('.comp-list__item_active').remove();
        $(list).remove();

        if ( $('.comp-list__item').length > 0 ) {
            let item = $('.comp-list__item')[0];
            $(item).addClass('comp-list__item_active');
            let sheet = $(item).attr('data-sheet');
            $('div[data-sheet="'+sheet+'"]').css('display', 'block');
        } else {
            $('.comp-list__empty').css('display', 'block');
        }
    }


    

})

//Удалить весь список
$('.comp-btn-del-sheet').on('click', function(){
    let sheet = $(this).attr('data-sheet');

    $('[data-sheet="'+sheet+'"]').remove();

    if ( $('.comp-list__item').length > 0 ) {
        let item = $('.comp-list__item')[0];
        $(item).addClass('comp-list__item_active');
        let sheet = $(item).attr('data-sheet');
        $('div[data-sheet="'+sheet+'"]').css('display', 'block');
    } else {
        $('.comp-list__empty').css('display', 'block');
    }

})


//Trade in 

//Trade in клик по бренду

$('.ti-brands__item').on('click', function(){
    if ( $(this).hasClass('ti-brands__item_active') === false ) {
        $('.ti-brands__item').removeClass('ti-brands__item_active');

        $(this).addClass('ti-brands__item_active');
    }
})


//Trade in Выбор цыета
$('.color-p__color-block').on('click', function(){
    if ( $(this).hasClass('color-p__color_active') === false  && $(this).attr('data-state') !== 'none'){

        $(this).parent().find('.color-p__color-block').removeClass('color-p__color_active');
        $(this).addClass('color-p__color_active');
    }
})

//Trade in Выбор памяти
$('.ti-momory-option').on('click', function(){
    if ( $(this).hasClass('ti-momory-option_active') === false ){
        $(this).parent().find('.ti-momory-option').removeClass('ti-momory-option_active');
        
        $(this).addClass('ti-momory-option_active');
    }
})

insertBlackArrow('.ti-m-slides-list');
$('.ti-m-slides-list').slick({
    variableWidth: false,
    variableHeight: true,
            dots: false,
            arrows: true,
            infinite: false,
            slidesToScroll: 1,
            slidesToShow: 1,
});



//Универсальный select . Первое использование в trade in
//Открываем список городов

$('.select').on('click', function(){

    if ( $(this).attr('data-state') == 'rolled' ){
        $(this).find('.select__option-list').show(300);
        $(this).attr('data-state', 'deploy');
    } else {
        $(this).find('.select__option-list').hide(300);
        $(this).attr('data-state', 'rolled');
    }
    
})
//Обрабатываем выбор города
$('.select__option').on('click', function(e){
    e.stopPropagation();

    let block = $(this).closest('.select');
    block.find('.select__value').html($(this).html());
    block.find('.select__input-value').val($(this).html());
    block.find('.select__option-list').hide(300);
    block.attr('data-state', 'rolled');
    

})


//Карточка продукта. Клик по выбору объема памяти

$('.memory-p__memory-block').on('click', function(){
    if (  $(this).hasClass('memory-p__memory-block_active') === false && $(this).attr('data-state') !== 'none'){
        $('.memory-p__memory-block').removeClass('memory-p__memory-block_active');
        $(this).addClass('memory-p__memory-block_active');
    }
})

$('.cp-trade-in__btn').on('click', function(){
    if (  $(this).hasClass('cp-trade-in__btn_active') === false ){
        $('.cp-trade-in__btn').removeClass('cp-trade-in__btn_active');
        $(this).addClass('cp-trade-in__btn_active');
    }
})

//Трейд ин 2 . определяем выбран ли чекбокс
$('.cp-checkbox').each(function(i){
    if ( $(this).prop('checked') ){
        $(this).closest('.cp-checkbox-outer').addClass('cp-checkbox-outer_checked');
    } else {
        $(this).closest('.cp-checkbox-outer').removeClass('cp-checkbox-outer_checked');
    }
})



//Трейд ин 2 . клик по чекбоксу
$('.cp-checkbox').on('click', function(){
    if ( $(this).prop('checked') ){
        $(this).closest('.cp-checkbox-outer').addClass('cp-checkbox-outer_checked');
    } else {
        $(this).closest('.cp-checkbox-outer').removeClass('cp-checkbox-outer_checked');
    }
})


$('.cp-about-product-nav__item').on('click', function(){
    if ($(this).hasClass('cp-about-product-nav__item_active') === false ) {
        $('.cp-about-product-nav__item').removeClass('cp-about-product-nav__item_active');
        $(this).addClass('cp-about-product-nav__item_active');


        $('.cp-sheet ').css('display', 'none');
        let dataSheet = $(this).attr('data-sheet');

        if ( dataSheet == 'cp-sheet-review' ){
            $('.'+ dataSheet).css('display', 'block');
        } else {
            $('.'+ dataSheet).css('display', 'flex');
        }
        
    }
})

$('.cp-btn-roller').on('click', function(){
    if ( $(this).attr('data-content') == 'rolled' ) {
        $(this).children('.cp-btn-roller__text').html('Свернуть');
        $(this).attr('data-content', 'deploy');
        $(this).siblings('.cp-sheet-content-col__inner').removeClass('cp-rolled-content');
    } else{
        $(this).children('.cp-btn-roller__text').html('Развернуть');
        $(this).attr('data-content', 'rolled');
        $(this).siblings('.cp-sheet-content-col__inner').addClass('cp-rolled-content');
    }
})


//Выбор пункта характеристики
$('.cp-sheet-char-list__item').on('click', function(){
    if ($(this).hasClass('cp-sheet-char-list__item_active') === false ) {
        $('.cp-sheet-char-list__item').removeClass('cp-sheet-char-list__item_active');
        $(this).addClass('cp-sheet-char-list__item_active');

        let list = $(this).attr('data-char');

        $('.cp-sheet-char-group').css('display', 'none');

        $(".cp-sheet-char-group[data-char='"+list+"']").css('display', 'block');

    }
})


$('.cp-sheet-faq__question').on('click', function(){
    if ($(this).parent().hasClass('cp-sheet-faq__item_active')){
        $(this).parent().removeClass('cp-sheet-faq__item_active');
        $(this).siblings('.cp-sheet-faq__answer').hide(300);
    } else {
        $(this).parent().addClass('cp-sheet-faq__item_active');
        $(this).siblings('.cp-sheet-faq__answer').show(300);
    }
})

$('.estemation-wrap').on('click', function(){
    if ( $(this).hasClass('estemation-wrap_active') === false ){
        $('.estemation-wrap').removeClass('estemation-wrap_active');

        $(this).addClass('estemation-wrap_active');
    }
})


//Trade in 2. Вкладки наборов
$('.checkbox-l-m').on('click', function(){
    $('.checkbox-l-m').removeClass('checkbox-l-m_checked');
    $(this).addClass('checkbox-l-m_checked');
})


$('.cp-type-set__tab').on('click', function(){
    if ( $(this).hasClass('cp-type-set__tab_active') === false ){
        $('.cp-type-set__tab').removeClass('cp-type-set__tab_active');

        $(this).addClass('cp-type-set__tab_active');

        let sheet = $(this).attr('data-sheet');


        $('.cp-type-set__sheet').removeClass('cp-type-set__sheet_active');

        $(".cp-type-set__sheet[data-sheet='"+sheet+"']").addClass('cp-type-set__sheet_active');

        $('.cp-set-right-col').removeClass('cp-set-right-col_visible')
        $(".cp-set-right-col[data-sheet='"+sheet+"']").addClass('cp-set-right-col_visible')
       
        
    }
})

$('.delete-product-btn').on('click', function(){
    $(this).closest('.c-product-wrap-p').remove();
})

//****Слайдер блогов************** */

let blogSlider = $('.b-news-container-m__inner').slick({
    variableWidth: false,
    variableHeight: true,
            dots: false,
            arrows: false,
            infinite: false,
            slidesToScroll: 1,
            slidesToShow: 1,
})




$('.b-pagination__btn_next').on('click', function(){
    $('.b-news-container-m__inner').slick('slickNext');
})


$('.b-pagination__btn_prev').on('click', function(){
    $('.b-news-container-m__inner').slick('slickPrev');
})

/*
$('.b-news-container-m__inner').on('afterChange', function(event, slick, currentSlide){
    
    if ( currentSlide == 0 ) {
        $('.b-pagination__btn_prev').addClass('b-pagination__btn_end');
    } else {
        $('.b-pagination__btn_prev').removeClass('b-pagination__btn_end');
    }

    
});
*/
$('.b-news-container-m__inner').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    if ( nextSlide == 0 ) {
        $('.b-pagination__btn_prev').addClass('b-pagination__btn_end');
    } else {
        $('.b-pagination__btn_prev').removeClass('b-pagination__btn_end');
    }

    if ( nextSlide >= slick.slideCount-1 ){
        $('.b-pagination__btn_next').addClass('b-pagination__btn_end');
    } else {
        $('.b-pagination__btn_next').removeClass('b-pagination__btn_end');
    }


    $('.b-pagination__btn').removeClass('b-pagination__btn_active');
    $('.b-pagination__btn[data-index="'+nextSlide+'"]').addClass('b-pagination__btn_active');

});

$('.b-pagination__btn').on('click', function(){
    if ( $(this).hasClass('b-pagination__btn_active') === false){
        
        $('.b-pagination__btn').removeClass('b-pagination__btn_active');
        $(this).addClass('b-pagination__btn_active');
        let cur =  +( $(this).attr('data-index') );

        blogSlider.slick('slickGoTo', cur);

        
    }
})
//****************** */


/*Поиск товаров*/

$('.h-nav__search-inp').focus(function(){
    $(this).attr('data-focus', 'focus');
})

$('.h-nav__search-inp').focusout(function(){

    //$('.h-nav__search-results').css('display', 'none');
    
})


$(document).on('click', function(){
    $('.h-nav__search-results').css('display', 'none');
    $('.h-nav__search-inp').val('');
    $('.h-nav__search-results--inner').empty();


    $('.inx-search-form__results').css('display', 'none');
    
    $('.inx-search-form__results--inner').empty();
})


$('.h-nav__search-inp').keyup(function(){
    if ( $(this).val().length >= 3 ){
        $('.h-nav__search-results--inner').empty();
        productsList.forEach( (itemaA) =>{
            let item = '<a class="h-nav__search-results--item" href="'+itemaA.link+'">' + 
                            '<img class="h-nav__search-results--img" src="'+itemaA.image+'" >'+
                            '<p class="h-nav__search-results--text">'+itemaA.productName+'</p>' +
                        '</a>';

            $('.h-nav__search-results--inner').append(item);
        })
            
        
        

        $('.h-nav__search-results').css('display', 'block');
    } else {
        $('.h-nav__search-results').css('display', 'none');
    }
    

})



$('.inx-input-search').keyup(function(){
    if ( $(this).val().length >= 3 ){
        $('.inx-search-form__results--inner').empty();
        productsList.forEach( (itemaA) =>{
            let item = '<a class="inx-search-form__results--item" href="'+itemaA.link+'">' + 
                            '<img class="inx-search-form__results--img" src="'+itemaA.image+'" >'+
                            '<p class="inx-search-form__results--text h4">'+itemaA.productName+'</p>' +
                        '</a>';

            $('.inx-search-form__results--inner').append(item);
        })
            
        
        

        $('.inx-search-form__results').css('display', 'block');
    } else {
        $('.inx-search-form__results').css('display', 'none');
    }
    

})



//Страница поиска

$('.input-search-product').keyup(function(){
    if ( $(this).val().length >= 3 ){
        $('.inx-search-form__results--inner').empty();
        productsList.forEach( (itemaA) =>{
            let item = '<a class="inx-search-form__results--item" href="'+itemaA.link+'">' + 
                            '<img class="inx-search-form__results--img" src="'+itemaA.image+'" >'+
                            '<p class="inx-search-form__results--text h4">'+itemaA.productName+'</p>' +
                        '</a>';

            $('.inx-search-form__results--inner').append(item);
        })
            
        
        

        $('.inx-search-form__results').css('display', 'block');
    } else {
        $('.inx-search-form__results').css('display', 'none');
    }
    

})




let productsList = [
    
    {productName: "Samsung Galaxy 7", image: 'assets/img/products/filter-catalog/1.png', link: "#"},
    {productName: "Samsung Galaxy 8", image: 'assets/img/products/filter-catalog/2.png' , link: "#"},
    {productName: "iPhone 8", image: 'assets/img/products/filter-catalog/3.png' , link: "#"},
    {productName: "Honor XYZ 1", image: 'assets/img/products/filter-catalog/5.png' , link: "#"},
    {productName: "Honor XYZ 2", image: 'assets/img/products/filter-catalog/6.png' , link: "#"},
];

//Обработка клика по svg иконкам
$('body').on('click', '.c-product__svg-icon', function(){
    if (  $(this).attr('data-checked') == 'checked' ){
        $(this).removeAttr('data-checked');
    } else {
        $(this).attr('data-checked', 'checked');
    }
})


//Обработка фокуса / потери фокуса инпута поиска на главной странице

$('.inx-input-search').focus(function(){
    $(this).closest('.inx-search-block__inner').attr('data-focus', 'focused');
})

$('.inx-input-search').focusout(function(){
    $(this).closest('.inx-search-block__inner').removeAttr('data-focus');
})


//Реакция клика на кнопки фильтра
$('.filter-btn').on('click', function(){
    if ( $(this).attr('data-checked') == 'checked' ) {
        $(this).removeAttr('data-checked');
    } else {
        $(this).attr('data-checked', 'checked');
    }
})

//*************ТРАНСФОРМАЦИЯ КАРТОЧЕК ТОВАРА*********************************** */
//Клик по выбору внешнего вида карточек товара
$('.appearance__btn').on('click', function(){

    if ( $(this).hasClass('appearance__btn_active') === false ) {
        //переключаем кнопку
        $('.appearance__btn').removeClass('appearance__btn_active');
        $(this).addClass('appearance__btn_active');


        if ( $('.products-list').hasClass('f-products-list') ){
            $('.products-list').removeClass('f-products-list');
            $('.products-list').addClass('c-product-list');


            $('.f-product').each(function(){
                let prop = '';
                $(this).find('.product-prop__item').each(function(){
                    prop += '<span class="product-prop-item"><span class="product-prop-name">' + $(this).find('.product-prop__name').html() + '</span> <span class="product-prop-value">' + $(this).find('.product-prop__value').html() + '</span>, </span>';
                })

                
                let cProduct = '<div class="c-product-wrap" data-views="'+$(this).attr('data-views')+'" data-vlink ="'+$(this).attr('data-vlink')+'" data-bonuses = "'+$(this).attr('data-bonuses')+'">' +
                                    '<div class="c-product">'+
                                        '<div class="c-product__header">' +
                                            '<div class="promo-state '+ $(this).find('.promo-state').attr('data-promo') + '  promo-state_no subtitle" data-promo ="'+$(this).find('.promo-state').attr('data-promo')+'" data-tpromo ="'+$(this).find('.promo-state').attr('data-tpromo')+'">'+
                                                $(this).find('.promo-state').attr('data-tpromo')+
                                            '</div>'+
                                            '<div class="c-product__rating-right">'+
                                                '<div class="c-product__svg-icon">'+
                                                    '<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">'+
                                                        '<g opacity="0.5">'+
                                                            '<rect x="15" y="8" width="2" height="16" fill="#8E99AB"></rect>'+
                                                            '<rect x="21" y="12" width="2" height="12" fill="#8E99AB"></rect>'+
                                                            '<rect x="9" y="16" width="2" height="8" fill="#8E99AB"></rect>'+
                                                            '<rect x="9" y="6" width="2" height="6" fill="#8E99AB"></rect>'+
                                                            '<rect x="13" y="8.13574" width="2" height="6" transform="rotate(90 13 8.13574)" fill="#8E99AB"></rect>'+
                                                        '</g>'+
                                                    '</svg>'+
                                                '</div>'+
                                                '<div class="c-product__svg-icon">'+
                                                    '<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">'+
                                                        '<g opacity="0.5">'+
                                                            '<path d="M19.0714 6.91699C17.3794 6.91699 15.8876 7.75531 15 9.03152C14.1124 7.75531 12.6206 6.91699 10.9286 6.91699C8.20671 6.91699 6 9.08457 6 11.7591C6 16.6791 15 22.917 15 22.917C15 22.917 24 16.6791 24 11.7591C24 9.08457 21.7933 6.91699 19.0714 6.91699" stroke="#8E99AB" stroke-width="2"></path>'+
                                                        '</g>'+
                                                    '</svg>'+
                                                '</div>'+
                                            '</div>'+
                                        '</div>'+
                                    '<a class="c-product__img-wrap" href="'+$(this).find('.f-product__img-wrap').attr('href') +'">'+
                                        '<img class ="c-product__img" src="'+$(this).find('.f-product__img').attr('src')+'" alt="'+$(this).find('.f-product__img').attr('alt')+'">'+
                                    '</a>'+
                                    '<div class="c-product__views">'+
                                        '<div class="c-product__rating ">'+
                                            '<img src="assets/img/icons/star.png">'+ 
                                            '<span class="small-text product-rating">'+$(this).find('.product-rating').html()+'</span>'+
                                        '</div>'+ 
                                        '<div class="c-product__view-posts">'+
                                            '<a class="c-product__view-posts-link subtitle" href="'+$(this).attr('data-vlink')+'">'+$(this).attr('data-views')+' отзывов</a>'+ 
                                        '</div>'+
                                    '</div>'+ 
                                    '<a class="c-product__info-text" href="'+$(this).find('.f-product__img-wrap').attr('href') +'">'+ '<span class="product-name">' + $(this).find('.f-product__name').html() +' </span>'+ 
                                        prop +
                                    '</a>'+

                                    '<div class="c-product__buy">'+
                                        '<div class="c-product__price">'+
                                            '<p class="c-product__old-price">'+$(this).find('.f-product__old-price').html()+'</p>'+
                                            '<p class="c-product__current-price">'+$(this).find('.f-product__price-value').html()+'</p>'+
                                        '</div>'+
                                        '<button class="c-product__btn-buy">+ В корзину</button>'+
                                    '</div>'+


                                    '<div class="c-product__buy-click-wrap">'+
                                        '<button class="c-product__buy-click button">Купить в 1 клик</button>'+
                                    '</div>'+
                                '</div>'+
                            '</div>';

                
                $(this).remove();
                $('.products-list').append(cProduct);

            })            

        } else {

            $('.products-list').addClass('f-products-list');
            $('.products-list').removeClass('c-product-list');

            $('.c-product-wrap').each(function(){
                
                let prop = '<ul class="product-prop">';

                $(this).find('.product-prop-item').each(function(){
                    prop += '<li class="product-prop__item"><span class="product-prop__name">'+$(this).find('.product-prop-name').html() +'</span><span class="product-prop__value">'+$(this).find('.product-prop-value').html()+'</span></li>';
                });
                prop += '</ul>';

                let fProduct =  '<div class="f-product" data-views="'+$(this).attr('data-views')+'" data-vlink="'+$(this).attr('data-vlink')+ '" data-bonuses="'+ $(this).attr('data-bonuses') +'">' +
                                    '<div class="f-product__about">'+
                                        '<a class="f-product__img-wrap" href="'+$(this).find('.c-product__img-wrap').attr('href')+'">'+
                                            '<img class="f-product__img" src="'+$(this).find('.c-product__img').attr('src')+'" alt="'+$(this).find('.c-product__img').attr('alt')+'">'+
                                        '</a>'+
                                        '<div class="f-product__info-block">'+
                                            '<div class="f-product__rating-block">'+
                                                '<div class="f-product__rating-left">'+
                                                    '<div class="f-product__rating ">'+
                                                        '<img src="assets/img/icons/star.png" >'+
                                                        '<span class="small-text product-rating">'+$(this).find('.product-rating').html()+'</span>'+
                                                    '</div>'+
                                                    '<div class="promo-state '+ $(this).find('.promo-state').attr('data-promo')+ ' subtitle" data-promo ="'+$(this).find('.promo-state').attr('data-promo')+'" data-tpromo="'+$(this).find('.promo-state').attr('data-tpromo')+'">' +
                                                        'акция' +
                                                    '</div>'+
                                                '</div>'+
                                
                                                '<div class="f-product__rating-right">'+
                                                    '<div class="c-product__svg-icon">'+
                                                        '<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">'+
                                                            '<g opacity="0.5">'+
                                                                '<rect x="15" y="8" width="2" height="16" fill="#8E99AB"></rect>'+
                                                                '<rect x="21" y="12" width="2" height="12" fill="#8E99AB"></rect>'+
                                                                '<rect x="9" y="16" width="2" height="8" fill="#8E99AB"></rect>'+
                                                                '<rect x="9" y="6" width="2" height="6" fill="#8E99AB"></rect>'+
                                                                '<rect x="13" y="8.13574" width="2" height="6" transform="rotate(90 13 8.13574)" fill="#8E99AB"></rect>'+
                                                            '</g>'+
                                                        '</svg>'+
                                                    '</div>'+
                                                    '<div class="c-product__svg-icon">'+
                                                        '<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">'+
                                                            '<g opacity="0.5">'+
                                                                '<path d="M19.0714 6.91699C17.3794 6.91699 15.8876 7.75531 15 9.03152C14.1124 7.75531 12.6206 6.91699 10.9286 6.91699C8.20671 6.91699 6 9.08457 6 11.7591C6 16.6791 15 22.917 15 22.917C15 22.917 24 16.6791 24 11.7591C24 9.08457 21.7933 6.91699 19.0714 6.91699" stroke="#8E99AB" stroke-width="2"></path>'+
                                                            '</g>'+
                                                        '</svg>'+
                                                    '</div>'+
                                                '</div>'+
                                            '</div>'+
                                        '<a class="text f-product__name" href="'+$(this).find('.c-product__img-wrap').attr('href')+'">'+$(this).find('.product-name').html()+'</a>'+
                                        prop +
                                    '</div>'+
                                '</div>'+
                            '<div class="f-product__buy">'+
                                '<div class="f-product__price">'+
                                    '<p class="f-product__old-price subtitle">'+$(this).find('.c-product__old-price').html()+'</p>'+
                                    '<p class="f-product__price-value h3">'+$(this).find('.c-product__current-price').html()+'</p>'+
                                    '<p class="f-product__bonus subtitle">'+$(this).attr('data-bonuses')+'</p>'+
                                '</div>'+
                            '<button class="f-product__buy-btn button white">+ В корзину</button>'+
                        '</div>'+
                    '</div>';
                    
                            
                                
                                    
                                    
                                    
                                
                $(this).remove();
                $('.products-list').append(fProduct);
    
                                
    
                            
                        

            })

        }


          

    }

})



//Показываем скрытые категории

$('.show-all-filter-btn').on('click', function(){
    if ( $(this).attr('data-state') == 'hidden'){
        $('.filter-btn_hidden').css('display', 'flex');
        $(this).removeAttr('data-state');
        $(this).html('Основные');
    } else {
        $('.filter-btn_hidden').css('display', 'none');
        $(this).attr('data-state', 'hidden');
        $(this).html('Посмотреть все');
    }
        
})

