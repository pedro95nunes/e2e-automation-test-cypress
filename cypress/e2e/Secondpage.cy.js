/// <reference types="cypress"/>

import Secondpage from "../support/Page/Secondpage/Secondpage";
const element = require("../support/Page/Secondpage/SecondpageElements").ELEMENTS;


describe("E2E tests",() =>{

    beforeEach(()=>{
        cy.clearAllCookies();
        cy.clearAllLocalStorage();
        Secondpage.accessPage();
    })

    it("Should drive to Home page", ()=>{
        Secondpage.clickOn(element.btn2);
        Secondpage.validateSlug("/")
    })

    
})
