# whiplash-bot
I created a [twitter bot](https://twitter.com/WhiplashBot) that tweets a random frame from the great movie Whiplash every 6 hours. 

## How to use
### Setup
1. Clone the repository
2. Add "frames" folder containing all selected frames from the movie
3. Create .env with credentials for Twitter development with the following format:
```
APPKEY="..."
APPSECRET="..."
ACCESSTOKEN="..."
ACCESSSECRET="..."
```
4. Run to install dependencies:
> npm install
5. Run to start:
> node index
## Dependencies
- [dotenv](https://www.npmjs.com/package/dotenv)
- [cron](https://www.npmjs.com/package/cron)
- [twitter-api-v2](https://www.npmjs.com/package/twitter-api-v2) 

## Development
I'm writing a mini-how-to if someone wants to do something similar with a favourite movie of theirs, or something similar.
### Add subtitles to movie (Optional)
1. Get [VLC](https://www.videolan.org/), the movie's mp4 and subtitles.
2. Test the subtitles timing with the movie by (in VLC) pressing Subtitle->Add Subtitle File and select the .srt of your choice.
(If the timing isn't right you can use the keybinds G and H to increase or decrease subtitle's delay, I used this [page](https://subshifter.bitsnbites.eu/) to change the .srt file)
3. Then on Media->Stream add movie and subtitles and Stream (You'll need to setup output).

### Getting the movie's frames
1. Now, for getting the frames, open VLC, go to Tools->Preferences select "All", click in Filters (Video) and select "Scene video filter".
Then open the dropdown for Filter (Video), "Scene video filter" and config.
2. Open the movie and let it run for the entire runtime.

## WIP
I have a problem with the timestamp calculator for each frame, the movie standard fps is 24, by doing (frame number / 24) you get the timestamp in seconds. But testing it I noticed it is 60 seconds behind, so I added a 60s in the calculation (don't know how to solve it).
