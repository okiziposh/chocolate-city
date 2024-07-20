import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/comments';

export const getAllTweets = (artistId) => axios.get(`${API_URL}?postId=${artistId}`);
export const createTweet = (tweet) => axios.post(API_URL, tweet);
export const updateTweet = (tweetId, tweet) => axios.put(`${API_URL}/${tweetId}`, tweet);
export const deleteTweet = (tweetId) => axios.delete(`${API_URL}/${tweetId}`);
