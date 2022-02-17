import React from 'react';
import ProfileHeader from '../components/ProfileHeader';
import '../styles/ProfilePage.scss';
const ProfilePage = () => {
  return (
    <div className="profile-page">
      <ProfileHeader />
      <div className="profile-content-container">
        <ul className="profile__dashboard-menu">
          <li className="button li-button">Dashboard</li>
          <li className="button li-button">Support</li>
          <li className="button li-button">Notification</li>
        </ul>
        <div className="profile__main">
          <h1>User Loged in i guess?</h1>
          <p>UserName: </p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
