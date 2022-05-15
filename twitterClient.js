const { TwitterApi } = require("twitter-api-v2");

require("dotenv").config();

const client = new TwitterApi({
    appKey: process.env.APPKEY,
    appSecret: process.env.APPSECRET,
    accessToken: process.env.ACCESSTOKEN,
    accessSecret: process.env.ACCESSSECRET,
})

const rwClient = client.readWrite

module.exports = rwClient
