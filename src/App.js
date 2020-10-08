import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import './App.css';
import SideBar from './Sidebar'
import Feed from './Feed'
import Widgets from './Widgets'
import Login from './Login'
import { selectLogin, getloginstatus } from './LoginSlice'
// import { useStateValue } from './StateProvider';

class App extends React.Component{
  render() { 
    const { user } = this.props;
    console.log(user)
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
}

const mapStateToProps = (state, ownProps) => {    
  return { user: state.users }
}


export default connect(mapStateToProps, )(App);
