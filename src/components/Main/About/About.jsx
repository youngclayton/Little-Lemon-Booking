import React from "react";
import { AppWrap } from "../../../wrapper";
import './About.css';
import { images } from "../../../constants";

const aboutData = {
    title: "Little Lemon",
    subTitle: "Chicago",
    description: 
    `Welcome to Little Lemon, a delightful culinary gem nestled in the heart of Chicago! 
    At Little Lemon, we believe that great meals start with fresh, high-quality ingredients, 
    and our passion for creating delicious and memorable dining experiences is evident in every 
    dish we serve. `,
    image1: images.MarioandAdrianA,
    image2: images.resturantChefB,
};
const About = () => {
    return (
        <div
            className="app_about-section"
        >
            
            
                <div className="app_about-description-box">
                    <h1 className="app__about-title">{aboutData.title}</h1>
                    <br />
                    <h4 className="app__about-subtitle">{aboutData.subTitle}</h4>
                    <br />
                    <p className="app__about-description">
                        {aboutData.description}
                            <br />
                            <br />
                        {aboutData.description}
                    </p>
                </div>
           
            {/* <div className="app__about-image-box-section"> */}
                <div className="app__about-image-holder">
                        <div className="app__about-image-box img-box-1"
                            style= 
                            {
                                {
                                    backgroundImage: `url(${aboutData.image2})`
                                }
                            }
                        />
                        <div className="app__about-image-box img-box-2" 
                            style=
                            { 
                                {
                                    backgroundImage: `url(${ aboutData.image1 })`
                                } 
                            } 
                        />
                </div>
            {/* </div> */}

        </div>
    );
}

export default AppWrap(About, 'About', 'app__about');