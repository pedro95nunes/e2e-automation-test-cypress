class Page {
    constructor() {
    }

    validateTextItemVisible(item, text) {
        cy.get(item).should("contain.text", text);
    }

    validateSlug(slug) {
        cy.location('href').should('contains', slug);
    }

    clickOn(element){
        cy.get(element).click();
    }


}

module.exports = Page;