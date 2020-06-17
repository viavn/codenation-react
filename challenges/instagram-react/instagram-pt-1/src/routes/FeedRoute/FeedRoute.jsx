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
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      // const response = await fetch(URL_USERS);
      // const data = await response.json();
      // setUsers(data);

      Promise.resolve([
        {
          avatar:
            'https://viniciusvinna.netlify.app/assets//api-instagram/profiles/black-panther/black-panther-profile.jpg',
          email: 'blackpanther@gmail.com',
          id: '1',
          name: "T'Challa",
          username: 'blackpanther',
        },
      ]).then((value) => {
        setUsers(value);
      });
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    const fetchPosts = async () => {
      const usersPosts = [];

      setIsLoading(true);

      for (let i = 0; i < users.length; i++) {
        // const user = users[i];
        // const id = parseInt(user.id, 10);

        // const response = await fetch(`${URL_USERS}/${id}/posts`);
        // const posts = await response.json();
        // usersPosts.push(...posts);

        const res = await Promise.resolve([
          {
            id: '1',
            imageUrl:
              'https://i.ibb.co/HGhF4qd/Screen-Shot-2020-06-04-at-18-10-13.png',
            userId: '1',
            likes: [{ id: '1', postId: '1' }],
            comments: [
              {
                avatar:
                  'https://s3.amazonaws.com/uifaces/faces/twitter/yayteejay/128.jpg',
                comment:
                  "programming the transmitter won't do anything, we need to override the back-end PNG bus!",
                createdAt: '2020-03-27T00:58:06.401Z',
                id: '1',
                name: 'Santino Rowe',
                postId: '1',
              },
              {
                avatar:
                  'https://s3.amazonaws.com/uifaces/faces/twitter/kosmar/128.jpg',
                comment:
                  "I'll navigate the digital SCSI matrix, that should protocol the SAS pixel!",
                createdAt: '2020-03-27T04:04:36.486Z',
                id: '31',
                name: 'Virginia Kshlerin',
                postId: '1',
              },
              {
                avatar:
                  'https://viniciusvinna.netlify.app/assets//api-instagram/profiles/bruce/bruce-1.jpg',
                comment:
                  'The FTP capacitor is down, override the multi-byte monitor so we can copy the XML array!',
                createdAt: '2020-06-04T07:15:00.786Z',
                id: '68',
                name: 'Oliver',
                postId: '1',
              },
            ],
          },
        ]);

        usersPosts.push(...res);
      }

      setPosts(usersPosts);
      setIsLoading(false);
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
      {/* <Stories /> */}
      {isLoading ? (
        <Loading />
      ) : (
        <Posts posts={posts} getUserHandler={getUserHandler} />
      )}
    </div>
  );
};

export default FeedRoute;
