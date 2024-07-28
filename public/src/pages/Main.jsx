import React from 'react'
import { useState } from 'react';
import data from './data';

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <h1 style={styles.logo}>My Webpage</h1>
      <ul style={styles.navLinks}>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

const Header = () => {
  return (
    <header style={styles.header}>
      <h2>Welcome to My Webpage</h2>
      <p>This is a simple React webpage example.</p>
    </header>
  );
};
const MainBody = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => setHoveredIndex(index);
  const handleMouseLeave = () => setHoveredIndex(null);

  return (
    <div style={styles.container}>
      {data.map((item, index) => (
        <a
          href="#"
          key={index}
          style={{
            ...styles.card,
            ...(hoveredIndex === index ? styles.cardHover : {}),
          }}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={item.src}
            alt="Card Background"
            style={styles.cardImg}
          />
          <div style={styles.overlay(hoveredIndex === index)}>
            <h2 style={styles.overlayH2}>{item.title}</h2>
            <p style={styles.overlayP}>{item.description}</p>
          </div>
        </a>
      ))}
    </div>
  );
};


const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>&copy; 2024 My Webpage. All rights reserved.</p>
    </footer>
  );
};

const Main = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <MainBody />
      <Footer />
    </div>
  );
};


const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem',
    backgroundColor: '#333',
    color: '#fff',
  },
  logo: {
    margin: '0',
  },
  navLinks: {
    listStyleType: 'none',
    display: 'flex',
    gap: '1rem',
    margin: '0',
  },
  header: {
    padding: '2rem',
    textAlign: 'center',
    backgroundColor: '#f4f4f4',
    borderBottom: '1px solid #ddd',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: '20px',
  },
  card: {
    margin: '30px',
    cursor: 'pointer',
    position: 'relative',
    width: '300px',
    height: '300px',
    overflow: 'hidden',
    borderRadius: '10px',
    boxShadow: '0 10px 20px black',
    transition: 'transform 0.3s',
  },
  cardHover: {
    transform: 'scale(1.05)',
  },
  cardImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  overlay: (isHovered) => ({
    position: 'absolute',
    bottom: isHovered ? '0' : '-100%',
    left: '0',
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.7)',
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'bottom 0.3s',
  }),
  overlayH2: {
    margin: '0',
    fontSize: '1.5rem',
  },
  overlayP: {
    margin: '8px 0 0',
    fontSize: '1rem',
  },
  footer: {
    padding: '1rem',
    textAlign: 'center',
    backgroundColor: '#333',
    color: '#fff',
    position: 'fixed',
    width: '100%',
    bottom: '0',
  },
};


export default Main;