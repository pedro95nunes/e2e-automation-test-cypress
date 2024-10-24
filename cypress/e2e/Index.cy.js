/// <reference types="cypress"/>

import Index from "../support/Page/Index/Index";
const element = require("../support/Page/Index/IndexElements").ELEMENTS;


describe("E2E tests",() =>{

    beforeEach(()=>{
        Index.accessPage();
    })

    it("Should drive to Second page", ()=>{
        Index.clickOn(element.btn1);
        Index.validateSlug("/second")
        Index.clickOn(element.btn2);
        Index.validateSlug("/")
    })

    
})
