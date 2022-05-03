/// <reference types="Cypress" />


let locators = require('../fixtures/elements.json')
describe('ProgressBar', function () {
    it('Progress Bar Test01 ', function () {

      //Initialize wait time 
      let waitTime = 2000;
      /*Visit the ProgressBar page */
      cy.visit("/"+"/progressbar");
      cy.get(locators.ProgressBarStartButton).click();

      //Recurssive method to stop the progress bar ~ 75%
  
      const checkAndReload = (waitTime,prevValue) => {
        cy.wait(waitTime);
        cy.get(locators.ProgressBar)
          .invoke("attr", "aria-valuenow")
          .then((val) => {
            let diff=val-prevValue+1
            let diffto75=76-val
            diffto75=diffto75/2 
            cy.log(val-prevValue)              
            if (Math.abs(val- 76)<=1) {
              cy.get(locators.ProgressBarStopButton).click();
              return;
            }
            checkAndReload((waitTime/diff)*diffto75,val);
          });
      };
      //Calculate and set the wait time
      cy.wait(waitTime)
      cy.get(locators.ProgressBar)
          .invoke("attr", "aria-valuenow")
          .then((val) => {
          let diff=val-25          
          let diffto75=76-val          
          diffto75=diffto75/2   
          cy.log('diff value' +diff)       
          cy.log('------- '+waitTime/diff)          
          checkAndReload((waitTime/diff)*diffto75,val)
      });
      cy.get(locators.ProgressBar)
      .invoke("attr", "aria-valuenow")
      .then((Result) => {
        cy.log(Result)
        var s=Result*1
        expect(s).to.be.within(74,76)
      })
    });
});
  