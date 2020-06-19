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
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      // const response = await fetch(`${URL_USERS}?search=${username}`);
      // const data = await response.json();

      const respo = await Promise.resolve([
        {
          avatar:
            'https://viniciusvinna.netlify.app/assets//api-instagram/profiles/black-panther/black-panther-profile.jpg',
          email: 'blackpanther@gmail.com',
          id: '1',
          name: "T'Challa",
          username: 'blackpanther',
        },
        {
          avatar:
            'https://viniciusvinna.netlify.app/assets//api-instagram/profiles/black-panther/black-panther-profile.jpg',
          email: 'blackpanther@gmail.com',
          id: '16',
          name: "T'Challa",
          username: 'blackpanther',
        },
      ]);

      setTimeout(() => {
        if (respo && respo.length > 0) {
          setUser(respo[0]);
        }
      }, 1000);
    };

    fetchUser();
  }, [username]);

  useEffect(() => {
    const fetchUserPosts = async () => {
      if (user) {
        const response = await fetch(`${URL_USERS}/${user.id}/posts`);
        const data = await response.json();

        setPosts(data);
      }
    };

    fetchUserPosts();
  }, [user]);

  return (
    <div data-testid="profile-route">
      {user ? (
        <>
          <UserProfile {...user} />
          <UserPosts />
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default ProfileRoute;
