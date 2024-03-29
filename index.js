const rwClient = require("./twitterClient.js");
const CronJob = require("cron").CronJob;

// Select a frame to post:
const fs = require("fs");
const { Console } = require("console");
const frames = fs.readdirSync("./frames");

const MOVIE_NAME = "Whiplash"

const chosenFrame = () => {
    return frames[Math.floor(Math.random() * frames.length)] 
}

const getTimeStamp = (frame) => {
    frame_number = parseInt(frame.match(/\d+/)[0]);
    return new Date((frame_number/24+60) * 1000).toISOString().substring(11, 19)
}

// Tweet frame in certain time interval:
const tweetFrame = async () => {
    try {
        frame = chosenFrame();
        frame_time = getTimeStamp(frame);

        const mediaId = await rwClient.v1.uploadMedia(`./frames/${frame}`);
        await rwClient.v1.tweet(`${MOVIE_NAME} - ${frame_time}` , { media_ids: mediaId });
        console.log(`Frame posted @ ${new Date()}`);
    } catch (err) {
        console.log(err);
    }
}

// Setup a cron job to tweet every 3 hours
const job = new CronJob("0 0 */3 * * *", () => {
    tweetFrame();
});

job.start();