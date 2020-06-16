import React, { useState, useEffect } from 'react';

import Stories from '../../containers/Stories';
import Loading from '../../components/Loading';

import Posts from '../../containers/Posts';

import './FeedRoute.scss';

const BASE_URL = 'https://5e7d0266a917d70016684219.mockapi.io/api/v1';
const URL_USERS = `${BASE_URL}/users`;

const FeedRoute = () => {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch(URL_USERS);
      const data = await response.json();

      setUsers(data);
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    const fetchPosts = async () => {
      const usersPosts = [];

      for (let i = 0; i < users.length; i++) {
        const user = users[i];
        const id = parseInt(user.id, 10);

        const response = await fetch(`${URL_USERS}/${id}/posts`);
        const posts = await response.json();

        usersPosts.push(...posts);
      }

      console.log(usersPosts);
      setPosts(usersPosts);
    };

    fetchPosts();
  }, [users]);

  const getUserHandler = (userId) => {
    const user = users.find(
      (user) => parseInt(user.id, 10) === parseInt(userId, 10)
    );

    return user;
  };

  return (
    <div className="feed">
      {<Posts posts={posts} getUserHandler={getUserHandler} />}
    </div>
  );
};

export default FeedRoute;
