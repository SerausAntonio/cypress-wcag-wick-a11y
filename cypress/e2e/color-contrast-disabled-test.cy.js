describe('Accessibility All impacts TestSuite', () => {
  it('passes', {defaultCommandTimeout: 15000}, () => {
    cy.visit('https://parabank.parasoft.com/parabank')
    cy.checkAccessibility(null,{'color-contrast': {enabled: false}});
  })
})