/// <reference types="Cypress" />
let locators = require('../fixtures/elements.json')

describe('Visibility', function () {
        
    it('Visibility Test01 ', function () {
      cy.visit("/"+"/visibility")
      cy.get(locators.VisibilityHideButton).click()

        cy.get("tbody").find("tr").then((row) => {
        let rowCount=row.length
        cy.log("rowcount : "+rowCount)      
        cy.get("tbody").find("tr").eq(0).find("td").then((column) => {
        let colCount=column.length
        cy.log("colCount : "+colCount)              
           for(let i=0;i<rowCount;i++) {
             for(let j=0;j<colCount;j++)
              {
               cy.get('tbody').find('tr').eq(i).find('td').eq(j).then($element => {
                if(($element.find("button")).length>0) {
                  expect($element.find("button")).to.exist
                  cy.log($element.text() + ' exist')                     
                      if (($element.find("button")).css('display') == 'none' 
                         || ($element.find("button")).css("visibility") == "hidden" 
                         || ($element.find("button")).css("opacity") == "0"
                         || ($element.find("button")).css("height") == "0"
                         || ($element.find("button")).css("width") == "0"){                        
                         cy.log($element.text()+" Exist and InVisible")
                      }else
                      {
                        cy.log($element.text()+" Exist and Visible")
                      }

                }else{
                     expect(($element.find("button"))).to.length(0)
                     cy.log($element.text()+ "Element not exists,Value is 0")
                }
               })
              }
            }
         })
       })
    })
 })
        

         


 
