var PageObject = function()
{
    this.supportLink = element(by.linkText('SUPPORT'));

    this.signIn = element(by.linkText('Sign in'));
    //this.signInEmail = element(by.xpath('//*[@id="user_email"]'));
    this.signInEmail = element(by.id('user_email'));

    this.signUp = element(by.linkText('Sign up'));

    this.searchField = element(by.css('#query'));
    this.searchButton = element(by.name('commit'));
    this.searchSignInResult = element(by.linkText("How do I ‘Sign In’ to the 4G Clinical Help Center?"));
    this.searchCoBrowseResult = element(by.linkText("What is CoBrowse, how to use CoBrowse with a 4G Client Excellence Associate"));
  
    this.ticketButton = element(by.xpath('//li[3]/a/span/i'));
    this.helpDropdown = element(by.linkText("-"));

    this.signInPassword = element(by.id('user_password'));


    //this.getConfigGridComponent = () => element(by.xpath('//div[contains(@data-hook, "TableConfig")]//footer/button'));
};

module.exports = PageObject;