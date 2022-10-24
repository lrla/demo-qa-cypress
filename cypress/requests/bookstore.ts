import { ExpectResFn, expectSuccess } from 'assertions/common';

const url = 'https://demoqa.com/BookStore';
const baseUrlListBooks = `${url}/v1/Books/`;
const baseUrlRentBooks = `${url}/v1/Books/`;

export interface rentABook {
    userId?: string;
    collectionOfIsbns: CollectionOfIsbns[] ,
}

export interface Books {
    books: any[];
}

export interface CollectionOfIsbns {
    isbn: string;
}

/**
 * Listar os livros disponíveis
 */
export function getBookStore(
    expectFn: ExpectResFn = expectSuccess,
): Cypress.Chainable<Books> {
    return cy
        .request({
            method: 'GET',
            url: baseUrlListBooks,
            failOnStatusCode: false,
        })
        .then(expectFn)
        .then(res => res.body as Books);
}


/**
 * Alugar os livros disponíveis
 */
 export function rentBooks(
    rent: rentABook,
    expectFn: ExpectResFn = expectSuccess,
): Cypress.Chainable<rentABook> {
    return cy
        .request({
            method: 'POST',
            url: baseUrlRentBooks,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${Cypress.env('token')}`,
            },
            body: rent,
            failOnStatusCode: false
        })
        .then(expectFn)
        .then(res => res.body as rentABook);
}