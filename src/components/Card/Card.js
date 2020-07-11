import React from 'react';
import './style.css';
import capstone1 from '../../images/capstone1.jpg';
import capstone2 from '../../images/capstone2.jpg';
import todoapp from '../../images/todoapp.jpg';
import cueonlinestore from '../../images/cueonlinestore.jpg';


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
   

         // <div className="card-description text-white">
         //    <p>
         //       {item.description}
         //    </p>
         // </div>
   
   return (
      <div className="card">
         <div className="card-img">
            <img src={showImage()} alt="Project Thumbnail" />
         </div>
         <p className="card-title h6 text-center">
            {item.title}
         </p>
         
         {showLinks()}
      </div>
   )
}
