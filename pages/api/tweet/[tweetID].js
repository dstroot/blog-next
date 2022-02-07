export default async function handler(req, res) {
  const { tweetID } = req.query;

  if (!tweetID) {
    return res.status(400).json({
      error: 'Please provide a Tweet ID',
    });
  }

  // METHOD SWITCH
  switch (req.method) {
    case 'GET':
      return getTweet(tweetID);
    default:
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  // GET
  async function getTweet(tweetID) {
    const queryParams = new URLSearchParams({
      ids: [tweetID], // comma separated list of tweet IDs, we use just one here
      expansions:
        'author_id,attachments.media_keys,referenced_tweets.id,referenced_tweets.id.author_id',
      'tweet.fields':
        'attachments,author_id,public_metrics,created_at,id,in_reply_to_user_id,referenced_tweets,text',
      'user.fields': 'id,name,profile_image_url,protected,url,username,verified',
      'media.fields':
        'duration_ms,height,media_key,preview_image_url,type,url,width,public_metrics',
    });

    let tweets = {};
    try {
      tweets = await fetch(`https://api.twitter.com/2/tweets?${queryParams}`, {
        headers: {
          Authorization: `Bearer ${process.env.TWITTER_BEARER_TOKEN}`,
        },
      }).then((res) => res.json());
    } catch (err) {
      return res.status(400).json(err);
    }

    const getAuthorInfo = (author_id) => {
      return tweets.includes.users.find((user) => user.id === author_id);
    };

    const getReferencedTweets = (mainTweet) => {
      return (
        mainTweet?.referenced_tweets?.map((referencedTweet) => {
          const fullReferencedTweet = tweets.includes.tweets.find(
            (tweet) => tweet.id === referencedTweet.id
          );

          return {
            type: referencedTweet.type,
            author: getAuthorInfo(fullReferencedTweet.author_id),
            ...fullReferencedTweet,
          };
        }) || []
      );
    };

    return tweets.data.reduce((allTweets, tweet) => {
      const tweetWithAuthor = {
        ...tweet,
        media:
          tweet?.attachments?.media_keys.map((key) =>
            tweets.includes.media.find((media) => media.media_key === key)
          ) || [],
        referenced_tweets: getReferencedTweets(tweet),
        author: getAuthorInfo(tweet.author_id),
      };
      return res.status(200).json(tweetWithAuthor, ...allTweets);
    }, []);
  }
}
