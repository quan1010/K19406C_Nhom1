const { I } = inject();
const email = 'quantt19406c@st.uel.edu.vn'
const password = 'Trantrungquan2001'
const loginFunction = require('../page/login/index.js')
const loginLocator = require('../page/login/locator.js')
Given('I login to Casso page', () => {
    loginFunction.login(loginLocator.url, email, password)
})