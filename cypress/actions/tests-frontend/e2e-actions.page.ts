/**************************** AUTOMAÇÃO *********************************************************************
 ************************************************************************************************************ 
 Descrição: Essa classe representa as actions referentes aos testes 
 Autor(a):  Letícia Andrade
************************************************************************************************************ 
*************************************************************************************************************/

import { AbstractPage } from 'actions/common/abstract.page';
import { TestElements } from 'pages/e2e-page';

export class DemoQAPage extends AbstractPage {

    /**
     * Captura o card Forms
     */
    public get cardForms(): Cypress.Chainable<JQuery> {
        return cy.get(TestElements.cardForm);
    }

    /**
     * Captura o subitem do menu Practice forms
     */
    public get practiceForms(): Cypress.Chainable<JQuery> {
        return cy.get(TestElements.practiceForm);
    }

    /**
     * Captura o input de primeiro nome
     */
    public get firstName(): Cypress.Chainable<JQuery> {
        return cy.get(TestElements.firstName);
    }

    /**
     * Captura o input de segundo nome
     */
    public get lastName(): Cypress.Chainable<JQuery> {
        return cy.get(TestElements.lastName);
    }

    /**
     * Captura o input de gênero
     */
    public get gender(): Cypress.Chainable<JQuery> {
        return cy.get(TestElements.gender)
            .children()
            .eq(Math.floor(Math.random() * 3));
    }

    /**
     * Captura o input email
     */
    public get email(): Cypress.Chainable<JQuery> {
        return cy.get(TestElements.email);
    }

    /**
     * Captura o input Address
     */
    public get address(): Cypress.Chainable<JQuery> {
        cy.wait(2000);
        return cy.get(TestElements.address);
    }

    /**
     * Captura o input telefone
     */
    public get telephone(): Cypress.Chainable<JQuery> {
        return cy.get(TestElements.telephone);
    }

    /**
     * Captura o input data de aniversário
     */
    public get dateOfBirth(): Cypress.Chainable<JQuery> {
        cy.wait(5000);
        return cy.get(TestElements.dateOfBirth);
    }

    /**
     * Captura o input subjects
     */
    public get subjects(): Cypress.Chainable<JQuery> {
        return cy.get(TestElements.subjects);
    }

    /**
     * Captura as options do autocomplete
     */
    public optionsAutocomplete(option: string): Cypress.Chainable<JQuery> {
        return cy.get(`#react-select-2-option-${option}`);
    }

    /**
     * Captura o input hobbies
     */
    public get hobbies(): Cypress.Chainable<JQuery> {
        return cy.get(TestElements.hobbies)
            .children()
            .eq(Math.floor(Math.random() * 3));
    }

    /**
     * Captura o file Upload
     */
    public get fileUpload(): Cypress.Chainable<JQuery> {
        return cy.get(TestElements.fileUpload);
    }

    /**
     * Captura o campo estado
     */
    public get state(): Cypress.Chainable<JQuery> {
        return cy.get(TestElements.state);
    }

    /**
     * Captura o campo cidade
     */
    public get city(): Cypress.Chainable<JQuery> {
        return cy.get(TestElements.city);
    }

    /**
     * Captura o modal header
     */
     public get modalHeader(): Cypress.Chainable<JQuery> {
        return cy.get(TestElements.modalHeader);
    }

    /**
     * Captura o título do modal
     */
     public get modalTittle(): Cypress.Chainable<JQuery> {
        return cy.get(TestElements.modalTittle);
    }

    /**
     * Captura o botão fechar do modal
     */
     public get closeBtn(): Cypress.Chainable<JQuery> {
        return cy.get(TestElements.closeBtnModal);
    }
}