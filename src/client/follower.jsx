import React from 'react';

export default class Follower extends React.Component{
    render(){
        let userDetails = this.props.tweetz.tweets.map(booo=>{
            return <p>
            The person who tweeted: {booo.user.screen_name} <br/>
            The tweet content: {booo.user.name}
            </p>
        })
        return <p>Followers:</p>
    }
}