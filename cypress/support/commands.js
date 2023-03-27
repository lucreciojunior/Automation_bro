var e = require('../support/elements/login').LOGIN
var el = require('../support/elements/cadastroCompra').CadastroCompra



import 'cypress-file-upload';



Cypress.Commands.add('Home', () => {
    cy.viewport(1500, 1020)
    cy.visit('https://practice.automationbro.com/my-account/')
    cy.contains('.tg-page-header__title', 'My account')
  })
  
  Cypress.Commands.add('LoginPage', (login, password) => {
    cy.get('#username').type(login)
    cy.get(e.password).type(password)
    cy.contains('button', 'Log in').click()
  })
  
  Cypress.Commands.add('ClickShop', () => {
    cy.get('ul li[id="menu-item-567"]').should('be.visible')
     .should('have.text', 'Shop').click()
    cy.get('.tg-page-header__title').should('be.visible')
      .should('have.text', 'Products')
  })

  Cypress.Commands.add('CampoFiltro', (filtro) => {
    cy.get('select.orderby').should('be.visible').select(filtro).wait(2000)
  })

  Cypress.Commands.add('CampoCategoria', (categoia) => {
    cy.contains('h2.widget-title', 'Products').should('be.visible')
      .should('have.text', 'Products')
    cy.contains('.product-categories li a', categoia).click()
    cy.contains('h1.tg-page-header__title', categoia).should('be.visible')
      .should('have.text', categoia).wait(2000)
  })

  Cypress.Commands.add('SelecionarProduto', (select) => {
    cy.contains('a h2', select).should('be.visible').click()
    cy.contains('h1.tg-page-header__title', select).should('be.visible')
      .should('have.text', select).wait(1000)    
  })

  Cypress.Commands.add('CampoBuscar', (buscar) => {
    cy.get('input[placeholder="Search products…"]').type(buscar)
    cy.contains('button.wp-element-button', 'Search').should('be.visible').click()
    cy.contains('h1.tg-page-header__title', buscar).should('be.visible')
      .should('have.text', buscar).wait(1000)
  })

  Cypress.Commands.add('AddCart', (select) => {
    cy.contains('a h2', select).should('be.visible').click()
    cy.contains('h1.tg-page-header__title', select).should('be.visible')
      .should('have.text', select).wait(1000)
    cy.contains('button[name="add-to-cart"]', 'Add to cart').click()
    cy.get('.woocommerce-message').should('be.visible')
  })

  Cypress.Commands.add('ClickCarrinho', () => {
    cy.get('ul i[class="tg-icon tg-icon-shopping-cart"]').click()
    cy.contains('h1.tg-page-header__title', 'Cart').should('be.visible')
  })

  Cypress.Commands.add('ClickremoveProduct', () => {
    cy.get(':nth-child(1) > .product-remove > .remove').click()
  })

  Cypress.Commands.add('UploadFile', () => {
    cy.get("input[type='file']").invoke("removeClass", "file_input_hidden")
      .selectFile('cypress/fixtures/imagem/cupom.jpg')
    cy.get('div #wordpress_file_upload_submit_1').click()
    cy.get('#wfu_messageblock_header_1_label_1')
      .should('be.visible').should('have.text','File cupom.jpg uploaded successfully')
  })

  Cypress.Commands.add('ClickCheckout', () => {
    cy.contains('.checkout-button', 'Proceed to checkout').click()
      .should('be.visible')
  })