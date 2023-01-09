const { I } = inject()
const loginLocator = require('./locator.js')
const homepageLocator = require('../homepage/locator.js')
const timeout = require('../commons/timeout.js')
// const customMethod = require('../utils/customMethod')
module.exports = {
    login(url, email, password) {
        I.amOnPage(url)
        I.fillField(loginLocator.emailField, email)
        I.fillField(loginLocator.passwordField, password)
        I.click(loginLocator.loginButton)
        // I.waitForElement(homepageLocator.menu.dangXuatText, timeout.loading)
    }
}