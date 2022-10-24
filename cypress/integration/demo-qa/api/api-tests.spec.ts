/**************************** AUTOMAÇÃO ***********************************************************************************************
 **********************************************************************************************
 Descrição: Essa classe realiza os testes de API
 Autor(a):  Letícia Andrade
***********************************************************************************************
**********************************************************************************************/

import { expect400, expectSuccess } from "assertions/common";
import { checkAuthorized, createUser, generateToken, getListUsers, NewUser } from "requests/account";
import { getBookStore, rentABook, rentBooks } from "requests/bookstore";
import { randomString } from "../../../../utils/random";

/*********************** COMANDO DE EXECUÇÃO **************************************************
 * npm run test-open-chrome
 * npm run test-open-firefox
 *********************************************************************************************/

const user: NewUser = {
    userName: "user" + randomString(10),
    password: "Dqabc2@1",
};

const data: rentABook = {
    userId: "",
    collectionOfIsbns: [{
        isbn: "9781449337711"
    },
    {
        isbn: "9781491904244"
    }],
};

describe('POST Account/v1/User', () => {
    it('deve ser possível criar um usuário', () => {
        createUser(user, expectSuccess)
            .then(response => {
                data.userId = response.userID;
            });
    });
});

describe('POST Account/v1/GenerateToken', () => {
    it('deve ser possível gerar um token para o usuário', () => {
        generateToken(user, expectSuccess)
            .then(response => {
                Cypress.env('token', response.token);
            });
    });
});

describe('POST Account/v1/Authorized', () => {
    it('deve ser confirmar se o usuário criado está autorizado', () => {
        checkAuthorized(user, expectSuccess)
            .then(response => {
                expect(response).to.be.equal(true);
            });
    });
});

describe('POST BookStore/v1/Books', () => {
    it('deve ser possível alugar dois livros', () => {
        rentBooks(data, expectSuccess);
    });
});

describe('POST Account/v1/User', () => {
    it('não deve ser possível criar um usuário com userName vazio', () => {
        user.userName = "";
        createUser(user, expect400);
    });

    it('não deve ser possível criar um usuário com password inválida', () => {
        user.password = "4sd";
        createUser(user, expect400);
    });
});

