/// <reference types="cypress" />

import { faker } from '@faker-js/faker';

const select = require('../support/export.require').select
var el = require('../support/elements/cadastroCompra').CadastroCompra

describe('Realizando uma compra e preenchendo os dados do comprador', () => {
    it('Cadastro do comprador', () => {
        cy.Home()
        cy.ClickShop()
        cy.AddCart(select.prod1)
        cy.ClickCarrinho()

        cy.UploadFile()
        cy.ClickCheckout()  

        cy.get(el.FirstName).type(faker.name.firstName())
        cy.get(el.LastName).type(faker.name.lastName())
        cy.get(el.CompanyName).type('Antonio Carlos')

        cy.get(el.SetRegion).click({ multiple: true })
        cy.get(el.CampoRefion).type('Brazil{ENTER}')
    
        cy.get(el.Address).type(faker.address.street())
        cy.get(el.AddressNumber).type(faker.address.buildingNumber())
        cy.get(el.City).type(faker.address.city())
        cy.get(el.SetCouyte).click({ multiple: true })
        cy.get(el.CampoCouyte).type('Pernambuco{ENTER}')
        cy.get(el.PostalCode).type(faker.address.zipCode())

        cy.get(el.Phone).type(faker.phone.number())
        cy.get(el.Email).type(faker.internet.email())

        cy.get(el.Username).type('junior')
        cy.get(el.Password).type('senhateste123')

        cy.get(el.ValidaOk).should('be.visible')
    })

    

})