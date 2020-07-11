/// <reference types="Cypress" />
describe('Search Normal Test Suite', () => {
    // it('Search by Keyword', () =>{
    //     cy.visit('www.jobthai.com')
    //     cy.get('#search-keyword').type('thinknet')
    //     cy.get('#search-submit-btn').click()
    //     cy.get('#recap-keyword').contains('thinknet')
        
    // })
    it('Login Facebook', () => {
        cy.visit('www.facebook.com')
        cy.get('[data-testid=royal_email]').type('marwin41@hotmail.com')
        cy.get('[data-testid=royal_pass]').type('Winner43806')
        cy.get('#loginbutton').click()
    })

})