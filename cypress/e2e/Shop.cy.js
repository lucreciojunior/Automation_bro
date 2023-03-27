/// <reference types="cypress" />

import { login } from '../support/export.require'
import { filtro } from '../support/export.require'
import { categoia } from '../support/export.require'
import { buscar } from '../support/export.require'
import { select } from '../support/export.require'

describe('Pagina home SHOP', () => {
    it('Acessando e validando pagina SHOP', () => {
        cy.Home()
        cy.LoginPage(login.nome, login.password)
        cy.contains('p, strong', 'junior').should('be.visible')
        cy.ClickShop()
    })

    it('Campo para filtrar produtos', () => {
        cy.Home()
        cy.LoginPage(login.nome, login.password)
        cy.contains('p, strong', 'junior').should('be.visible')
        
        cy.ClickShop()   

        cy.CampoFiltro(filtro.fil1)
        cy.ClickShop()
        cy.CampoFiltro(filtro.fil2)
        cy.ClickShop()
        cy.CampoFiltro(filtro.fil3)
        cy.ClickShop()
        cy.CampoFiltro(filtro.fil4)
    })

    it('Categoria de produtos', () => {
        cy.Home()
        cy.LoginPage(login.nome, login.password)
        cy.contains('p, strong', 'junior').should('be.visible')

        cy.ClickShop() 
        
        cy.CampoCategoria(categoia.catg1)
        cy.ClickShop()
        cy.CampoCategoria(categoia.catg2)
        cy.ClickShop()
        cy.CampoCategoria(categoia.catg3)
        cy.ClickShop()
        cy.CampoCategoria(categoia.catg4)  
        cy.ClickShop()   
    })

    it('Campo buscar produtos', () => {
        cy.Home()
        cy.LoginPage(login.nome, login.password)
        cy.contains('p, strong', 'junior').should('be.visible')

        cy.ClickShop()

        cy.CampoBuscar(buscar.prod1)
        cy.ClickShop()
        cy.CampoBuscar(buscar.prod2)
        cy.ClickShop()
        cy.CampoBuscar(buscar.prod3)
        cy.ClickShop()
        cy.CampoBuscar(buscar.prod4)  
    })

    it('Selecionando Produtos', () => {
        cy.Home()
        cy.LoginPage(login.nome, login.password)
        cy.contains('p, strong', 'junior').should('be.visible')

        cy.ClickShop() 

        cy.SelecionarProduto(select.prod1)
        cy.ClickShop()
        cy.SelecionarProduto(select.prod2)
        cy.ClickShop()
        cy.SelecionarProduto(select.prod3)
        cy.ClickShop()
        cy.SelecionarProduto(select.prod4)
    });
})