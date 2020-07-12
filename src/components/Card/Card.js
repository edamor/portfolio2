import React from 'react';
import './style.css';
import capstone1 from '../../images/capstone1.jpg';
import capstone2 from '../../images/capstone2.jpg';
import todoapp from '../../images/todoapp.jpg';
import cueonlinestore from '../../images/cueonlinestore.jpg';
import Badge from '../Badge/Badge';


export default function Card({item}) {
   let showImage = () => (
      item.image === "capstone1" ? capstone1 :
      item.image === "capstone2" ? capstone2 :
      item.image === "todoapp" ? todoapp :
      item.image === "cueonlinestore" ? cueonlinestore :
      "" 
   )

   let showLinks = () => {
      if (item.type === "project") {
         return (
            <div className="card-link-project">   
               <a href={item.liveUrl} target="_blank" rel="noopener noreferrer" >
                  <p>Live Demo</p>
               </a>
               <a href={item.githubUrl} target="_blank" rel="noopener noreferrer" >
                  <p>View Code</p>
               </a>
            </div>
         )
      } else return (
         <div className="card-link-site">
            <a href={item.liveUrl} target="_blank" rel="noopener noreferrer" >
               <p>View Site</p>
            </a>
         </div>
      )
   }

   let showBadges = () => {
      if (item.id === 1) {
         return (
            <div className="card-badge">
               <Badge title="HTML/CSS" />
               <Badge title="JavaScript" />
               <Badge title="Bootstrap" />
            </div>
         )
      } else if (item.id === 2) {
         return (
            <div className="card-badge">
               <Badge title="HTML/CSS" />
               <Badge title="JavaScript" />
               <Badge title="Java" />
               <Badge title="React JS" />
               <Badge title="Spring Boot" />
               <Badge title="React Router" />
               <Badge title="Node JS" />
               <Badge title="MySql" />
               <Badge title="Heroku" />
            </div>
         )
      } else if (item.id === 3) {
         return (
            <div className="card-badge">
               <Badge title="HTML/CSS" />
               <Badge title="JavaScript" />
               <Badge title="React JS" />
               <Badge title="React Router" />
               <Badge title="Node JS" />
            </div>
         )
      } else return (
         <div className="card-badge">
            <Badge title="HTML/CSS" />
            <Badge title="JavaScript" />
            <Badge title="Liquid" />
            <Badge title="Shopify" />
         </div>
      )
   }
   

         // <div className="card-description text-white">
         //    <p>
         //       {item.description}
         //    </p>
         // </div>
   
   return (
      <div className={`card ${item.className}`}>
         <div className="card-img">
            <img src={showImage()} alt={"Project Thumbnail"} height={"100%"} width={"100%"} />
         </div>
         
         <p className="card-title h6 text-center">
            {item.title}
         </p>
         {showBadges()}
         {showLinks()}
         
      </div>
   )
}
