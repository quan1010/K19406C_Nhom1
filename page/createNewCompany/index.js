const { I } = inject()
// const timeout = require('../commons/timeout');
const createNewCompanyLocator = require('./locator')
// const settingPageLocator = require('../apikey/locator')
// const MyVariable = require('../commons/variable');
const customMethod = require('../../utils/customMethod');

module.exports = {
    createNewCompany(website, companyname, option) {
        customMethod.clickElement(createNewCompanyLocator.createNewCompanyButton)
        customMethod.fillValue(createNewCompanyLocator.websiteField, website);
        customMethod.fillValue(createNewCompanyLocator.companyNameField, companyname);
        customMethod.clickElement(option);
        customMethod.clickElement(createNewCompanyLocator.createCompanyButton)
    },
}
