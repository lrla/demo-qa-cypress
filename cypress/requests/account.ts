import { ExpectResFn, expectSuccess } from 'assertions/common';

const url = 'https://demoqa.com/Account';
const baseUrlCreate = `${url}/v1/User/`;
const baseUrlGenerateToken = `${url}/v1/GenerateToken/`;
const baseUrlAuhtorized = `${url}/v1/Authorized/`;
const baseUrlListUsers = `${url}/v1/User/`


export interface NewUser {
    books?: Books[];
    userID?: string;
    token?: string;
    userName?: string;
    password?: string;
}

export interface Books {
    isbn: string,
    title: string,
    subTitle: string,
    author: string,
    publish_date: Date,
    publisher: string,
    pages: number,
    description: string,
    website: string
}

/**
 * Criar novo usuário 
 */
export function createUser(
    loginViewModel: NewUser,
    expectFn: ExpectResFn = expectSuccess,
): Cypress.Chainable<NewUser> {
    return cy
        .request({
            method: 'POST',
            url: baseUrlCreate,
            headers: {
                'Content-Type': 'application/json',
            },
            body: loginViewModel,
            failOnStatusCode: false
        })
        .then(expectFn)
        .then(res => res.body as NewUser);
}

/**
 * Gerar token de acesso
 */
export function generateToken(
    loginViewModel: NewUser,
    expectFn: ExpectResFn = expectSuccess,
): Cypress.Chainable<NewUser> {
    return cy
        .request({
            method: 'POST',
            url: baseUrlGenerateToken,
            headers: {
                'Content-Type': 'application/json',
            },
            body: loginViewModel,
            failOnStatusCode: false
        })
        .then(expectFn)
        .then(res => res.body as NewUser);
}

/**
 * Verifica se o usuário criado está autorizado
 */
export function checkAuthorized(
    loginViewModel: NewUser,
    expectFn: ExpectResFn = expectSuccess,
): Cypress.Chainable<NewUser> {
    return cy
        .request({
            method: 'POST',
            url: baseUrlAuhtorized,
            headers: {
                'Content-Type': 'application/json',
            },
            body: loginViewModel,
            failOnStatusCode: false
        })
        .then(expectFn)
        .then(res => res.body as NewUser);
}

/*
* Listar os usuários
*/
export function getListUsers(
    userId?: string,
   expectFn: ExpectResFn = expectSuccess,
): Cypress.Chainable<NewUser> {
   return cy
       .request({
           method: 'GET',
           url: `${baseUrlListUsers}${userId}`,
           headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${Cypress.env('token')}`,
        },
           failOnStatusCode: false,
       })
       .then(expectFn)
       .then(res => res.body as NewUser);
}
