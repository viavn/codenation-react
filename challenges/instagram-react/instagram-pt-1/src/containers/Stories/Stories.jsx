import React, { useState } from 'react';

import Story from '../../components/Story';

import './Stories.scss';

const Stories = ({ stories, getUserHandler }) => {
  const [showStory, setShowStory] = useState(false);
  const [currentStory, setCurrentStory] = useState({});
  const [currentUser, setCurrentUser] = useState({});

  function handleStoryClick(story, userInfo) {
    setCurrentStory(story);
    setCurrentUser(userInfo);
    setShowStory(true);
  }

  function handleCloseStory() {
    setShowStory(false);
    setCurrentStory({});
    setCurrentUser({});
  }

  return (
    <React.Fragment>
      <section className="stories" data-testid="stories">
        <div className="container">
          {stories.map((story, index) => {
            const userInfo = getUserHandler(story.userId);

            return (
              <button
                className={`user__thumb ${
                  index === 0 ? 'user__thumb--hasNew' : ''
                }`}
                key={story.id}
                onClick={() => handleStoryClick(story, userInfo)}
              >
                <div className="user__thumb__wrapper">
                  <img
                    src={userInfo.avatar}
                    alt={`Foto do usuário ${userInfo.name}`}
                  />
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {showStory && (
        <Story
          story={currentStory}
          user={currentUser}
          handleClose={handleCloseStory}
        />
      )}
    </React.Fragment>
  );
};

export default Stories;
