import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';

//importing the picture as "profilepic".
import profilepic from '../img/kaseyfu.jpeg';
import Social from '../components/Social';

class Home extends Component {
render() {
return (
    <div className="condiv home">
        <img src={profilepic} className="profilepic"></img>
        <ReactTypingEffect className="typingeffect" text={["My name is Kasey! I'm a product manager and a writer!"]} speed={100} eraseDelay={700}/>

        <Social />
    </div>

)
}
}
export default Home