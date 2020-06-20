import React from 'react';

import Post from '../../components/Post';

import './UserPosts.scss';

const UserPosts = ({ posts }) => (
  <div className="container">
    {posts ? (
      <div className="user-posts" data-testid="user-posts">
        {posts.map((post) => (
          <Post key={post.id} postInfo={post} userInfo={null} />
        ))}
      </div>
    ) : (
      <div className="no-posts">
        <span className="no-posts__content">
          Não há publicações deste usuário
        </span>
        <span className="no-posts__emoji" role="img" aria-label="Emoje triste">
          😥
        </span>
      </div>
    )}
  </div>
);

export default UserPosts;
