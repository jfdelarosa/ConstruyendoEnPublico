import { client } from '$lib/twitterClient';

export async function get() {
	const HASHTAG = '#construyendoenpublico';
	const payload = { q: HASHTAG, count: 1, result_type: 'recent' };

	const tweets = await client.get('search/tweets', payload);
	const tweet = tweets.statuses[0];

	await client.post(`statuses/retweet/${tweet.id_str}`);

	return { body: 'ok' };
}
