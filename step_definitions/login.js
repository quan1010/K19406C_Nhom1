const { I } = inject();
const email = 'quantt19406c@st.uel.edu.vn'
const password = 'Trantrungquan2001'
const loginFunction = require('../page/login/index')
const loginLocator = require('../page/login/locator')
Given('I login to Casso page', () => {
    loginFunction.login(loginLocator.url, email, password)
})