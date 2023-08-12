import React, { useEffect, useState } from 'react';
import Login from './Login';
import Protected from './Protected';
import './App.css';
function App() {
  const [view, setView] = useState(<Login />)

  useEffect(()=>{
    const token = localStorage.getItem('token');
    token && setView(<Protected/>)
  },[])

  return <div>{view}</div>;
}

export default App;