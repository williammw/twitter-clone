import React from 'react';

import { Counter } from './components/counter/Counter';
import './App.css';
import SideBar from './Sidebar'
import Feed from './Feed'
function App() {
  return (
    <div className="App">      
      
      {/* SideBar */}
      <SideBar/>
      {/* Feed */}
      <Feed/>
      {/* Widget */}
    </div>
  );
}

export default App;
