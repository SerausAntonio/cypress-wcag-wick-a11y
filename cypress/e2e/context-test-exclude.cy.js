describe('Accessibility Exclude - TestSuite', () => {
  it('passes', () => {
    cy.visit('https://parabank.parasoft.com/parabank')
    cy.checkAccessibility({exclude: '#leftPanel'});
  })
})