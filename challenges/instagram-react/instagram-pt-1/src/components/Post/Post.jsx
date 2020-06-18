import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Post.scss';

const Post = ({ postInfo, userInfo }) => {
  const { name, avatar, username } = userInfo;
  const { imageUrl, comments } = postInfo;

  const [isFollowing, setIsFollowing] = useState(false);
  const [liked, setLiked] = useState(false);
  const [likedCount, setLikedCount] = useState(comments.length - 1 || 0);

  const handleFollowClick = () => setIsFollowing(!isFollowing);

  function getPostCommentText() {
    const comment = comments.slice(0, 1);

    if (comment.length > 0) {
      const firstComment = comment[0];

      const commentsText =
        likedCount === 1
          ? ` outra ${likedCount} pessoa`
          : ` outras ${likedCount} pessoas`;

      return (
        <>
          curtido por <Link to="/">{firstComment.name}</Link> e
          <Link to="/">{`${commentsText}`}</Link>
        </>
      );
    }

    return '';
  }

  function handleLike() {
    setLiked(!liked);
    setLikedCount(!liked ? likedCount + 1 : likedCount - 1);
  }

  return (
    <article className="post" data-testid="post">
      {/* BEGIN HEADER */}
      <header className="post__header">
        <div className="user">
          <Link className="user__thumb" to={`/users/${username}`}>
            <img src={avatar} alt={`Foto do usuário ${name}`} />
          </Link>
          <Link className="user__name" to={`/users/${username}`}>
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
        <button className="post__control" onClick={handleLike}>
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
