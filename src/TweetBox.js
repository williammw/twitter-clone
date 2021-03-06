import React, { useState } from 'react'
import './TweetBox.css'
import {Avatar, Button} from '@material-ui/core'
import { GetAppTwoTone } from '@material-ui/icons'
import db from './firebase'

function TweetBox() {

  const [tweetMessage,  setTweetMessage] = useState("")
  const [tweetImage, setTweetImage] = useState("")

  const sendTweet = e => {
    e.preventDefault();
    db.collection('posts').add({
      displayname: 'William Wong',
      username : 'de999bugger',
      verified:true,
      text:tweetMessage,
      image:tweetImage,
      avatar:"https://pbs.twimg.com/profile_images/1267841444200321025/4jtlvrSK_400x400.jpg",
      timestamp: new Date(),
    })
    setTweetMessage("")
    setTweetImage("")
  }
  return (
    <div className="tweetBox">
      <form>
          <div className="tweetBox__input">
            <Avatar src="https://pbs.twimg.com/profile_images/1267841444200321025/4jtlvrSK_400x400.jpg"></Avatar>
            <input 
              onChange={e => setTweetMessage(e.target.value)}
              value={tweetMessage}
              placeholder="what happening?" 
              type="text"
            />
            
          </div>
          <input
            value={tweetImage}
            onChange={e => setTweetImage(e.target.value)}
            className="tweetBox__imageInput"
            placeholder="Optional:: Enter image URL" type="text" 
          />
          <Button onClick={sendTweet} type="submit" className="tweetBox__tweetButton">Tweet</Button>
      </form>      
    </div>
  )
}

export default TweetBox
