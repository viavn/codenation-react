import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import UserProfile from '../../containers/UserProfile';
import UserPosts from '../../containers/UserPosts';

import Loading from '../../components/Loading';

const BASE_URL = 'https://5e7d0266a917d70016684219.mockapi.io/api/v1';
const URL_USERS = `${BASE_URL}/users`;

const ProfileRoute = () => {
  const { username } = useParams();
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(`${URL_USERS}?search=${username}`);
      const data = await response.json();
      setUser(data[0]);

      // const respo = await Promise.resolve([
      //   {
      //     avatar:
      //       'https://viniciusvinna.netlify.app/assets//api-instagram/profiles/black-panther/black-panther-profile.jpg',
      //     email: 'blackpanther@gmail.com',
      //     id: '1',
      //     name: "T'Challa",
      //     username: 'blackpanther',
      //   },
      //   {
      //     avatar:
      //       'https://viniciusvinna.netlify.app/assets//api-instagram/profiles/black-panther/black-panther-profile.jpg',
      //     email: 'blackpanther@gmail.com',
      //     id: '16',
      //     name: "T'Challa",
      //     username: 'blackpanther',
      //   },
      // ]);

      // setTimeout(() => {
      //   if (respo && respo.length > 0) {
      //     setUser(respo[0]);
      //   }
      // }, 1000);
    };

    fetchUser();
  }, [username]);

  useEffect(() => {
    const fetchUserPosts = async () => {
      if (user) {
        const response = await fetch(`${URL_USERS}/${user.id}/posts`);
        const data = await response.json();
        setPosts(data);

        // Promise.resolve([
        //   {
        //     id: '1',
        //     imageUrl:
        //       'https://i.ibb.co/HGhF4qd/Screen-Shot-2020-06-04-at-18-10-13.png',
        //     userId: '1',
        //     likes: [{ id: '1', postId: '1' }],
        //     comments: [
        //       {
        //         avatar:
        //           'https://s3.amazonaws.com/uifaces/faces/twitter/yayteejay/128.jpg',
        //         comment:
        //           "programming the transmitter won't do anything, we need to override the back-end PNG bus!",
        //         createdAt: '2020-03-27T00:58:06.401Z',
        //         id: '1',
        //         name: 'Santino Rowe',
        //         postId: '1',
        //       },
        //       {
        //         avatar:
        //           'https://s3.amazonaws.com/uifaces/faces/twitter/kosmar/128.jpg',
        //         comment:
        //           "I'll navigate the digital SCSI matrix, that should protocol the SAS pixel!",
        //         createdAt: '2020-03-27T04:04:36.486Z',
        //         id: '31',
        //         name: 'Virginia Kshlerin',
        //         postId: '1',
        //       },
        //     ],
        //   },
        // ]).then((v) => setPosts(v));
      }
    };

    fetchUserPosts();
  }, [user]);

  return (
    <div data-testid="profile-route">
      {user ? (
        <>
          <UserProfile {...user} />
          <UserPosts posts={posts} />
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default ProfileRoute;
