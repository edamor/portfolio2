import React from 'react';
import './style.css';
import avatar from '../../images/avatar.jpg';
import { ReactComponent as Facebook } from '../../images/svg/facebook.svg';
import { ReactComponent as Github } from '../../images/svg/github-logo.svg';
import { ReactComponent as Gmail } from '../../images/svg/gmail.svg';
import { ReactComponent as LinkedIn} from '../../images/svg/linkedin.svg';


export default function About() {



   return (
      <div className="about">
         <div className="about-me">
            <div className="about-me-img">
               <img src={avatar} alt={"My avatar goes here."} height={"50%"} width={"50%"} />
            </div>
            <div className="about-me-text text-white">
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
            <p className="contact-heading h5 text-center text-light-blue">
               What do you have in mind?
            </p>
            <p className="contact-subhead text-center text-white">
               Get in touch now and let's build it together.
            </p>
            <div className="contact-link">
               <a href="https://www.linkedin.com/in/ed-louise-amor-577a99196/" target="_blank" rel="noopener noreferrer">
                  <LinkedIn fill={"#acdbdf"} height={"2.5rem"} width={"2.5rem"} />
               </a>
               <a href="mailto:amor.edlouise@gmail.com?subject=INQUIRY" >
                  <Gmail fill={"#acdbdf"} height={"2.5rem"} width={"2.5rem"} />
               </a>
               <a href="https://www.facebook.com/ed.amor.31" target="_blank" rel="noopener noreferrer">
                  <Facebook fill={"#acdbdf"} height={"2.5rem"} width={"2.5rem"} />
               </a>
               <a href="https://github.com/edamor" target="_blank" rel="noopener noreferrer">
                  <Github fill={"#acdbdf"} height={"2.5rem"} width={"2.5rem"} />
               </a>
            </div>
         </div>
      </div>
   )
}