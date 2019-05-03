module.exports = {
  'User can login': function(browser) {
    browser
      .url('https://dcppfsuat.crm9.dynamics.com/main.aspx')
      .setValue('input', process.env.ZAP_USERNAME)
      .click('[value="Next"]')
      .waitForElementVisible('#passwordInput', 10000)
      .setValue('#passwordInput', process.env.ZAP_PASS)
      .click('#submitButton')
      .waitForElementVisible('#idBtn_Back', 10000)
      .click('#idBtn_Back')
      .waitForElementVisible('#marsIFrame', 10000)
      .end();
  }
};
