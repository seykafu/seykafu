import React, { Component } from 'react';
import Widecard from '../components/Widecard';

class Education extends Component {

render() {
return (
<div className="condiv">
<h1 className="subtopic">My Education</h1>
<Widecard title="BSc Science and Business" where="UWaterloo" from="Sept 2016" to="Apr 2021"/>
<Widecard title="Product Management Certificate" where="Product School" from="Sept 2018" to="Dec 2018"/>
</div>
)
}

}

export default Education