/// <reference types="cypress" />

const select = require('../support/export.require').select

describe('Adicionando produto no carrinho', () =>{
    it('Adicionando produto no carrinho', () => {
        cy.Home()
        cy.ClickShop()
        cy.AddCart(select.prod1)
        cy.ClickCarrinho()
    });

    it.only('upload de cupom de desconto', () => {
        cy.Home()
        cy.ClickShop()

        cy.AddCart(select.prod1)
        cy.ClickShop()
        cy.AddCart(select.prod2)
        cy.ClickShop()
        cy.AddCart(select.prod3)
        cy.ClickShop()
        cy.AddCart(select.prod4)

        cy.ClickCarrinho()

        cy.UploadFile()
        cy.ClickCheckout()    
    });

})