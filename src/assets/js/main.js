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