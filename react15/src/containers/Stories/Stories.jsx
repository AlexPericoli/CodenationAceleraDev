import React, { useState } from "react";

import Story from "../../components/Story";

import "./Stories.scss";

const Stories = ({ stories, getUserHandler }) => {
  const showStory = false;
  const user = true;
  const story = true;
  const handleClose = false;

  return (
    <React.Fragment>
      <section data-testid="stories" className="stories">
        <div className="container">[ Stories ]</div>
      </section>

      {showStory && (
        <Story story={story} user={user} handleClose={handleClose} />
      )}
    </React.Fragment>
  );
};

export default Stories;
