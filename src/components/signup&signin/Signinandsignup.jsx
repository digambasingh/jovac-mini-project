import React, { useState } from 'react';
import './signup.css';
import { FaEnvelope, FaUser, FaLock, FaFacebookF, FaTwitter, FaLinkedin } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Signinandsignup = () => {
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const [signUpUsername, setSignUpUsername] = useState('');
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');
  const [signInUsername, setSignInUsername] = useState('');
  const [signInPassword, setSignInPassword] = useState('');
  const [message, setMessage] = useState('');


  const handleSignUpClick = () => {
    setIsSignUpMode(true);
    setMessage('');
  };

  const handleSignInClick = () => {
    setIsSignUpMode(false);
    setMessage('');
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: signUpUsername, email: signUpEmail, password: signUpPassword  }),
      });
      const data = await response.json();
      setMessage(data.message);
      if (response.ok) {
        setSignUpUsername('');
        setSignUpEmail('');
        setSignUpPassword('');
      }
    } catch (error) {
      console.error('Error signing up:', error); // log the error to the console
      setMessage(`Error signing up: ${error.message}`); // display a more specific error message
    }
    
    // catch (error) {
    //   setMessage('Error signing up');
    // }
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: signInUsername, password: signInPassword }),
      });
      const data = await response.json();
      setMessage(data.message);
      if (response.ok) {
        setSignInUsername('');
        setSignInPassword('');
      }
    } catch (error) {
      setMessage(`Error logging in: ${error.message}`);
    }
    
    // catch (error) {
    //   setMessage('Error logging in');
    // }
  };

  return (
    <div className={`containers ${isSignUpMode ? 'sign-up-mode' : ''}`}>
      <div className="forms-container">
        <div className="signin-signup">
          <form onSubmit={handleSignIn} className="sign-in-form">
            <h2 className="title">Sign In</h2>
            <div className="input-field">
              <span className='i'><FaUser /></span>
              <input 
                type="text" 
                placeholder="Username" 
                required 
                value={signInUsername}
                onChange={(e) => setSignInUsername(e.target.value)}
              />
            </div>
            <div className="input-field">
              <span className='i'><FaLock /></span>
              <input 
                type="password" 
                placeholder="Password" 
                required 
                value={signInPassword}
                onChange={(e) => setSignInPassword(e.target.value)}
              />
            </div>
            <input type="submit" value="Login" className="btn solid" />
            {message && <p className="message">{message}</p>}

            <p className="social-text">Or Sign in with social platforms</p>
            <div className="social-media">
              <a href="https://facebook.com" className="social-icon">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" className="social-icon">
                <FaTwitter />
              </a>
              <a href="https://google.com" className="social-icon">
                <FcGoogle />
              </a>
              <a href="https://linkedin.com" className="social-icon">
                <FaLinkedin />
              </a>
            </div>
          </form>
          <form onSubmit={handleSignUp} className="sign-up-form">
            <h2 className="title">Sign Up</h2>
            <div className="input-field">
              <span className='i'><FaUser /></span>
              <input 
                type="text" 
                placeholder="Username" 
                required
                value={signUpUsername}
                onChange={(e) => setSignUpUsername(e.target.value)}
              />
            </div>
            <div className="input-field">
              <span className='i'><FaEnvelope /></span>
              <input 
                type="email" 
                placeholder="Email"  
                required
                value={signUpEmail}
                onChange={(e) => setSignUpEmail(e.target.value)}
              />
            </div>
            <div className="input-field">
              <span className='i'><FaLock /></span>
              <input 
                type="password" 
                placeholder="Password" 
                required 
                value={signUpPassword}
                onChange={(e) => setSignUpPassword(e.target.value)}
              />
            </div>
            <input type="submit" value="Sign Up" className="btn solid" />
            {message && <p className="message">{message}</p>}

            <p className="social-text">Or Sign up with social platforms</p>
            <div className="social-media">
              <a href="https://facebook.com" className="social-icon">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" className="social-icon">
                <FaTwitter />
              </a>
              <a href="https://google.com" className="social-icon">
                <FcGoogle />
              </a>
              <a href="https://linkedin.com" className="social-icon">
                <FaLinkedin />
              </a>
            </div>
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <p><a href="/">Home</a></p>
            <h3>New here?</h3>
            <p>Sign up now and join our community!</p>
            <button className="btn transparent" id="sign-up-btn" onClick={handleSignUpClick}>Sign Up</button>
          </div>
          <img src="./img/log.svg" className="image" alt="" />
        </div>

        <div className="panel right-panel">
          <div className="content">
            <h3>One of us?</h3>
            <p>Sign in and continue your journey with us!</p>
            <button className="btn transparent" id="sign-in-btn" onClick={handleSignInClick}>Sign In</button>
          </div>
          <img src="./img/register.svg" className="image" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Signinandsignup;