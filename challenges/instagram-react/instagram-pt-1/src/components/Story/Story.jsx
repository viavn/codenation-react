import React, { useCallback, useState } from 'react';

import { Link } from 'react-router-dom';

import './Story.scss';

const Story = ({ story, user, handleClose }) => {
  const { name, avatar, username } = user;
  const { videoUrl } = story;

  const [videoDuration, setVideoDuration] = useState(null);
  const [playingTime, setPlayingTime] = useState(0);

  const currentPlayingTime = useCallback(() => {
    if (videoDuration) {
      const time = (playingTime / videoDuration) * 100;
      return `${time.toFixed(2)}%`;
    }
    return '0%';
  }, [videoDuration, playingTime]);

  return (
    <section className="story">
      <div className="container">
        {/* BEGIN STORY HEADER */}
        <header className="story__header">
          <div className="user">
            <Link to={`/users/${username}`} className="user__thumb">
              <img src={avatar} alt={`Foto do usuário ${name}`} />
            </Link>
            <Link to={`/users/${username}`} className="user__name">
              {name}
            </Link>
          </div>
          <button className="story__close" onClick={handleClose}>
            <i className="fas fa-times"></i>
          </button>
        </header>
        {/* END STORY HEADER */}

        {/* BEGIN PROGRESS BAR */}
        <div className="story__progress">
          <div
            className="story__progress__elapsed"
            style={{
              width: currentPlayingTime(),
            }}
          ></div>
        </div>
        {/* END PROGRESS BAR */}
      </div>
      <div className="container">
        <div className="story__video__wrapper">
          <video
            src={videoUrl}
            autoPlay
            loop
            onTimeUpdate={(e) => setPlayingTime(e.target.currentTime)}
            onLoadedMetadata={(e) => setVideoDuration(e.target.duration)}
          >
            Desculpa, o seu navegador não suporta vídeos incorporados, mas você
            pode <Link to={videoUrl}>baixá-lo</Link>e assistir pelo seu
            reprodutor de mídia favorito!
          </video>
        </div>
      </div>
    </section>
  );
};

export default Story;
