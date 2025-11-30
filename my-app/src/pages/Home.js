import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to Home Page</h1>
        <button onClick={handleLogout} className="logout-btn">
          Logout
        </button>
      </header>
      <main className="home-content">
        <p>You have successfully logged in!</p>
      </main>
    </div>
  );
}

export default Home;