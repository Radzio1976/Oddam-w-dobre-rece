import React from 'react';
import Decoration from '../../assets/images/Decoration.svg';
import Signature from '../../assets/images/Signature.svg';

function AboutUs(props) {
    console.log(props.aboutUs)
    return (
        <section className="about-us-container" ref={props.aboutUs}>
            <div className="about-us-text">
                <h1>O nas</h1>
                <img src={Decoration}></img>
                <h2>Lorem ipsum dolor sit amet, consectetur</h2>
                <h2>adipiscing elit, sed do eiusmod tempor incididunt</h2>
                <h2>ut labore et dolore magna aliqua.</h2>
                <h2>Ut enim ad minim</h2>
                <img style={{ marginTop: "35px", marginRight: "-42%" }} src={Signature}></img>
            </div>
            <div className="about-us-image">

            </div>
        </section>
    )
}



export default AboutUs;
