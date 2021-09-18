$('.ssc-form__btn').on('click', function(e){
    e.preventDefault();
    
    


    if ( validateEmail('#email') ) {
        $('#email').val('');
    } else{
        $(this).closest('.ssc-form').addClass('ssc-form_error');
        $('.ssc-form__error').css('display', 'block');

        $(this).css('opacity', '.4');
    }
 

})

$('#email').focus(function(){
    $(this).closest('.ssc-form').removeClass('ssc-form_error');

    $('.ssc-form__error').css('display', 'none');

    $('.ssc-form__btn').css('opacity', '1');
})