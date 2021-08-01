import React, {Component} from 'react'
import { Carousel } from 'react-responsive-carousel';
import classes from './CarouselImages.module.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "animate.css/animate.min.css"; 
import {GoProject} from 'react-icons/go'
import {FaArrowCircleDown} from 'react-icons/fa'
import Hello from '../images/sunsetglow.jpg'
import Pencil from '../images/Pencil.jpg'
import laptop1 from '../images/laptop1.jpg'

 class CarouselImages extends Component {
     render(){
    return (
        <div className={classes.carousel_container} id="start">
                {/* <ScrollAnimation offset="0" animateIn="fadeInLeft" duration='2.4' animateOnce="true" initiallyVisible ={true}> */}
            <Carousel className={classes.carousel} dynamicHeight infiniteLoop={true} interval={6000} useKeyboardArrows={true} transitionTime={1700} emulateTouch showArrows={false} autoPlay  showStatus={false} showThumbs={false} >
                <div  className={classes.image_container} >
                    <img className={classes.image} src={Hello}  alt="myImage"/>
                    <div  className={classes.h1}>
                       <h1 >I'm Kasey</h1>
                       <a href="https://drive.google.com/file/d/1OzWV0kLMbCQ2GJ2qozMs766SyLPkVhoH/view?usp=sharing" rel="opener noreferrer" target="_blank">VIEW CV   <FaArrowCircleDown/></a>
                    </div>
                </div>
                <div className={classes.image_container} >
                    <img className={classes.image} src={Pencil} alt="myImage"/>
                    <div  className={classes.h2} > 
                    <h1> I love writing, reading, and building!</h1>
                    <a href="https://seykafu.notion.site/Seykafu-a8fda5021a274d82af74341b9a4a9f2e" rel="opener noreferrer" target="_blank">
                        VIEW PROJECTS   <GoProject/>
                    </a>
                    <br />
                    <br />
                    <br />
                    <a href="https://seykafu.medium.com" rel="opener noreferrer" target="_blank">
                        VIEW WRITING   <GoProject/>
                    </a>
                    </div>
                </div>
                {/* <div className={classes.image_container}>
                    <img className={classes.image} src={laptop1} alt="myImage"/>
                    <div  className={classes.h1}> 
                    </div>
                </div> */}
            </Carousel>
          {/* </ScrollAnimation> */}
        </div>
     )
    }
}
export default CarouselImages