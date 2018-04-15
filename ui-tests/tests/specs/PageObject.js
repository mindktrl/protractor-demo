var PageObject = function()
{
    this.searchField = element(by.css('#query'));
    this.searchButton = element(by.name('commit'));
    this.searchSignInResult = element(by.linkText("How do I ‘Sign In’ to the 4G Clinical Help Center?"));
    this.searchCoBrowseResult = element(by.linkText("What is CoBrowse, how to use CoBrowse with a 4G Client Excellence Associate"));
  
    this.ticketButton = element(by.xpath('//li[3]/a/span/i'));
    this.helpDropdown = element(by.linkText("-"));
    this.helpDropdownGeneral = element(by.id("352228"));
    this.helpRequestIssueTypeSelect = element(by.id('request_issue_type_select'));
    this.helpRequestIssueTitle = element(by.xpath("//h1"));
};

module.exports = PageObject;