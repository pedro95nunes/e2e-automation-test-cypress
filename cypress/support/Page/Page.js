class Page {
    constructor() {
    }

    validateTextItemVisible(item, text) {
        cy.get(item).should("contain.text", text);
    }

    validateSlug(slug) {
        cy.location('href').should('contains', slug);
    }


}

module.exports = Page;