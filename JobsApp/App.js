import React, { useState } from 'react';
import LoginScreen from './Components/Login';
import HomeScreen from './Components/HomeScreen';

export default function App() {
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [loggedIn, setLoggedIn] = useState(false);

const handleLogin = (name, email) => {
  setName(name);
  setEmail(email);
  setLoggedIn(true);
};

const handleSwipeRight = () => {
  setLoggedIn(false);
  setName('');
  setEmail('');
};

return loggedIn ? (
  <HomeScreen name={name} email={email} onSwipeRight={handleSwipeRight} />
) : (
  <LoginScreen onLogin={handleLogin} />
);
}