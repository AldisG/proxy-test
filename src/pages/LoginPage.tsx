import React from 'react';
import '../styles/LoginPage.scss';
const LoginPage = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log('!');
  };
  return (
    <div className="login-form-container">
      <div className="background-element">
        <p>
          Those people who develop the ability to continuously acquire new and
          better forms of knowledge that they can apply to their work and to
          their lives will be the movers and shakers in our society for the
          indefinite future
        </p>
        <span>
          <b>Brian Tracy</b>
        </span>
      </div>
      <div className="login-container">
        <div className="login-wrapper">
          <div className="form-header">
            <h1>Login to your Account</h1>
            <span>with your registered Email Address</span>
          </div>
          <hr />
          <form className="login-form" onSubmit={handleSubmit}>
            <label className="form-input-label">
              Email address*
              <input className="form-input" type="email" />
            </label>
            <label className="form-input-label">
              Enter password*
              <input className="form-input" type="password" />
            </label>
            <label className="form-checkbox-label">
              <input type="checkbox" />
              Remember my password
            </label>
            <button className="submit-button" type="submit">
              Login
            </button>
            <span className="linetrought-element">
              <hr />
              <span>or</span>
            </span>
            <button className="submit-button" type="button">
              Login with Google
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
