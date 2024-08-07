import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import gif from '../images/people.gif';
import scroll from '../images/Animation.gif';

const Home = () => {
  const navigate = useNavigate(); 
  useEffect(() => {
    
    const handleScroll = () => {
      const firstContainer = document.querySelector('.container-first');
      const scrollPosition = window.scrollY;

      const factor = 20;

      const viewportWidth = window.innerWidth;
      const newPosition = Math.min(scrollPosition * factor, viewportWidth);
      firstContainer.style.transform = `translateX(${newPosition}px)`;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const handleLoginClick = () => {
    navigate('/login'); // Navigate to the login page
  };
  const handleSignupClick = () => {
    navigate('/register'); // Navigate to the login page
  };
  return (
    <Container>
      <div className="container-first">
        <div className="top-right-buttons">
          <button className="login-btn" onClick={handleLoginClick}>Login</button>
          <button className="signup-btn" onClick={handleSignupClick}>Sign Up</button>
        </div>
        <div className="left">
          <div className="text">
            <h1>
              <span>un</span>conventional
            </h1>
            <p>A better way to build your next great app.</p>
          </div>
        </div>
        <div className="right">
          <img src={gif} alt="people" />
        </div>
        <div className="scroll-indicator">
          <img src={scroll} alt="scroll" />
        </div>
        <div className="scroll-indicator">Scroll Me</div>
      </div>

      <div className="container-second">
        <div className="content">
          <h1>
            <span>We build digital products</span>
            <br />
            to solve problems for businesses, brands, and brave souls with great ideas.
          </h1>
          <p className="subtext">
            Since 2006 we've been bringing digital know-how, user-focused design, and creative tenacity
            together to make life easier for you, your users, and maybe the universe.
          </p>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  body, html {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
  }

  .container-first {
    display: flex;
    height: 100vh;
    transition: transform 0.5s;
    width: 100%;
    justify-content: space-between;
    position: fixed; /* Fixed positioning */
    top: 0;
    left: 0;
    background-color: white;
    z-index: 10; /* Ensure it's on top */
    transform: translateX(0);
  }

  .top-right-buttons {
    position: absolute;
    top: 20px; /* Adjust as needed */
    right: 20px; /* Adjust as needed */
    z-index: 20; /* Ensure buttons are above other content */
  }

  .top-right-buttons button {
    margin-left: 10px; /* Space between buttons */
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    cursor: pointer;
    background-color: #a0f1e0; /* Primary color */
    color: black;
    transition: background-color 0.3s ease;
  }

  .top-right-buttons button:hover {
    background-color: #80c1b3; /* Darker shade on hover */
  }

  .left {
    background-color: #a0f1e0;
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
  }

  .text {
    position: absolute; /* Absolute positioning within .left */
    top: 25%; /* Adjust to vertically center */
    left: 0%; /* Adjust left position */
    transform: translate(50%, 50%); /* Center the text */
    z-index: 15; /* Ensure it appears above the container */
  }

  .left h1 {
    font-size: 4rem;
    margin: 0;
  }

  .left h1 span {
    text-decoration: underline;
  }

  .left p {
    font-size: 1.5rem;
    margin-top: 1rem;
  }

  .right {
    background-color: #f5f5f5;
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .right img {
    width: 300px;
    height: auto;
  }

  .container-second {
    display: flex;
    flex-direction: column;
    height: 100vh;
    padding: 40px;
    background-color: #a0f1e0;
    position: relative;
    z-index: 1;
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    flex: 1;
  }

  .content h1 {
    font-size: 3rem;
    margin: 0;
  }

  .content h1 span {
    background: black;
    color: white;
    padding: 0 10px;
  }

  .content p {
    font-size: 1.5rem;
    margin-top: 1rem;
  }

  .subtext {
    margin-top: 20px;
    font-size: 1rem;
  }

  .scroll {
    position: absolute;
    left: 20px;
    bottom: 20px;
    writing-mode: vertical-rl;
    transform: rotate(180deg);
  }

  .scroll-indicator {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    color: #000;
    padding: 10px 20px;
    border-radius: 20px;
    font-size: 1.5rem;
    text-align: center;
  }
`;

export default Home;
