const { I } = inject()
const loginLocator = require('./locator')
const homepageLocator = require('../homepage/locator')
const timeout = require('../commons/timeout')
module.exports = {
    login(url, email, password) {
        I.amOnPage(url)
        I.fillField(loginLocator.emailField, email)
        I.fillField(loginLocator.passwordField, password)
        I.click(loginLocator.loginButton)
        I.waitForElement(homepageLocator.menu.dangXuatText, timeout.loading)
    }
}