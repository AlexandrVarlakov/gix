'use strict';
/**
 * Передаваемые опции:
 * zIndex - z-index контейнера модального окна; Значение по умолчанию из css-класса modal-fog
 * background - фон контейнера модального окна; Значение по умолчанию из css-класса modal-fog
 * displayFog - значение display у активного контейнера; Значение по умолчанию из css-класса modal-fog
 * displayModal -  значение display у активного модального окна; Значение по умолчанию block
 * modalShowAnimation - css-класс анимации добавляемый при открытии модального окна; По умолчанию не добавляется
 * modalHideAnimation -  css-класс анимации добавляемый при закрытиии модального окна; По умолчанию не добавляется
 * closeClasses[] - массив с классами, которые служат селекторами для закрытия окна; по умолчанию только modal-fog
 * closeModalOnFogClick - если передается false, то модальное окно не закрывается при клике; По умолчанию работает как true
 * documentScrolled - если установлен в false,  отключается скролл документа; По умолчанию true.
 * onModalOpen - назначить функцию, которая сработает при открытии модального окна
 * onModalClose - назначить функцию, которая сработает при закрытии модального окна
 */

class easyModal extends EventTarget{
    constructor (_modal, _options = {}){
        super();
        let self = this;
        this.documentYPosition = window.pageYOffset;

        this.options = _options;
        this.modalFog =  this.createFog();
        this.modal = this.getModal(_modal);


        this.modalFlag = this.createFlag();

        this.modal.before( this.modalFlag );
        
        //Проверяем есть ли закрывающие классы
        if  ( 'closeClasses' in this.options ) {
            this.closeClasses = this.options.closeClasses;  
        } else{
            this.closeClasses = [];
        }
        
        if ( 'closeModalOnFogClick' in this.options ){
            if ( this.options.closeModalOnFogClick !== false){
                this.closeClasses.unshift('modal-fog');
            }
        } else{
            this.closeClasses.unshift('modal-fog');
        }

        
        
        
        //Проверяем стоит ли запрет на скролл колесиком
        if  ( this.options.documentScrolled == false ) {
            document.body.classList.add('hide-scroll');           
        }

        



        this.modalFog.append(this.modal);

        document.body.append(this.modalFog);


        if ('onModalOpen' in this.options){
            this.options.onModalOpen();
        }

        

        this.modalFog.onclick = function(event){

            if (  self.searchCloseClasses( event.target ) ){

                self.closeModal();
              
            }

            
        }

    }

    //Создаем контейнер для модального окна
    createFog(){
        let modalFog = document.createElement('div');
        
        modalFog.classList.add('modal-fog');

        if ( 'background' in this.options ) {
            modalFog.style.background = this.options.background;
        } 

        if ( 'zIndex' in this.options ) {
            modalFog.style.zIndex = this.options.zIndex;
        } 


        if ( 'displayFog' in this.options ) {
            modalFog.style.display = this.options.displayFog;
        } else{
            modalFog.style.display = 'flex';
        }

        return modalFog;
    }

    //Находит модальное окно добавляет опции , возращает ссылку
    getModal(_modal){
        let modal = document.querySelector(_modal);

        if ( 'displayModal' in this.options ) {
            modal.style.display = this.options.displayModal;
        } else {
            modal.style.display = 'block';
        }

        if ( 'modalShowAnimation' in this.options ) {
            modal.classList.add(this.options.modalShowAnimation);
        }
        return modal;
    }

    //Создаем флаг для пометки места где стояло всплывающее модальное окно в документе
    createFlag(){
        return document.createElement('modalFlag');
    }
    //Закрывает модальное окно
    closeModal(){
        if ('modalHideAnimation' in this.options){
            this.modalFog.addEventListener('animationend', () => {
                this.closeOperations();
            })
            this.modalFog.classList.add('fadeOutFog');
            
            this.modal.classList.add(this.options.modalHideAnimation);

        } else{
            this.closeOperations();
        }

        document.body.classList.remove('hide-scroll');

        if ('onModalClose' in this.options){
            this.options.onModalClose();
        }

        
    }
    /**
     * Ряд операций при закрытиии:
     * 1. Удаляем modal-fog
     * 2. Очищаем style модального окна
     * 3. Удаляем классы добавленные модальному окну
     * 4. Возращаем модальное окно на прежнее место
     * 5. удаляем флаг
    */ 
    closeOperations(){
        this.modalFog.remove();
        this.modal.removeAttribute('style');
        this.clearModalClasses(this.options);
        this.modalFlag.after(this.modal);
        this.modalFlag.remove();
    }
    //Провереят есть ли в цели клика класс из options.closeClasses
    searchCloseClasses(eTarget){
        console.log(eTarget);
        
        for (let i = 0; i < this.closeClasses.length; i++){
            if ( eTarget.classList.contains(this.closeClasses[i])) return true;
        }

        return false;
    }
    //Очищает модальное окно от ранее добавленных классов
    clearModalClasses(){
        if ( 'modalShowAnimation' in this.options ) {
            this.modal.classList.remove(this.options.modalShowAnimation);
        }

        if ( 'modalHideAnimation' in this.options ) {
            this.modal.classList.remove(this.options.modalHideAnimation);
        }
    }

    
}
