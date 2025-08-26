
describe('Accessibility color contrast disabled TestSuite', () => {
 beforeEach(()=>{
   cy.visit('https://parabank.parasoft.com/parabank')

})
const customImpactStyleing ={
     critical: { icon: '🟥', style: 'fill: #DE071B; fill-opacity: 0; stroke: #DE071B; stroke-width: 10;' },
     serious:  { icon: '🟧', style: 'fill: #FFA66A; fill-opacity: 0; stroke: #FFA66A; stroke-width: 10;' },
     moderate: { icon: '🟨', style: 'fill: #ECDE05; fill-opacity: 0; stroke: #ECDE05; stroke-width: 10;' },
     minor:    { icon: '🟦', style: 'fill: #4598FF; fill-opacity: 0; stroke: #4598FF; stroke-width: 10;' },
     fixme:    { icon: '🛠️'}
}

  it('passes', () => {
   
    cy.checkAccessibility(null,
       { impactStyling: customImpactStyleing,
       includedImpacts: ['critical','serious','moderate','minor']
    });

})

})