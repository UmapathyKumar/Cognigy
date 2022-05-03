/// <reference types="Cypress" />

describe('DownloadFile', function () {

    it('To Download File Test01 ', function () {
        cy.downloadFile('https://api.time.com/wp-content/uploads/2015/04/google-sign.jpg','My Downloads','download1.jpg')
    })
})
