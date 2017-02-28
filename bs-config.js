// bs-config.js
"use strict";
/// Export configuration options
module.exports = {
  "files": "src/**/*.{js, html,css,woff,woff2,jpg}",
  "server": { "baseDir": "src" },
  "port":3000,
  "https":false,
  "host":"localhost",
  "open": false,
  "browser": ["google chrome --unsafely-treat-insecure-origin-as-secure"],
}
