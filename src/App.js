import React from 'react';

import { Counter } from './components/counter/Counter';
import './App.css';
import SideBar from './Sidebar'
import Feed from './Feed'
import Widgets from './Widgets'
function App() {
  return (
    <div className="App">      
      
      {/* SideBar */}
      <SideBar/>
      {/* Feed */}
      <Feed/>
      {/* Widget */}
      <Widgets/>
    </div>
  );
}

export default App;
