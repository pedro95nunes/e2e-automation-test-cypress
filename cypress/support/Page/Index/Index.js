class Index {

    accessPage(){
        cy.visit("/");
    }

    clickOn(element){
        cy.get(element).click();
    }
}


export default new Index();