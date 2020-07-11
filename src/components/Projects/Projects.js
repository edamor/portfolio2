import React from 'react';
import './style.css';
import Card from '../Card/Card';

const projects = require('./projects.json')

export default function Projects() {



   let showProjects = projects.map((item) => {
      return (
         <Card 
            key={item.id}
            item={item}
         />
      )
   })


   return (
      <div className="projects">
         {showProjects}
      </div>
   )
}