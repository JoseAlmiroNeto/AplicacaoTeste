import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom'
import Header from './Components/Header';
import Login from './page/Login';
import Routes from './routes';

import './App.css';
import { ContextProvider } from './context/formContext';

function App() {

  const [user, setUser] = useState({
    id: 1,
    password: '12345'
  });

  if(user === null) {
    return (
      <Login />
    );
  
  }

  return (
    <BrowserRouter>
    <ContextProvider>
         <Header />

         <Routes />

    </ContextProvider>
    </BrowserRouter>
  );

}

export default App;