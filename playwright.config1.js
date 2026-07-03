const config = {
  testDir: './tests',
  retries: 2,
  workers: 3,
  fullyParallel: true,

  timeout: 30000,
  expect: {
    timeout: 5000
  },

  reporter: 'html',

  projects: [
    {
      name: 'Chrome',
      use: {
        browserName: 'chromium',
        headless: false,
        screenshot: 'on',
        video: 'retain-on-failure',
        trace: 'on'
      }
    },
    {
      name: 'Firefox',
      use: {
        browserName: 'firefox',
        headless: true,
        screenshot: 'on',
        permissions: ['geolocation'],
        ignoreHTTPSErrors: true,
        trace: 'on'
      }
    }
  ]
};

module.exports = config;