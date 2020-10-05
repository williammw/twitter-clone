import React, { useState } from 'react';

import { Counter } from './components/counter/Counter';
import './App.css';
import SideBar from './Sidebar'
import Feed from './Feed'
import Widgets from './Widgets'
import Login from './Login'
import { useStateValue } from './StateProvider';
function App() {
  
  const[{user}, dispatch] = useStateValue()
  return (
    
      <>        
      {!user ? (
      <Login/>
      ) : (
        <div className="App">  
        {/* SideBar */}
        <SideBar/>
        {/* Feed */}
        <Feed/>
        {/* Widget */}
        <Widgets/>
        </div>
      )}  
      </>
  );
}

export default App;
