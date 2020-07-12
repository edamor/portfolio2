import React from 'react';
import './style.css';
import avatar from '../../images/avatar.jpg';
import facebook from '../../images/svg/facebook.svg';
import github from '../../images/svg/github-logo.svg';
import gmail from '../../images/svg/gmail.svg';
import linkedin from '../../images/svg/linkedin.svg';


export default function About() {



   return (
      <div className="about">
         <div className="about-me">
            <div className="about-me-img">
               <img src={avatar} alt={"My avatar goes here."} height={"50%"} width={"50%"} />
            </div>
            <div className="about-me-text">
               <p>
                  I build websites and web applications with focus on performance and scalability. 
                  I build them from scratch or with common tools and modern frameworks.
               </p> 
               <p>
                  I am passionate about learning every day to grow professionally in the IT field.
                  My passion extends to solving problems, puzzles, even math equations.
               </p>
            </div>
         </div>
         <div className="contact">
            <p className="contact-heading h5 text-center text-white">
               What do you have in mind?
            </p>
            <p className="contact-subhead text-center text-white">
               Get in touch now and let's build it together.
            </p>
            <div className="contact-link">
               <a href="mailto:amor.edlouise@gmail.com?subject=INQUIRY fr Website" >
                  <img src={facebook} alt={"FaceBook logo goes here."} height={"2 rem"} width={"2 rem"} />
               </a>
            </div>
         </div>
      </div>
   )
}