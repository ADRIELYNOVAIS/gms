
describe('US-012-Funcionalidade: cadastro de membros', () => {
  it('Deve fazer o cadastro de campos obrigatórios', () => {
    cy.visit('http://127.0.0.1:8080')
    cy.get('#signup-firstname').type('Driu')
    cy.get('#signup-lastname').type('Souza')
    cy.get('#signup-email').type('teste202025@email.com')
    cy.get('#signup-phone').type('73988445566')
    cy.get('#signup-password').type('@123Testando')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain', 'Cadastro realizado com sucesso!' )
  })
})