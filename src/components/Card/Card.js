import React from 'react';
import './style.css';
import capstone1 from '../../images/capstone1.jpg';
import capstone2 from '../../images/capstone2.jpg';
import todoapp from '../../images/todoapp.jpg';
import cueonlinestore from '../../images/cueonlinestore.jpg';
import canvasproj from '../../images/canvasproj.jpg';
import googlemaps from '../../images/googlemaps.jpg';
import Badge from '../Badge/Badge';


export default function Card({item}) {
   let showImage = () => (
      item.id === 1 ? googlemaps :
      item.id === 2 ? capstone2 :
      item.id === 3 ? todoapp :
      item.id === 4 ? cueonlinestore :
      item.id === 5 ? capstone1 :
      item.id === 6 ? canvasproj :
      "" 
   )

   let showLinks = () => {
      if (!item.githubUrl || !item.liveUrl) {
         if (!item.githubUrl && item.liveUrl) {
            return (
               <div className="card-link-site">
                  <a href={item.liveUrl} target="_blank" rel="noopener noreferrer" >
                     <p>View Site</p>
                  </a>
               </div>
            )
         } else if (!item.liveUrl && item.githubUrl) {
            return (
               <div className="card-link-project">
                  <a href={item.githubUrl} target="_blank" rel="noopener noreferrer" >
                     <p>View Code</p>
                  </a>
               </div>
            )
         }
      } else return (
         <div className="card-link-project">
            <a href={item.liveUrl} target="_blank" rel="noopener noreferrer" >
               <p>Live Demo</p>
            </a>
            <a href={item.githubUrl} target="_blank" rel="noopener noreferrer" >
               <p>View Code</p>
            </a>
         </div>
      )
   }
   
   return (
      <div className={`card ${item.className}`}>
         <div className="card-img">
            <img src={showImage()} alt={"Project Thumbnail"} height={"100%"} width={"100%"} />
         </div>
         
         <p className="card-title h6 text-center">
            {item.title}
         </p>
         <div className="card-badge">
            {item.badges.map(({ badge }) => <Badge title={badge} />)}
         </div>
         {showLinks()}
      </div>
   )
}
