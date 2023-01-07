// import { setHeadlessWhen, setCommonPlugins } from '@codeceptjs/configure';
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
// setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
// setCommonPlugins();

// export const config: CodeceptJS.MainConfig = {
//   tests: './*_test.ts',
//   output: './output',
//   helpers: {
//     Playwright: {
//       url: 'http://localhost',
//       show: true,
//       browser: 'chromium'
//     }
//   },
//   include: {
//     I: './steps_file'
//   },
//   name: 'K19406C_Nhom1',
//   fullPromiseBased: true
// }

exports.config = {
  output: './output',
  helpers: {
      Playwright: {
          url: 'http://localhost',
          show: true,
          browser: 'chromium'
      }
  },
  include: {
      I: './steps_file.js'
  },
  mocha: {},
  bootstrap: null,
  timeout: null,
  teardown: null,
  hooks: [],
  gherkin: {
      features: './features/*.feature',
      steps: ['./step_definitions/login.js', './step_definitions/steps']
  },
  plugins: {
      screenshotOnFail: {
          enabled: true
      }
  },
  stepTimeout: 0,
  stepTimeoutOverride: [{
          pattern: 'wait.*',
          timeout: 0
      },
      {
          pattern: 'amOnPage',
          timeout: 0
      }
  ],
  tests: './*_test.js',
  name: 'K19406C_Nhom1'
}