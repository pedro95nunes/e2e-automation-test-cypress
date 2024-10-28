import Page from "../Page";


class Secondpage extends Page {

    accessPage() {
        cy.visit("/second");
    }

}

export default new Secondpage();