var PageObject = require('./PageObject.js');

describe('4G Clinical help center', function () {
    var page;

    beforeEach(function () {
        page = new PageObject();
        browser.waitForAngularEnabled(false);
        browser.get('https://support.4gclinical.com/hc/en-us');
    });

    // it('should display sign in help page when searching for sign in', function () {  
    //     page.searchField.click().sendKeys('sign in');
    //     page.searchButton.click();
    //     page.searchSignInResult.click()
    //     expect(browser.getCurrentUrl()).toEqual('https://support.4gclinical.com/hc/en-us/articles/360000850247-How-do-I-Sign-In-to-the-4G-Clinical-Help-Center-');  
    // });

    it('should allow user to submit a support ticket', function () {  
        page.ticketButton.click();
        page.helpDropdown.click(); 
        page.helpDropdownGeneral.click(); 
        //expect(page.helpRequestIssueTypeSelect.isDisplayed().toBe(true));
        //page.helpRequestIssueTypeSelect.click();
        //page.helpSubmit.click();
        //expect((page.helpRequestIssueTitle).getText().toEqual('Submit a request'));
        //page.helpRequestIssueTitle.isPresent();
        expect(page.helpRequestIssueTitle.getText()).toEqual('Submit a request');
        //browser.sleep('4000'); 
        //expect(page.helpSubmit.isDisplayed()).toBe(true);
        //expect(element(by.xpath("//input[@name='commit'])[2]")).isDisplayed());
    }); 


});

// describe('4G Clinical help center - sign in', function () {
//     var page;

//     beforeEach(function () {
//         page = new PageObject();
//         browser.waitForAngularEnabled(false);
//         browser.get('https://support.4gclinical.com/hc/en-us');
//     });

//     it('should launch sign in window after clicking sign in button', function () {  
//         page.signIn.click();
//         browser.sleep('4000');     
//     });     
// });