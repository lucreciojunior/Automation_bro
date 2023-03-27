/// <reference types="cypress" />

var el = require('../support/elements/login').LOGIN

describe('Login Page', () => {
    const login = {
      nome: 'junior',
      password: 'senhateste123'
    }

  it('Fazendo um Login com sucesso', () => {   
    cy.Home()
    cy.LoginPage(login.nome, login.password)
    cy.contains('p, strong', 'junior').should('be.visible')
  })

  it('Fazendo um Login com o E-mail incorreto', () => {  
    cy.Home()
    cy.LoginPage('teste', login.password)
    cy.contains('strong', 'Error:', { timeout: 10000 }).should('be.visible')  
  })

  it('Fazendo um Login com senha incorreta', () => {
    cy.Home()
    cy.LoginPage(login.nome, 'kjasbka165')
    cy.contains('strong', 'Error:', { timeout: 10000 }).should('be.visible')
  });

})


