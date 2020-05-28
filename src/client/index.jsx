import React from 'react';
import ReactDOM from 'react-dom';

import tweets from 'tweets'

class App extends React.Component {
  render() {
    let tweetOperation = this.props.tweetz.tweets.map(booo=>{
        return <p>
        The person who tweeted: {booo.user.screen_name} <br/>
        The tweet content: {booo.text}
        </p>
    })
    return (
      <div>
      <ul>
        {tweetOperation}
      </ul>
      </div>
    );
  }
}

console.log(tweets);

const element = document.getElementById('app');

ReactDOM.render(<App tweetz = {tweets}/>, element );//

console.log("tweet react");