import React from 'react'

const LoginSignup = () => {

    const handleGoogleLogin = () => {
      // Google login logic here
      console.log('Google login clicked');
    };
    return (
      <div className="container">
        <form action="">
          <h1>Login</h1>
  
          <div className="input-box">
            <input type="text" placeholder="username" required />
          </div>
          <div className="input-box">
            <input type="password" placeholder="password" required />
          </div>
  
          <div className="remember-forgot">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#">Forgot password?</a>
          </div>
  
          <button type="submit" className="btn">
            Login
          </button>
  
          <button type="button" className="google-btn" onClick={handleGoogleLogin}>
            Login with Google
          </button>
  
          <div className="register-link">
            <p>
              Don't have an account? <a href="#">Register here!</a>
            </p>
          </div>
        </form>
      </div>
    );
  };
  export default LoginSignup;