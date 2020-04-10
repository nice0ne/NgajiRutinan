cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-backbutton.Backbutton",
      "file": "plugins/cordova-plugin-backbutton/www/Backbutton.js",
      "pluginId": "cordova-plugin-backbutton",
      "clobbers": [
        "navigator.Backbutton"
      ]
    },
    {
      "id": "cordova-plugin-cleartext.CordovaPluginsCleartext",
      "file": "plugins/cordova-plugin-cleartext/www/CordovaPluginsCleartext.js",
      "pluginId": "cordova-plugin-cleartext",
      "clobbers": [
        "cordova.plugins.CordovaPluginsCleartext"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-whitelist": "1.3.4",
    "cordova-plugin-backbutton": "0.3.0",
    "cordova-plugin-ignore-lint-translation": "0.0.1",
    "cordova-plugin-cleartext": "1.0.0"
  };
});