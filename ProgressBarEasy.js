/// <reference types="Cypress" />


let locators = require('../fixtures/elements.json')

describe('ProgressBarEasy', function () {

it('.trigger() - trigger an event on a DOM element', () => {
    // https://on.cypress.io/trigger

    // To interact with a range input (slider)
    // we need to set its value & trigger the
    // event to signal it changed

    // Here, we invoke jQuery's val() method to set
    // the value and trigger the 'change' event
    cy.visit("/"+"/progressbar");
   cy.get(locators.ProgressBarStartButton).click();
   cy.wait(2000);
   cy.get('#progressBar')
   .invoke('attr','style','width: 75%')
   .invoke('attr','aria-valuenow','75')
   .invoke('text','75%')
   cy.wait(4000);
   //.invoke('val','75').trigger('change')
   //cy.get('#progressBar').invoke("val","75").trigger('change')
   cy.get(locators.ProgressBarStopButton).click();
  // cy.get('#progressBar').should('have.text', '75%')
    
  })
  })