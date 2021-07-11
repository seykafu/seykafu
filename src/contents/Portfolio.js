import React, { Component } from 'react';
import Widecard from '../components/Widecard';

class Portfolio extends Component {
render() {
return (
<div className="condiv skills">
<h1 className="subtopic">My Product Portfolio </h1>

<h2>Past Projects</h2>

<Widecard title="BSc Science and Business" where="UWaterloo" from="Sept 2016" to="Apr 2021"/>
<Widecard title="Product Management Certificate" where="Product School" from="Sept 2018" to="Dec 2018"/>

<h2>My Toolkit</h2>
<ul>
    <li>Figma</li>
    <li>Python</li>
    <li>React</li>
    <li>SQL</li>
</ul>
</div>
)
}
}
export default Portfolio