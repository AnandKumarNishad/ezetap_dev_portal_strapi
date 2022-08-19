// Path: ./config/env/production/server.js`

module.exports = ({ env }) => ({
  url: env('MY_HEROKU_URL'),
  Proxy: true,
  app: {
    keys: env.array("APP_KEYS", ["2tdk4ZzUcWq1hV6cGSW9wg==", "K9Wps1ozLgtQzAEDFkJsQA=="]),
  },
});

