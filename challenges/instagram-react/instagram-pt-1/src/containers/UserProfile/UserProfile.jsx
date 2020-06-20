import React from 'react';

import './UserProfile.scss';

const defaultUser = {
  name: 'John Doe',
  username: 'johndoe',
  email: 'johndoe@gmail.com',
  avatar:
    'https://source.unsplash.com/collection/895539/500x500',
};

const UserProfile = ({ avatar, name, username }) => {
  return (
    <section className="profile" data-testid="profile">
      <div className="container">
        <div className="profile-data">
          <div className="user">
            <div className="user__thumb">
              <img
                src={avatar || defaultUser.avatar}
                alt={`Foto do usuário ${name || defaultUser}`}
              />
            </div>
            <p className="user__name">
              {name || defaultUser.name}
              <span>@{username || defaultUser.username}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserProfile;
