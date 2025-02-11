import React, { useState } from 'react';
import SignupForm from './components/SignupForm/SignupForm';
import Authenticate from './components/Authenticate/Authenticate';
import './App.css';

function App() {
  const [token, setToken] = useState(null);

  return (
    <>
      <h2>Token: {token}</h2>
      <SignupForm setToken={setToken} />
      <Authenticate token={token} />
    </>
  );
}

export default App;