describe('GET BookStore/v1/Books', () => {
    it('deve ser possível listar todos os livros existentes', () => {
        getBookStore(expectSuccess)
            .then(response => {
                expect(response.books[0].author).to.be.not.null;
                expect(response.books[0].description).to.be.not.null;
                expect(response.books[0].isbn).to.be.not.null;
                expect(response.books[0].pages).to.be.equal(234);
                expect(response.books[0].publish_date).to.be.equal('2020-06-04T08:48:39.000Z');
                expect(response.books[0].publisher).to.be.equal("O'Reilly Media");
                expect(response.books[0].subTitle).to.be.equal('A Working Introduction');
                expect(response.books[0].title).to.be.equal('Git Pocket Guide');
                expect(response.books[0].website).to.be.equal('http://chimera.labs.oreilly.com/books/1230000000561/index.html');

                expect(response.books[1].author).to.be.not.null;
                expect(response.books[1].description).to.be.not.null;
                expect(response.books[1].isbn).to.be.not.null;
                expect(response.books[1].pages).to.be.equal(254);
                expect(response.books[1].publish_date).to.be.equal('2020-06-04T09:11:40.000Z');
                expect(response.books[1].publisher).to.be.equal("O'Reilly Media");
                expect(response.books[1].subTitle).to.be.equal("A JavaScript and jQuery Developer's Guide");
                expect(response.books[1].title).to.be.equal('Learning JavaScript Design Patterns');
                expect(response.books[1].website).to.be.equal('http://www.addyosmani.com/resources/essentialjsdesignpatterns/book/');

                expect(response.books[2].author).to.be.not.null;
                expect(response.books[2].description).to.be.not.null;
                expect(response.books[2].isbn).to.be.not.null;
                expect(response.books[2].pages).to.be.equal(238);
                expect(response.books[2].publish_date).to.be.equal('2020-06-04T09:12:43.000Z');
                expect(response.books[2].publisher).to.be.equal("O'Reilly Media");
                expect(response.books[2].subTitle).to.be.equal('Harnessing the Power of the Web');
                expect(response.books[2].title).to.be.equal('Designing Evolvable Web APIs with ASP.NET');
                expect(response.books[2].website).to.be.equal('http://chimera.labs.oreilly.com/books/1234000001708/index.html');

                expect(response.books[3].author).to.be.not.null;
                expect(response.books[3].description).to.be.not.null;
                expect(response.books[3].isbn).to.be.not.null;
                expect(response.books[3].pages).to.be.equal(460);
                expect(response.books[3].publish_date).to.be.equal('2014-02-01T00:00:00.000Z');
                expect(response.books[3].publisher).to.be.equal("O'Reilly Media");
                expect(response.books[3].subTitle).to.be.equal('An In-Depth Guide for Programmers');
                expect(response.books[3].title).to.be.equal('Speaking JavaScript');
                expect(response.books[3].website).to.be.equal('http://speakingjs.com/');

                expect(response.books[4].author).to.be.not.null;
                expect(response.books[4].description).to.be.not.null;
                expect(response.books[4].isbn).to.be.not.null;
                expect(response.books[4].pages).to.be.equal(278);
                expect(response.books[4].publish_date).to.be.equal('2015-12-27T00:00:00.000Z');
                expect(response.books[4].publisher).to.be.equal("O'Reilly Media");
                expect(response.books[4].subTitle).to.be.equal('ES6 & Beyond');
                expect(response.books[4].title).to.be.equal("You Don't Know JS");
                expect(response.books[4].website).to.be.equal('https://github.com/getify/You-Dont-Know-JS/tree/master/es6%20&%20beyond');

                expect(response.books[5].author).to.be.not.null;
                expect(response.books[5].description).to.be.not.null;
                expect(response.books[5].isbn).to.be.not.null;
                expect(response.books[5].pages).to.be.equal(254);
                expect(response.books[5].publish_date).to.be.equal('2014-07-01T00:00:00.000Z');
                expect(response.books[5].publisher).to.be.equal("O'Reilly Media");
                expect(response.books[5].subTitle).to.be.equal('Robust Web Architecture with Node, HTML5, and Modern JS Libraries');
                expect(response.books[5].title).to.be.equal('Programming JavaScript Applications');
                expect(response.books[5].website).to.be.equal('http://chimera.labs.oreilly.com/books/1234000000262/index.html');

                expect(response.books[6].author).to.be.not.null;
                expect(response.books[6].description).to.be.not.null;
                expect(response.books[6].isbn).to.be.not.null;
                expect(response.books[6].pages).to.be.equal(472);
                expect(response.books[6].publish_date).to.be.equal('2014-12-14T00:00:00.000Z');
                expect(response.books[6].publisher).to.be.equal("No Starch Press");
                expect(response.books[6].subTitle).to.be.equal('A Modern Introduction to Programming');
                expect(response.books[6].title).to.be.equal('Eloquent JavaScript, Second Edition');
                expect(response.books[6].website).to.be.equal('http://eloquentjavascript.net/');

                expect(response.books[7].author).to.be.not.null;
                expect(response.books[7].description).to.be.not.null;
                expect(response.books[7].isbn).to.be.not.null;
                expect(response.books[7].pages).to.be.equal(352);
                expect(response.books[7].publish_date).to.be.equal('2016-09-03T00:00:00.000Z');
                expect(response.books[7].publisher).to.be.equal("No Starch Press");
                expect(response.books[7].subTitle).to.be.equal('The Definitive Guide for JavaScript Developers');
                expect(response.books[7].title).to.be.equal('Understanding ECMAScript 6');
                expect(response.books[7].website).to.be.equal('https://leanpub.com/understandinges6/read');

            });
    });
});

describe('GET Account/v1/User/{UUID}', () => {
    it('deve ser possível listar o usuário pelo userID', () => {
        getListUsers(data.userId, expectSuccess);
    });
});
