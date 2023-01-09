const { I } = inject()
const settingPageFunction = require('../page/apikey/index');
Given('I go to create new company page', () => {
    settingPageFunction.viewCreationPage()
});