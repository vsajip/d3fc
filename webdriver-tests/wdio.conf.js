exports.config = {
    user: process.env.BROWSERSTACK_USER,
    key: process.env.BROWSERSTACK_KEY,
    specs: [
        './webdriver-tests/*Spec.js'
    ],
    capabilities: [
        {
            browserName: 'chrome',
            'browserstack.local': true
        }
    ],
    waitforTimeout: 100000,
    framework: 'jasmine',
    reporter: 'dot',
    jasmineNodeOpts: {
        defaultTimeoutInterval: 300000
    }
};
