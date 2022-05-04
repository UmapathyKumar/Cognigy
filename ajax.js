/// <reference types="Cypress" />
let locators = require('../fixtures/elements.json')
describe('Ajax_Data', function () {

    it('Ajax Data Test01 ', function () {
        /*To visit the AJAX Data Page*/
        cy.visit("/"+"/ajax")
        cy.log('tagv1.0')

        //Click the button and wait for the data to appear on the label
        cy.get(locators.AjaxRequestButton).click()
        cy.get(locators.AjaxRequestLabel, { timeout: 20000 }).should('be.visible').contains('Data loaded with AJAX get request');      
           
    })
})
