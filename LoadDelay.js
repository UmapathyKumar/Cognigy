/// <reference types="Cypress" />
let locators = require('../fixtures/elements.json')
describe('Load Delay', function () {

    it('Load Delay ', function () {
        /*To visit the Load Data Page*/
        cy.visit("/"+"/loaddelay")

        //Visit the link and wait for the button to appear on the page
        cy.get('button[class="btn btn-primary"]',{timeout:20000}).should('be.visible')
           
    })
})
