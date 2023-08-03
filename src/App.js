import React, { useEffect, useState } from 'react';
import Login from './Login';
import Protected from './Protected';

function App() {
  const [view, setView] = useState(<Login />)

  useEffect(()=>{
    const token = localStorage.getItem('token');
    token ? setView(<Protected/>) : localStorage.removeItem('token')
  },[])

  return <div>{view}</div>;
}

export default App;