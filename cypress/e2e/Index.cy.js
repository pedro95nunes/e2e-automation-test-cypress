/// <reference types="cypress"/>

import Index from "../support/Page/Index/Index";
const element = require("../support/Page/Index/IndexElements").ELEMENTS;


describe("E2E tests",() =>{

    beforeEach(()=>{
        Index.accessPage();
    })

    it("Should click on button 1", ()=>{
        Index.clickOn(element.btn1);
    })

    it("Should click on button 2", ()=>{
        Index.clickOn(element.btn2);
    })
})
