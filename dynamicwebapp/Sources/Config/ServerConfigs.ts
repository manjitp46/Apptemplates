export var ServerConfigs = {
  applicationVersion: "",
  appName:"DynamicWebsite",
  applicationPrefix: "",
  jwtSecret: (function() {
    var fs = require("fs");
    var path = require("path");
    var secret = null;
    if (secret) {
      return secret;
    } else {
      try {
        secret = fs.readFileSync(path.join(__dirname, "../.env"), "utf-8");
        return secret;
      } catch (e) {
        // console.log(e);
        return null;
      }
    }
  })() || Math.floor(Math.random() * 100000000)+"",
  jwtTokenExpireTime: 1 * 24 * 60 * 60 * 7, // 7 days
  runtimeConfig: {
    dev: {
      host: "127.0.0.1",
      port: 8081,
      appDelimeter:"(DynamicWebsite)$",
      logFilePath: "server.log",
      timeZoneOffSet: "+5.5",
      timeFormat: "local" // possible values are [local, iso]
    },
    preprod: {},
    production: {
      host: "127.0.0.1",
      port: 8080,
      appDelimeter:"(DynamicWebsite)$",
      timeZoneOffSet: "+0.0"
    }
  },
  dbConfigs: {
    dev: {
      dbType: "sqllite"
    },
    preprod: {},
    production: {}
  }
};
