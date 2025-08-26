describe('Accessibility rules wcag20 TestSuite', () => {
  it('passes', () => {
    cy.visit('https://parabank.parasoft.com/parabank')
    cy.checkAccessibility(null,{runOnly: ['wcag2a','wcag2aa']});
  })
})