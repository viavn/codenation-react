import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Post.scss';

const Post = ({ postInfo, userInfo }) => {
  const { name, avatar } = userInfo;
  const { imageUrl, comments } = postInfo;
  console.log(postInfo);

  const [isFollowing, setIsFollowing] = useState(false);
  const [liked, setLiked] = useState(false);

  const handleFollowClick = () => setIsFollowing(!isFollowing);

  function getPostCommentText() {
    const comment = comments.slice(0, 1);

    if (comment.length > 0) {
      const firstComment = comment[0];
      const commentsNumber = comments.length - 1;
      
      const commentsText =
        commentsNumber === 1
          ? `outra ${commentsNumber} pessoa`
          : `outras ${commentsNumber} pessoas`;

      return (
        <>
          curtido por <Link to="/">{firstComment.name}</Link> e{' '}
          {`${commentsText}`}
        </>
      );
    }

    return '';
  }

  return (
    <article className="post">
      {/* BEGIN HEADER */}
      <header className="post__header">
        <div className="user">
          <img
            src={avatar}
            alt={`Foto do usuário ${name}`}
            className="user__thumb"
          />
          <Link className="user__name" to="/">
            {name}
          </Link>
        </div>
        <button
          type="button"
          className="post__context"
          onClick={handleFollowClick}
        >
          <span className={`follow-btn ${isFollowing ? 'is-following' : ''}`}>
            {isFollowing ? 'Seguindo' : 'Seguir'}
          </span>
        </button>
      </header>
      {/* END HEADER */}

      {/* BEGIN POST IMAGE */}
      <figure className="post__figure">
        <img src={imageUrl} alt={`Publicação do usuário ${name}`} />
      </figure>
      {/* END POST IMAGE */}

      {/* BEGIN CONTROLS */}
      <footer className="post__controls">
        <button className="post__control">
          <i
            aria-hidden="true"
            className={`${liked ? 'fas' : 'far'} fa-heart`}
          ></i>
        </button>

        <div className="post__status">
          <div className="user">
            <span>{getPostCommentText()}</span>
          </div>
        </div>
      </footer>
      {/* END CONTROLS */}
    </article>
  );
};

export default Post;
