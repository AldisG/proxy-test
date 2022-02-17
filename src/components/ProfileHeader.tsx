import React from 'react';

const ProfileHeader = () => {
  const handleSearchForm = (e: any) => {
    e.preventDefault();
  };
  return (
    <div className="profile-page__header">
      <span className="logo">Quiz Time</span>
      <form onSubmit={handleSearchForm}>
        <input type="text" placeholder="Search..." />
        <button>?</button>
      </form>
      <button className="button start-quiz-button">Start Quiz</button>
      <div className="profile-navigation-block">Username "???"</div>
    </div>
  );
};

export default ProfileHeader;
