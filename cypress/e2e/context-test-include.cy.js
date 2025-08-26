describe('Accessibility Include - TestSuite', () => {
  it('passes', () => {
    cy.visit('https://parabank.parasoft.com/parabank')
    cy.checkAccessibility({include: '#leftPanel'});
  })
})