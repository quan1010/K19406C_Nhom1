const { I } = inject()
const timeout = require('../commons/timeout')
const apikey = require('./locator')
const customMethod = require("../../utils/customMethod")
const { updatePartiallyEmittedExpression } = require('typescript')

module.exports = {
    createAPI(key){
        customMethod.clickElement(apikey.profileNameLabel)
        customMethod.clickElement(apikey.profileButton)
        // customMethod.clickElement(apikey.apiTab)
        customMethod.clickElement(apikey.apiKeyMenuButton)
        I.waitForElement(apikey.apiKeyMenuButton, timeout.waitForElement)
        customMethod.clickElement(apikey.createAPIButton)
        customMethod.fillValue(apikey.nameField, key)
        customMethod.clickElement(apikey.createandseenAPIButton)
        customMethod.clickElement(apikey.completeButton)
        I.seeTextEquals(key, apikey.check)

    },
    modifyAPI(newKey){
        I.waitForElement(apikey.modifyButton, timeout.waitForElement)
        customMethod.clickElement(apikey.modifyButton);
        I.waitForElement(apikey.modifyApiButton, timeout.waitForElement)
        customMethod.fillValue(apikey.nameField, newKey);
        customMethod.clickElement(apikey.modifyApiButton);
        I.waitForElement(apikey.modifydName, timeout.waitForElement)
        I.seeTextEquals(newKey,apikey.modifydName)
    },
    deleteAPI(){
        customMethod.clickElement(apikey.deleteButton);
        customMethod.clickElement(apikey.confirmDeleteButton);
        I.waitForElement(apikey.alertDeleteSuccess, timeout.waitForElement)
    }

}   