const { I } = inject();
// Add in your custom step files

Given('I go to google page', () => {
    I.amOnPage("https://www.google.com/")
});