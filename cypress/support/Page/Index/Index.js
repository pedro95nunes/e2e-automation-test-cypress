import Page from "../Page";

class Index extends Page {

    accessPage(){
        cy.visit("/");
    }

    clickOn(element){
        cy.get(element).click();
    }
}


export default new Index();