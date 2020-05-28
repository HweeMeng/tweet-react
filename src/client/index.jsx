import React from 'react';
import ReactDOM from 'react-dom';

import tweets from 'tweets'

// class User extends React.Component {
//   render() {
//     let userOperation = this.props.tweetz.tweets.map(booox=>{
//         return <p>
//         The person who tweeted: {booox.user.screen_name} <br/>
//         The tweet content: {booox.text}
//         </p>
//     })
//     return (

//       <ul>
//       <div>
//         {tweetOperation}
//       </div>
//       </ul>
//     );
//   }
// }

class App extends React.Component {
  render() {
    let tweetOperation = this.props.tweetz.tweets.map(booo=>{
        return <div class = "card">
            {booo.user.name} @{booo.user.screen_name} <br/>
        <div class ="card-body">
            {booo.text}
        </div>
        </div>
    })
    return (

      <ul>
      <div>
        {tweetOperation}
      </div>
      </ul>
    );
  }
}

console.log(tweets);

const element = document.getElementById('app');

ReactDOM.render(<App tweetz = {tweets}/>, element );//

console.log("tweet react");