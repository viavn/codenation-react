import React, { useState, useEffect } from 'react';

import UsersList from '../../containers/UsersList/UsersList';

const BASE_URL = 'https://5e7d0266a917d70016684219.mockapi.io/api/v1';
const URL_USERS = `${BASE_URL}/users`;

const UsersRoute = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch(URL_USERS);
      const data = await response.json();
      setUsers(data);

      // const resp = await Promise.resolve([
      //   {
      //     avatar:
      //       'https://viniciusvinna.netlify.app/assets//api-instagram/profiles/black-panther/black-panther-profile.jpg',
      //     email: 'blackpanther@gmail.com',
      //     id: '1',
      //     name: "T'Challa",
      //     username: 'blackpanther',
      //   },
      // ]);

      // setTimeout(() => {
      //   setUsers(resp);
      // }, 1000);
    };

    fetchUsers();
  }, []);

  return (
    <div className="container" data-testid="users-route">
      <UsersList users={users} />
    </div>
  );
};

export default UsersRoute;
