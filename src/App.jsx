import React, { useState } from 'react';
import Navbar from './Navbar';
import Login from './Login';
import PetProfile from './PetProfile';
import RawFoodInfo from './RawFoodInfo';
import CommunityForum from './CommunityForum';
import RawFoodCalculator from './RawFoodCalculator';
import './styles/App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('login');
  const [userSession, setUserSession] = useState({ sessionId: null, username: null });

  
  const handleLogin = (sessionId, username) => {
    setUserSession({ sessionId, username });
    setCurrentPage('petProfile'); 
  };


  const handleLogout = () => {
    setUserSession({ sessionId: null, username: null });
    setCurrentPage('login');
  };


  const renderPage = () => {
    if (!userSession.sessionId) {
      return <Login onLogin={handleLogin} />;
    }

    switch (currentPage) {
      case 'petProfile':
        return <PetProfile sessionId={userSession.sessionId} />;
      case 'rawFoodInfo':
        return <RawFoodInfo />;
      case 'communityForum':
        return <CommunityForum sessionId={userSession.sessionId} username={userSession.username} />;
      case 'rawFoodCalculator':
        return <RawFoodCalculator />;
      default:
        return <Login onLogin={handleLogin} />;
    }
  };

  return (
    <div className="App">
      <Navbar setCurrentPage={setCurrentPage} onLogout={handleLogout} isLoggedIn={!!userSession.sessionId} />
      <div className="content">
        {renderPage()}
      </div>
    </div>
  );
}

export default App;





