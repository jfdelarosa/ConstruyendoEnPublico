import Twitter from 'twitter-lite';

export const client = new Twitter({
	consumer_key: import.meta.env.VITE_TWITTER_API_KEY,
	consumer_secret: import.meta.env.VITE_TWITTER_API_KEY_SECRET,
	access_token_key: import.meta.env.VITE_TWITTER_ACCESS_TOKEN_KEY,
	access_token_secret: import.meta.env.VITE_TWITTER_ACCESS_TOKEN_SECRET
});
