import React from 'react'
import './Widgets.css'
import SearchIcon from '@material-ui/icons/Search';

import {TwitterTweetEmbed, TwitterTimelineEmbed, TwitterShareButton} from 'react-twitter-embed'

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text"/>
      </div>

      <div className="widgets__widgetContainer">
        <h2>What happening</h2>

        <TwitterTweetEmbed  tweetId={"1312798038876807168"} />

        <TwitterTimelineEmbed
        sourceType="profile"
        screenName="de9bugserBeta"
        options={{height:400}} />

        <TwitterShareButton
        url={"https://google.com"}
        options={{text:"#reactjs is awesome", via: "de9bugserBeta"}}/>
      </div>
    </div>
  )
}

export default Widgets
