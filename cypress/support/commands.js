// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
// Adicionar este código dentro de support/index.js
// Importante: aplicável para projetos que usam o mochawesome como relatório

// No cypress.json, setar as seguintes configs:
//   "screenshotsFolder": "mochawesome-report/assets",
//   "videosFolder": "mochawesome-report/videos"

import './commands'
import addContext from 'mochawesome/addContext'
import 'cypress-get-by-label/commands'

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

Cypress.on("test:after:run", (test, runnable) => {

  // Se o teste falhar, adiciona a imagem da falha ao relatório
  if(test.state === 'failed') {
      // Adiciona a imagem gerada durante a execução final ao relatório
 
    const screenshotFileName = `${runnable.parent.title} -- ${test.title} (failed).png`;
    addContext({ test }, `${Cypress.spec.name}/${screenshotFileName}`);
}

let videoName = Cypress.spec.name
videoName = `${videoName.replace('/.ts.*', 'ts')}.mp4`
addContext({ test }, `${videoName}`);

})