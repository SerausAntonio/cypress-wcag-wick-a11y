describe('Accessibility without report TestSuite', () => {
  it('passes', {defaultCommandTimeout: 15000}, () => {
    cy.visit('https://parabank.parasoft.com/parabank')
    cy.checkAccessibility(null,{generateReport: false});
  })
})