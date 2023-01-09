const { I } = inject()
const apikeyFunction = require('../page/apikey/index');
const Myfunctions = require('../page/commons/functions')
const MyVariable = require('../page/commons/variable')
const randomName = Myfunctions.randomString(8)
const randomeditName = Myfunctions.randomString(5)

Given('I create api key', () => {
     apikeyFunction.createAPI(randomName)
})
Given('I want to modify api key',  () =>{
     apikeyFunction.modifyAPI(MyVariable.newKey)   
})
Given('I want to delete api key',()=>{
     apikeyFunction.deleteAPI()
})