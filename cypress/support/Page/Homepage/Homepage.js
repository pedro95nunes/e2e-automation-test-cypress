import Page from "../Page";

class Homepage extends Page {

    accessPage(){
        cy.visit("/");
    }
}


export default new Homepage();