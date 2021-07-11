import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Widecard from '../components/Widecard';


//importing the picture as "profilepic".
import profilepic from '../img/kaseyfu.jpeg';
import Social from '../components/Social';

class Home extends Component {
render() {
return (
    <div className="condiv home">
        <img src={profilepic} className="profilepic"></img>
        <ReactTypingEffect className="typingeffect" text={["My name is Kasey! I'm a product manager and a writer!"]} speed={100} eraseDelay={700}/>
        <h1 className="subtopic">About Me</h1>
        <h4>Hey there,</h4>
        <h1>I'm Zhao Jun Xiang Fu, also known as Kasey.</h1>
        <h3>Product Manager | Writer </h3>
        <br></br>
        <p>I graduated from Waterloo and worked at a few cool companies for my co-ops! Throughout my journey, I've won hackathons, worked on side projects and began a hobby of writing!
        </p>
        &nbsp;
        <br />
        <br />
        <h1 className="subtopic">My Education</h1>
        <Widecard title="BSc Science and Business" where="UWaterloo" from="Sept 2016" to="Apr 2021"/>
        <Widecard title="Product Management Certificate" where="Product School" from="Sept 2018" to="Dec 2018"/>
        <Social />
    </div>

)
}
}
export default Home