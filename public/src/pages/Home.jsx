import React, {useEffect} from 'react'
import styled from "styled-components"
import gif from "./people.gif"

const Home = () => {

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
  
  return (
    <Container>
    <div className="container-first">
      <div className="left">
        <div className="text">
        <h1><span>un</span>conventional</h1>
        <p>A better way to build your next great app.</p>
        </div>
      </div>
      <div className="right">
        <img src={gif} alt = "people"/>
      </div>
    </div>

    <div className="container-second">
      <div className="content">
        <h1>
          <span>We build digital products</span><br />
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


const Container = styled.div `
body, html {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
}

.container-first {
  display: flex;
  height: 100vh;
  transition: left 0.5s;
  width: 100%;
  justify-content: space-between;
  position: fixed; /* Fixed positioning */
  top: 0;
  left: 0;
  background-color: white;
  transition: transform 0.5s; /* Smooth transition */
  z-index: 10; /* Ensure it's on top */
  transform: translateX(0);
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

.text{
  position: absolute; /* Absolute positioning within .left */
  top: 25%; /* Adjust to vertically center */
  left: 0%; /* Adjust left position */
  transform: translate(50%,50%); /* Center the text */
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
`

export default Home