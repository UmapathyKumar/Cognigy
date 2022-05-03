/// <reference types="Cypress" />
let locators = require('../fixtures/elements.json')
describe('DynamicTable', function () {

    it('Dynamic Table Test01 ', function () {
        /*To visit the Dynamic Table Page*/
        cy.visit("/"+"/dynamictable")  
        
        //To locate the Chrome Process
        cy.get(locators.DynamicTableGetProcess).each(($element,index,$list)=>{
            const text=$element.text()
                if(text.includes("Chrome")){

                    //To get the CPU header index

                    cy.contains('span','CPU').invoke('index').then((i) => {
                        cy.log(i)
                        var j=i+1
                        //Pass the index to get the CPU value for Chrome Process

                        cy.get("div[role='table'] > div:nth-of-type(3) >div span:nth-of-type("+j+")").eq(index).then(function(CPU)
                        {
                            const value=CPU.text()
                            cy.log(value)
                            //Compare the value with the yellow label
                            cy.get(locators.DynamicTableYellowLabel).should('be.visible').contains('Chrome CPU: '+value);      
        
                        })
                    })
                    
            
                }       
        })
            
    })

      
})