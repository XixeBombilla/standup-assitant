const { Manifest } = require('@slack/bolt');
const { SampleWorkflow } = require('./workflow/sample-workflow');

/**
 * The app manifest contains the app's configuration. This
 * file defines attributes like app name and description.
 * https://api.slack.com/future/manifest
 */
module.exports = Manifest({
  runOnSlack: false,
  name: 'Bolt Template App TEST',
  displayName: 'Bolt Template App TEST',
  description: 'A starter app template built with Bolt JS',
  socketModeEnabled: true,
  settings: {
    interactivity: {
      is_enabled: true,
    },
  },
});