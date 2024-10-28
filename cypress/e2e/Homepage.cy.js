/// <reference types="cypress"/>

import Homepage from "../support/Page/Homepage/Homepage";
const element = require("../support/Page/Homepage/HomepageElements").ELEMENTS;


describe("E2E tests",() =>{

    beforeEach(()=>{
        cy.clearAllCookies();
        cy.clearAllLocalStorage();
        Homepage.accessPage();
    })

    it("Should drive to Second page", ()=>{
        Homepage.clickOn(element.btn1);
        Homepage.validateSlug("/second")
    })

    
})
