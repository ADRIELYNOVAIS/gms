/// <reference types="cypress"/>

describe('US-012-Funcionalidade: cadastro de membros', () => {
  beforeEach(() =>{
    cy.visit('/')
  })

  afterEach(() =>{
    cy.screenshot()
  })
  
  it('Deve fazer o cadastro de campos obrigatórios', () => {
    var email = `driu${Date.now()}@teste.com`
    cy.preencherCadastro('Driu', 'Souza', email, '73988774455', 'Teste@1232')
    cy.get('#signup-response').should('contain', 'Cadastro realizado com sucesso!' )
  })
  it('Deve válidar mensagem de erro com cadastro nome inválido', () => {
    var email = `driu${Date.now()}@teste.com`
    cy.preencherCadastro('Driu20', 'Souza', email, '73988774455', 'Teste@1232')
    cy.get('#signup-response').should('contain', 'Nome deve conter apenas caracteres alfabéticos, acentuados e espaços' )
  })


})