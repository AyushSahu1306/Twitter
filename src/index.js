const express = require('express');
const connect = require('./config/database');

const app = express();

const Tweet = require('./models/tweet');
const Comment = require('./models/comment')

const TweetRepository = require('./repository/tweet_repository')



app.listen(3000,async () => {
    console.log('server started');
    await connect();
    console.log('Mongo db connected');

    // const tweet = await Tweet.create({
    //     content:"third tweet",
    //     userEmail:"zxy@"
    // })

    // const tweets = await Tweet.find({userEmail:'zxy@'});

    // const tweet = await Tweet.findById('66914b75560540a550b46d4e')
    // tweet.userEmail = 'sb@';
    // await tweet.save();
    // console.log(tweet)

    // const tweetRepo = new TweetRepository();

    // const tweet = await tweetRepo.create({content:"my tweet"});
    // console.log(tweet);
    // tweet.comments.push({content:'first comment'});
    // await tweet.save()
    // console.log(tweet);

    // const tweet = await tweetRepo.create({content:"Tweet with comment schema"});
    // console.log(tweet);
    // const comment = await Comment.create({content:"new Comment"});
    // tweet.comments.push(comment);
    // await tweet.save();

    // const tweet = await tweetRepo.getAll(2,4);
    // console.log(tweet[0].contentWithEmail);


    // const tweet = await tweetRepo.create({content:'With hooks'});
    // console.log(tweet)
})