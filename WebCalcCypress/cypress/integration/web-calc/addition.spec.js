/// <reference types="cypress" />

describe('Addition - Web Calculator', () => {
  beforeEach(() => {
    cy.visit('/');
  })

  it('performs 100 + 214 with a result of 314', () => {
    cy.get('.operand1')
      .type('100');

    cy.get('.operand2')
      .type('214');

    cy.contains('Calculate!')
      .click();

    cy.get('.result')
      .should('have.text', '314');
  });

  it('performs -100 + 21 with a result of -79', () => {
    cy.get('.operand1')
      .type('-100');

    cy.get('.operand2')
      .type('21');

    cy.contains('Calculate!')
      .click();

    cy.get('.result')
      .should('have.text', '-79');
  });

  it('performs -13 + -77 with a result of -90', () => {
    cy.get('.operand1')
      .type('-13');

    cy.get('.operand2')
      .type('-77');

    cy.contains('Calculate!')
      .click();

    cy.get('.result')
      .should('have.text', '-90');
  });
});
