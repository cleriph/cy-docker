describe('template spec', () => {
  it('passes', () => {
    cy.request('/').then(($response) => {
      expect($response.body).to.include('Hello World')
    })
  })
})