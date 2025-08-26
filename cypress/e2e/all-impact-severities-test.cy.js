describe('Accessibility All impacts TestSuite', () => {
  it('passes', () => {
    cy.visit('https://parabank.parasoft.com/parabank')
    cy.checkAccessibility(null,{includedImpacts: ['critical','serious','moderate','minor']});
  })
})