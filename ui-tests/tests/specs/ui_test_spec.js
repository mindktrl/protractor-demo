var PageObject = require('./PageObject.js');

describe('4G Clinical help center', function () {
    var page;

    beforeEach(function () {
        page = new PageObject();
        browser.waitForAngularEnabled(false);
        browser.get('https://support.4gclinical.com/hc/en-us');
    });

    it('should display sign in help page when searching for sign in', function () {  
        page.searchField.click().sendKeys('sign in');
        page.searchButton.click();
        page.searchSignInResult.click()
        expect(browser.getCurrentUrl()).toEqual('https://support.4gclinical.com/hc/en-us/articles/360000850247-How-do-I-Sign-In-to-the-4G-Clinical-Help-Center-');  
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