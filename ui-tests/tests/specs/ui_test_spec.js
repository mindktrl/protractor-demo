var PageObject = require('./PageObject.js');
var EC = protractor.ExpectedConditions;

describe('4G Clinical help center', function () {
    var page;

    beforeEach(function () {
        page = new PageObject();
        browser.waitForAngularEnabled(false);
        browser.get('https://support.4gclinical.com/hc/en-us');
    });

    it('should search', function () {  
        page.searchField.click().sendKeys('sign in');
        page.searchButton.click();
        page.searchSignInResult.click()
        //element(by.css('#query').sendKeys("user1"));
        browser.sleep('4000');  

    });
    // it('should launch sign in window after clicking sign in button', function () {  
    //     page.signIn.click();
    //     browser.sleep('4000');  
    //     //element(by.input('#user_email').click());
    //     expect(page.signInEmail.isDisplayed());
    //     //page.signInEmail.click();
    //     // page.signInEmail.sendKeys('write first protractor test');
    //     browser.sleep('4000');  
    //     //expect(page.signInEmail.isDisplayed()).toBe(true);             
    // });      

    // it('should launch sign in window after clicking sign in button', function () {  
    //     page.signIn.click();
    //     browser.sleep('4000');  
    //     page.signUp.click();
    //     browser.sleep('4000');  
    //     //expect(page.signInEmail.isDisplayed()).toBe(true);             
    // });     
});