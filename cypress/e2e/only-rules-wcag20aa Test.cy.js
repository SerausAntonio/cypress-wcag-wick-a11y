describe('Accessibility Rules wcag2aa - TestSuite', () => {
  it('passes', () => {
    cy.visit('https://parabank.parasoft.com/parabank')
    cy.checkAccessibility(null,{runOnly: ['wcag2aa']});
  })
})