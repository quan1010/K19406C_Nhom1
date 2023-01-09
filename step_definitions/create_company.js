const { I } = inject()
const createNewCompanyFunction = require('../page/createNewCompany/index')
const createNewCompanyLocator = require('../page/createNewCompany/locator')
const Myfunctions = require('../page/commons/functions');
const MyVariable = require('../page/commons/variable');

Given('I create a new company', () => {
    createNewCompanyFunction.createNewCompany(MyVariable.website, MyVariable.companyName, createNewCompanyLocator.optionsRadio + '[' + Myfunctions.randomNumber(1, 6) + ']')
});
