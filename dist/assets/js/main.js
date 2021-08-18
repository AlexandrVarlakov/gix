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


/*Открываем закрываем drop*/

$('.close-drop').on('click', function(){
    $('.drop-box').hide(300);
}) ; 
$('.open-drop').on('click', function(){
    $('.drop-box').show(300);
    $('.drop-box').css('display', 'flex');
}) ; 

/*КОНЕЦ: Открываем закрываем drop*/


$(document).ready(function(){
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

$('.news-photo-slider').slick({
    variableWidth: false,
    variableHeight: false,
    dots: false,
    arrows: true,
    infinite: false,
});

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


//Обработка клика по кнопки сортировки

$('.type-sort').on('click', function(){
    let sort = +( $(this).attr('data-sort-state'));
    sort++;
    if (sort > 2) sort = 0;

    $(this).attr('data-sort-state', sort);
})


//Клик по выбору внешнего вида карточек товара
$('.appearance__btn').on('click', function(){

    if ( $(this).hasClass('appearance__btn_active') === false ) {
        $('.appearance__btn').removeClass('appearance__btn_active');
        $(this).addClass('appearance__btn_active');
    }

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