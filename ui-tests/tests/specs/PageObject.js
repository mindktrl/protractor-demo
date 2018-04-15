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
    //this.searchSignInResultTitle = element(by.xpath("//h1")).getText().matches("^How do I ‘Sign In’ to the 4G Clinical Help Center[\\s\\S]$");


    this.signInPassword = element(by.id('user_password'));


    //this.getConfigGridComponent = () => element(by.xpath('//div[contains(@data-hook, "TableConfig")]//footer/button'));
};

module.exports = PageObject;