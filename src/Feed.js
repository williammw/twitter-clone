import React, { useEffect, useState } from 'react'
import './Feed.css';
import TweetBox from './TweetBox.js'
import Post from './Post'
import db from './firebase';
import FlipMove from 'react-flip-move';
function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => (
      setPosts(snapshot.docs.map(doc => doc.data()))
    ))
  }, [])

  console.log(posts)
  return (                
      <div className="feed">
        {/* Header */}
        <div className="feed__header">
          <h2>Home</h2>
        </div>

      {/* TweetBox */}
      <TweetBox />      
      {/* Post */}
      <FlipMove>
      {posts
      // .sort((a,b)=>  b.timestamp - a.timestamp)
      .map(post=> (
        <Post 
        key={post.text}
        displayName={post.displayname}
        username={post.username} 
        verified={post.verified} 
        text={post.text}
        avatar={post.avatar}
        image={post.image}
        timestamp = {post.timestamp}
        />
      ))}
      </FlipMove>
      
      {/* Post */}
      {/* Post */}
      {/* Post */}
      </div>
    
    
  )
}

export default Feed
