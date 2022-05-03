/// <reference types="Cypress" />
let locators = require('../fixtures/elements.json')
let Application = require('../fixtures/applicationTestData.json')
describe('Overlapped_Element', function () {

    it('Overlapped Element Test01 ', function () {

        /*To visit the Overlapped Element Page*/

        cy.visit("/"+"/overlapped")

        //Scroll and enter the text in the name field
        cy.get(locators.OverlappedElementInputField).scrollIntoView().should('be.visible').type(Application.username)
        cy.get(locators.OverlappedElementInputField).scrollIntoView().should('have.value',Application.username)
    })
})