/**************************** AUTOMAÇÃO *********************************************************************
 ************************************************************************************************************ 
 Descrição: Elementos dos testes e2e do desafio
 Autor(a):  Letícia Andrade
************************************************************************************************************ 
*************************************************************************************************************/

const TestElements = {
    cardForm: '.category-cards > :nth-child(2)',
    practiceForm: ':nth-child(2) > .element-list > .menu-list > #item-0',
    firstName: '#firstName',
    lastName: '#lastName',
    gender: '#genterWrapper > div.col-md-9.col-sm-12',
    telephone: '#userNumber',
    dateOfBirth: '#dateOfBirthInput',
    datepicker: '#dateOfBirth > div.react-datepicker__tab-loop > div.react-datepicker-popper > div > div',
    subjects: '.subjects-auto-complete__value-container',
    hobbies: '#hobbiesWrapper > .col-md-9',
    fileUpload: '#uploadPicture',
    email: '#userEmail',
    address:'#currentAddress',
    state: '#state',
    city: '#stateCity-wrapper > :nth-child(3)',
    modalHeader: '.modal-header',
    modalTittle: '#example-modal-sizes-title-lg',
    closeBtnModal: '#closeLargeModal'
};

export { TestElements }