import React from 'react';
import { useLocation } from 'react-router-dom';
import Welcome from './Welcome/Welcome';
import Projects from './Projects/Projects';

export default function Container() {

   let { pathname } = useLocation();

   console.log(pathname);

   let activePage = () => {
      if (pathname === "/projects") {
         return (
            <Projects />
         )
      } else if (pathname === "/contact") {
         return (
            <div>
               <p className="h3">contact</p>
            </div>
         )
      } else return <Welcome />
   }

   return (
      <div className="container">
         {activePage()}
      </div>
   )
}