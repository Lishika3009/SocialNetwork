import React from 'react'

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
  return (
    <main style={styles.main}>
      <h3>Main Content</h3>
      <p>This is where the main content goes.</p>
    </main>
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
    color: '#fff'
  },
  logo: {
    margin: '0'
  },
  navLinks: {
    listStyleType: 'none',
    display: 'flex',
    gap: '1rem',
    margin: '0'
  },
  header: {
    padding: '2rem',
    textAlign: 'center',
    backgroundColor: '#f4f4f4',
    borderBottom: '1px solid #ddd'
  },
  main: {
    padding: '2rem',
    textAlign: 'center'
  },
  footer: {
    padding: '1rem',
    textAlign: 'center',
    backgroundColor: '#333',
    color: '#fff',
    position: 'fixed',
    width: '100%',
    bottom: '0'
  }
};

export default Main;