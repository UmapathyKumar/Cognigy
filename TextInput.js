/// <reference types="Cypress" />
let locators = require('../fixtures/elements.json')
let Application = require('../fixtures/applicationTestData.json')
describe('TextInput', function () {

    it('Text Input Test01 ', function () {
        /*Visit Text Input Page */
        cy.visit("/"+"/textinput");
        //Type and validate the Button Name
        cy.get(locators.TextInputField).type(Application.sampletext)
        cy.get(locators.TextInputButton).click()
        cy.get(locators.TextInputButton).should('have.text',Application.sampletext)

    })
})



