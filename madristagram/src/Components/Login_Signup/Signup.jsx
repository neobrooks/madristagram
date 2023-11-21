import React from 'react';
import "./topbar.css"

const SignUp = () => {

  const handleGoogleSignUp = () => {
    // Google sign-up logic here
    console.log('Google sign-up clicked');
  };

  return (
    <div className="container">
      <form action="">
        <h1>Sign Up</h1>

        <div className="input-box">
          <input type="text" placeholder="username" required />
        </div>
        <div className="input-box">
          <input type="password" placeholder="password" required />
        </div>

        <div className="input-box">
          <input type="password" placeholder="confirm password" required />
        </div>

        <button type="submit" className="btn">
          Sign Up
        </button>

        <button type="button" className="google-btn" onClick={handleGoogleSignUp}>
          Sign Up with Google
        </button>

        <div className="login-link">
          <p>
            Already have an account? <a href="#">Login here!</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUp;