import React, { Component } from 'react'
import classes from './Interest.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

class Interest extends Component {
  render() {
    return (
      <div className={classes.box} id="interest">
        <ScrollAnimation offset="0" animateIn="fadeInLeft" duration='2.4' animateOnce="true" initiallyVisible={true}>
          <span className={classes.head}>WHAT I DO?</span>
          <h2 className={classes.heading}>HERE ARE THE 3 KEY AREAS I BASE MY CAREER ON</h2>
          <div className={classes.Interest}>
            <ScrollAnimation offset="0" animateIn="fadeInLeft" duration='2.4' animateOnce="true" initiallyVisible={true}>
              <div className={classes.web}>
                <h3>Product Management</h3>
                <p>I've helped teams launch products that generate $X million dollars of revenue or grow in thousands of DAU within short timeframes.</p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation offset="0" animateIn="fadeInLeft" duration='2.4' animateOnce="true" initiallyVisible={true}>
              <div className={classes.web}>
                <h3>Writing Fiction & Non-Fiction </h3>
                <p>Being an aspiring novelist, I write <a href="www.seykafu.medium.com" styles="color:FF0000;"> <u>Medium articles</u> </a>and <a href = "https://seykafu.substack.com/" styles="color:red;"> <u>newsletters</u> </a> centered around tech and business.<br /> I'm currently also writing a fictional adventure/romance light novel!</p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation offset="0" animateIn="fadeInLeft" duration='2.4' animateOnce="true" initiallyVisible={true}>
              <div className={classes.web}>
                <h3>Data Analysis</h3>
                <p>I love exploring how to integrate and apply data analysis in my product thinking.<br /> Tools such as SQL, Python, Excel, Looker and Tableau help get me there! </p>
              </div>
            </ScrollAnimation>
          </div>
        </ScrollAnimation>
      </div>
    )
  }
}

export default Interest;