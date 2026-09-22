import React, { useState } from 'react';
import LoginView from './views/LoginView';
import MainLayout from './views/MainLayout';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  if (!isLoggedIn) {
    return <LoginView setIsLoggedIn={setIsLoggedIn} setCurrentUser={setCurrentUser} />;
  }

  return <MainLayout currentUser={currentUser} setIsLoggedIn={setIsLoggedIn} />;
}