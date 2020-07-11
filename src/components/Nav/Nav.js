import React from 'react';
import { NavLink } from "react-router-dom";
import './style.css';


export default function Nav() {

   return (
      <div className="nav">
         <ul>
            <li className="nav-list-item">
               <NavLink exact to="/" activeClassName="nav-item-active" className="nav-item" >
                  Home
               </NavLink>
            </li>
            <li className="nav-list-item">
               <NavLink to="/projects" activeClassName="nav-item-active" className="nav-item" >
                  Projects
               </NavLink>
            </li>
            <li className="nav-list-item">
               <NavLink to="/contact" activeClassName="nav-item-active" className="nav-item" >
                  Contact
               </NavLink>
            </li>
         </ul>
      </div>
   )
}