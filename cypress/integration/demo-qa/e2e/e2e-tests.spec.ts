/**************************** AUTOMAÇÃO ***********************************************************************************************
 **********************************************************************************************
 Descrição: Essa classe realiza os testes no frontend
 Autor(a):  Letícia Andrade
***********************************************************************************************
**********************************************************************************************/

import { faker } from '@faker-js/faker';
import { DemoQAPage } from 'actions/tests-frontend/e2e-actions.page';
import { randomDate, randomInt, randomString } from '../../../../utils/random';

/*********************** COMANDO DE EXECUÇÃO **************************************************
 * npm run test-open-chrome
 * npm run test-open-firefox
 *********************************************************************************************/

const url = 'https://demoqa.com/';
const firstName = faker.name.firstName();
const lastName = faker.name.lastName();
const email = faker.internet.email();
const phone = randomInt(10);
const date = randomDate('02/13/1970', '01/20/2000');
const textarea = faker.lorem.paragraph(1);
const filePath = 'teste.txt';


describe('/user-tvod page', () => {
    it('cenário 1', () => {
        const page = new DemoQAPage();

        // adicionar condições de interceptação
        cy.
            intercept({ method: 'GET', url: 'https://demoqa.com/' })
            .as('inicioLoginLoad');

        // Visita a página demoqa
        page.visit(url);

        cy.wait('@inicioLoginLoad');

        // Seleciona o card Forms e clica no subitem do menu Practice forms
        page.cardForms.click();

        page.practiceForms.click({force: true})

        // Preencher dados do formulário
        page.firstName.type(firstName);

        page.lastName.type(lastName);

        page.email.type(email);

        page.gender.click().trigger('input', {force: true});;

        page.telephone.type(phone);

        // Preencher o campo data
        page.dateOfBirth.type('{selectall}');

        page.dateOfBirth.type(date);

        page.dateOfBirth.type('{enter}');

        page.hobbies.click();

        page.subjects.type(randomString(1));

        page.optionsAutocomplete('0').click();

        page.address.type(textarea);

        page.fileUpload.attachFile(filePath).trigger('input', {force: true});

        page.state.children().click().trigger('input', {force: true});

        page.state.type('{enter}');

        page.modalHeader.should('be.visible');

        page.modalTittle.should('have.text', 'Thanks for submitting the form');

        page.modalTittle.click();

        page.closeBtn.click();
    });


});

