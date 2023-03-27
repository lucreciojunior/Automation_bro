/// <reference types="cypress" />

describe('Home', () => {
      it('Acessando o Home Page', () => {
      cy.viewport(1500, 1020)
      cy.visit('https://practice.automationbro.com/my-account/')
      cy.contains('.tg-page-header__title', 'My account')
    })
  })