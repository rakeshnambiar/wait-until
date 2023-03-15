import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-wait-until';

Given("I visit europepmc.org", () => {
  cy.visit("https://europepmc.org/");
});

When("I do a search", () => {
  cy.get('#banner--search-input').type('SRC:*')
  cy.get('#banner--search-button').click()
});

Then("I should see a search bar", () => {
    cy.waitUntil(
        () => cy.get('div[id^="search-results--single--block"]').then($ele => cy.wrap($ele).should('be.visible'))
    )

    cy.waitUntil(
        () => cy.get('div[id^="search-results--single--block"]').then($ele => cy.wrap($ele).should('not.be.visible'))
    )
});
