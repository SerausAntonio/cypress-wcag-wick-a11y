describe('Accessibility TestSuite', () => {
  it('passes', () => {
    cy.visit('https://parabank.parasoft.com/parabank')
    cy.checkAccessibility();
  })
})