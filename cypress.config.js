const { defineConfig } = require("cypress");
// Import the accessibility tasks from wick-a11y plugin
const addAccessibilityTasks = require('wick-a11y/accessibility-tasks');

module.exports = defineConfig({
   accessibilityFolder: 'cypress/your-accessibility-reports-folder',
      env: {
            enableAccessibilityVoice: true
      },
  e2e: {
    setupNodeEvents(on, config) {
          // Add accessibility tasks
      addAccessibilityTasks(on);
    },
  },
});
