import React from 'react'
import {Avatar} from '@material-ui/core'
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';
import './Post.css'
function Post({
  displayName,username,verified,text,image,avatar
}) {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src="https://pbs.twimg.com/profile_images/1267841444200321025/4jtlvrSK_400x400.jpg"></Avatar>
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>William Wong {" "}
              <span className="post__headerSpecial">
                <VerifiedUserIcon className="post__badge"/>
                @wwwwwwwwwwwwww
                </span> 
            </h3> 
          </div>
          <div className="post__headerDescription">
            <p>I build twitter layout using reactJs, fucking cool</p>
          </div>
        </div>
        <img src="https://media.giphy.com/media/3o8dFn5CXJlCV9ZEsg/giphy.gif" alt=""/>
        <div className="post__footer">
          <ChatBubbleOutlineIcon fontSize="small" /> 
          <RepeatIcon fontSize="small" />
          <FavoriteBorderIcon fontSize="small" />
          <PublishIcon fontSize="small" />
        </div>
      </div>
    </div>
  )
}

export default Post
