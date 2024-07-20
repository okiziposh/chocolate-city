/*
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Tweets = () => {
  const { artistId } = useParams();
  const [tweets, setTweets] = useState([]);
  const [newTweet, setNewTweet] = useState('');
  const [editingTweetId, setEditingTweetId] = useState(null);
  const [editingContent, setEditingContent] = useState('');

  useEffect(() => {
    fetchTweets();
  }, []);

  const fetchTweets = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/comments');
    setTweets(response.data.filter(tweet => tweet.postId.toString() === artistId));
  };

  const handleNewTweetChange = (e) => {
    setNewTweet(e.target.value);
  };

  const handleNewTweetSubmit = async (e) => {
    e.preventDefault();
    const newTweetData = { postId: artistId, body: newTweet };
    await axios.post('https://jsonplaceholder.typicode.com/comments', newTweetData);
    setNewTweet('');
    fetchTweets();
  };

  const handleEditTweetChange = (e) => {
    setEditingContent(e.target.value);
  };

  const handleEditTweetSubmit = async (e, tweetId) => {
    e.preventDefault();
    const updatedTweetData = { body: editingContent };
    await axios.put(`https://jsonplaceholder.typicode.com/comments/{comment-Id}`, updatedTweetData);
    setEditingTweetId(null);
    setEditingContent('');
    fetchTweets();
  };

  const handleDeleteTweet = async (tweetId) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/comments/{comment-Id}`);
    fetchTweets();
  };

  const startEditing = (tweet) => {
    setEditingTweetId(tweet.id);
    setEditingContent(tweet.body);
  };

  return (
    <div>
      <h2>Tweets</h2>
      <form onSubmit={handleNewTweetSubmit}>
        <textarea
          value={newTweet}
          onChange={handleNewTweetChange}
          placeholder="Write a new tweet..."
        />
        <button type="submit">Tweet</button>
      </form>
      <ul>
        {tweets.map((tweet) => (
          <li key={tweet.id}>
            {editingTweetId === tweet.id ? (
              <form onSubmit={(e) => handleEditTweetSubmit(e, tweet.id)}>
                <textarea
                  value={editingContent}
                  onChange={handleEditTweetChange}
                />
                <button type="submit">Update</button>
                <button type="button" onClick={() => setEditingTweetId(null)}>
                  Cancel
                </button>
              </form>
            ) : (
              <div>
                <p>{tweet.body}</p>
                <button onClick={() => startEditing(tweet)}>Edit</button>
                <button onClick={() => handleDeleteTweet(tweet.id)}>Delete</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tweets;
*/

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Tweets = () => {
  const { id } = useParams();
  const [tweets, setTweets] = useState([]);
  const [newTweet, setNewTweet] = useState('');
  const [editingTweetId, setEditingTweetId] = useState(null);
  const [editingContent, setEditingContent] = useState('');

  useEffect(() => {
    fetchTweets();
  }, []);

  const fetchTweets = async () => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`); 
    setTweets(response.data);
  };

  const handleNewTweetChange = (e) => {
    setNewTweet(e.target.value);
  };

  const handleNewTweetSubmit = async (e) => {
    e.preventDefault();
    const newTweetData = { postId: id, body: newTweet };
    await axios.post('https://jsonplaceholder.typicode.com/comments', newTweetData); 
    setNewTweet('');
    fetchTweets();
  };

  const handleEditTweetChange = (e) => {
    setEditingContent(e.target.value);
  };

  const handleEditTweetSubmit = async (e, tweetId) => {
    e.preventDefault();
    const updatedTweetData = { body: editingContent };
    await axios.put(`https://jsonplaceholder.typicode.com/comments/${tweetId}`, updatedTweetData); 
    setEditingContent('');
    fetchTweets();
  };

  const handleDeleteTweet = async (tweetId) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/comments/${tweetId}`); // 
    fetchTweets();
  };

  const startEditing = (tweet) => {
    setEditingTweetId(tweet.id);
    setEditingContent(tweet.body);
  };

  return (
    <div>
      <h2>Tweets</h2>
      <form onSubmit={handleNewTweetSubmit}>
        <textarea
          value={newTweet}
          onChange={handleNewTweetChange}
          placeholder="Write a new tweet..."
        />
        <button type="submit">Tweet</button>
      </form>
      <ul>
        {tweets.map((tweet) => (
          <li key={tweet.id}>
            {editingTweetId === tweet.id ? (
              <form onSubmit={(e) => handleEditTweetSubmit(e, tweet.id)}>
                <textarea
                  value={editingContent}
                  onChange={handleEditTweetChange}
                />
                <button type="submit">Update</button>
                <button type="button" onClick={() => setEditingTweetId(null)}>
                  Cancel
                </button>
              </form>
            ) : (
              <div>
                <p>{tweet.body}</p>
                <button onClick={() => startEditing(tweet)}>Edit</button>
                <button onClick={() => handleDeleteTweet(tweet.id)}>Delete</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tweets;


