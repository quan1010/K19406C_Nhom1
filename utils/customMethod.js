const timeout = require("../page/commons/timeout")
const { I } = inject()
module.exports = {
    fillValue(locator, value) {
        I.waitForVisible(locator, timeout.waitForElement)
        I.fillField(locator, value)
    },
    clickElement(locator) {
        I.waitForElement(locator, timeout.waitForElement)
        I.click(locator)
    },
    clickByText(text) {
        I.waitForText(text, timeout.waitForElement)
        I.click(text)
    },
    clearValue(locator) {
        I.waitForVisible(locator, timeout.waitForElement)
        I.clearField(locator)
    }
}
