module.exports = ({ env }) => ({
    url: env("MY_HEROKU_URL"),
    proxy: true,
    app: {
      keys: env.array("APP_KEYS", ["o73Cj2FR5lR8nO0j2udtXw==", "K9Wps1ozLgtQzAEDFkJsQA=="]),
    },
  });
  