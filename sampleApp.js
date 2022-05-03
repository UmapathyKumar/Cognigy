/// <reference types="Cypress" />
let locators = require('../fixtures/elements.json')
let Application = require('../fixtures/applicationTestData.json')
describe('SampleApp', function () {

    it('Login ', function () {
        /*Visit the SampleApp page*/
        cy.visit("/"+"/sampleapp");
        //Successful login verification
        cy.get(locators.SampleAppUserName).focus().type(Application.username).blur()
        cy.get(locators.SampleAppPassword).type(Application.password)
        cy.get(locators.SampleAppLoginButton).click()
        cy.get(locators.SampleAppLoginStatus).should('be.visible').contains(Application.username)        

    })
})

