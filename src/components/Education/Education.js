import React, { Component } from 'react';
import classes from './Education.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import { MdSchool } from 'react-icons/md';
import { MdWork } from 'react-icons/md';
import { FaSchool } from 'react-icons/fa';

class Education extends Component {
    render() {
        return (
                <div className={classes.box} id="education">
                    <ScrollAnimation offset="0" animateIn="fadeInLeft" duration='2' animateOnce="true" initiallyVisible ={true}>
                     <span  className={classes.head}>MY JOURNEY</span>
                    <section className={classes.container}>
                        <div className={classes.container_content}>
                            <div className={classes.row}>
                                <div className={classes.row_md_12}>
                                    <div className={classes.timeline_centered}>
                                        <ScrollAnimation offset="0" animateIn="fadeInLeft" duration='2.4' animateOnce="true" initiallyVisible ={true}>
                                            <article className={classes.timeline_entry}>
                                                <div className={`${classes.timeline_icon} ${classes.timeline_icon_2}`} >
                                                    <MdSchool />     
                                                </div>
                                                <div className={classes.label}>
                                                <h2 >UWaterloo BSc Science and Business + Co-op<span> 2016-2021</span></h2>
                                                <p>I hold an Honours degree from Waterloo, with a minor in Econ. I've been part of many orgs, including:</p>
                                                <li>UW Health Services as a Volunteer, 2016-2017</li>
                                                <li>WatSolve as a Lead Consultant, 2017-2018</li>
                                                <li>UW Blueprint as a VP, 2019</li>
                                                <li>UW PM as a Podcast Host, 2019-2020</li>
                                                </div>
                                            </article>
                                        </ScrollAnimation>

                                        <ScrollAnimation offset="0" animateIn="fadeInLeft" duration='2.4' animateOnce="true" initiallyVisible ={true}>
                                            <article>
                                                <div className={`${classes.timeline_icon} ${classes.timeline_icon_4}`} >
                                                    <MdWork />     
                                                </div>
                                                <div className={classes.label}>
                                                <h2 >Hackathons & Projects</h2>
                                                <p>I've won several hackathons and worked on some side projects!</p>
                                                <h3>Hackathons</h3>
                                                <li>Wolfram Alpha Award - York U Hacks 2018</li>
                                                <li>$1000 Clean Energy Award - Hack Harvard 2018</li>
                                                <li>Best Domain Hack - StarterHacks 2019</li>
                                                <li>Built an app that identifies objects via a hand signal - Hack the North 2019</li>
                                                <li>Built a tool to calculate CO2 emissions from materials based off a clothing picture - UofT Hacks 2020</li>
                                                <li> 4th place finalist - Product Buds Protothon 2021</li>
                                                <h3>Projects</h3>
                                                <li> <a href="https://shenkii.com">Shenkii</a>, 2020-present</li>
                                                <li> <a href="https://drive.google.com/file/d/1fnG9uymq-CEPn1AiSFxkCwSePlwWdVTO/view?usp=sharing"> Volunteer Connect</a>, 2021</li>
                                                </div>
                                                {/*<div className={classes.timeline_entry_inner}><div  className={classes.timeline_icon_3||classes.color_none}></div></div> */}
                                            </article>
                                        </ScrollAnimation>
                                        <br />
                                       <ScrollAnimation offset="0" animateIn="fadeInLeft" duration='2.4' animateOnce="true" initiallyVisible ={true}>
                                            <article className={classes.timeline_entry}>
                                                <div className={classes.timeline_icon} >
                                                <MdWork />
                                                </div>
                                                <div className={classes.label}>
                                                <h2 >Internships & Co-ops <span>2017-2021</span></h2>
                                                <p>I've done numerous internships; these include product, analytics, and sales. <br /> 
                                                    <li>Qidni Labs as a Researcher, Summer 2017</li>
                                                    <li>BBM as a Content Coordinator, Winter 2018</li> 
                                                    <li>Precima as an analyst, Fall 2018 </li>
                                                    <li>SAP as a Product Manager, Summer 2019 </li> 
                                                    <li>Veeva Systems as a Product Manager, Winter 2020 </li> 
                                                    <li>CertiK as a Product Manager, Summer 2020 </li> 
                                                    <li>Avoy/SnapSea as a Product Manager, Fall 2020 </li> 
                                                    <li>Unity Technologies as a Product Manager, Summer 2021 </li> 
                                                </p>
                                                </div>
                                            </article>
                                        </ScrollAnimation>

                                        <ScrollAnimation offset="0" animateIn="fadeInLeft" duration='2.4' animateOnce="true" initiallyVisible ={true}>
                                            <article className={classes.timeline_entry}>
                                                <div className={`${classes.timeline_icon} ${classes.timeline_icon_5}`} >
                                                <MdWork />
                                                </div>
                                                <div className={classes.label}>
                                                <h2 >Full-Time Work<span> 2021-present</span></h2>
                                                <p>TBA - will add once I start! ;) </p>
                                                </div>
                                                <div className={classes.timeline_entry_inner}><div  className={classes.timeline_icon_3||classes.color_none}></div></div>
                                            </article>
                                        </ScrollAnimation>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    </ScrollAnimation>
                </div>
     
        )
    }
}

export default Education;
