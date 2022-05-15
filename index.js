const rwClient = require("./twitterClient.js");
const CronJob = require("cron").CronJob;

// Select a frame to post:
const fs = require("fs");
const { Console } = require("console");
const frames = fs.readdirSync("./frames");

const chosenFrame = () => {
    return frames[Math.floor(Math.random() * frames.length)] 
}

const getTimeStamp = (frame) => {
    frame_number = parseInt(frame.match(/\d+/)[0]);
    return new Date((frame_number/24-60) * 1000).toISOString().substring(11, 19)
}

// Tweet frame in certain time interval:
const tweetFrame = async () => {
    try {
        frame = chosenFrame();
        frame_time = getTimeStamp(frame);

        const mediaId = await rwClient.v1.uploadMedia(`./frames/${frame}`);
        await rwClient.v1.tweet(`Whiplash (2014) - ${frame_time}` , { media_ids: mediaId });
        console.log("Frame posted.");
    } catch (err) {
        console.log(err);
    }
}

const job = new CronJob("0 0 */2 * * *", () => {
    console.log("Cron job started.");
    tweetFrame();
});

job.start();