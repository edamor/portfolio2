import React from 'react';
import './style.css';


export default function Badge(props) {
   

   return (
      <div className="badge">
         <p>{props.title}</p>
      </div>
   )
}