
$('#button-1').on('click', function(){
 
    
    $('.form-modal').bPopup({
        closeClass: 'close-modal',
        opacity: 0.2,
        position: ['auto', 100],
        content:'iframe', //'ajax', 'iframe' or 'image'
        contentContainer:'.form-modal__iner',
        loadUrl:'https://forms.amocrm.ru/forms/assets/js/amoforms.js?1628163650',
        onOpen: function(){
            
            
        },
    });
    
})

