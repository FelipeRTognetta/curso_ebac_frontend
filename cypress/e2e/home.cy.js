/// <reference types="cypress" />

describe('Testes para a home', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('deve criar novo contato, alterar e deletar', () => {
        cy.get('input').should('have.length', 3)
        cy.get('input[placeholder="Nome"]').type('Larissa Lima')
        cy.get('input[placeholder="E-mail"]').type('larissa@hotmail.com')
        cy.get('input[placeholder="Telefone"]').type('19991994555')
        cy.get('.adicionar').click()
        
        // alterar
        cy.get(':nth-child(5) > .sc-gueYoa > .edit').click()
        cy.get('input[placeholder="Nome"]').type(' Souza')
        cy.get('input[placeholder="E-mail"]').clear().type('larissa@gmail.com')
        cy.get('.alterar').click()

        // deletar
        cy.get(':nth-child(5) > .sc-gueYoa > .delete').click()
    })    
})