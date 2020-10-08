import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import './App.css';
import SideBar from './Sidebar'
import Feed from './Feed'
import Widgets from './Widgets'
import Login from './Login'
import { createStructuredSelector } from 'reselect';
import { selectLogin, getloginstatus } from './LoginSlice'
import {selectCurrentUser} from './redux/user.selectors'
// import { useStateValue } from './StateProvider';

const App = () => {
 
  const [user, setUser] = useState(null)
  useEffect(() => {
    console.log(this)
  }, [])
    
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
    )
  
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});


export default connect(mapStateToProps, )(App);