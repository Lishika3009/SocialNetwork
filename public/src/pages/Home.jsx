import React from 'react'
import styled from "styled-components"

const Home = () => {
  return (
    <Container>
    <div className="container">
      <div className="left">
        <h1><span>un</span>conventional</h1>
        <p>A better way to build your next great app.</p>
      </div>
      <div className="right">
        <img src="/path/to/pigeon.png" alt="Pigeon" />
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

.container {
  display: flex;
  height: 88vh;
  padding: 40px;
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
`

export default Home