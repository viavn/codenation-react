import React from 'react';

import Post from '../../components/Post';

const Posts = ({ posts, getUserHandler }) => (
  <div className="container">
    {posts.map((post) => (
      <Post
        postInfo={post}
        key={post.id}
        userInfo={getUserHandler(post.userId)}
      />
    ))}
  </div>
);

export default Posts;
