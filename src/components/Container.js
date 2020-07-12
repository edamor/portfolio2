import React from 'react';
import { useLocation } from 'react-router-dom';
import Welcome from './Welcome/Welcome';
import Projects from './Projects/Projects';
import About from './About/About';

export default function Container() {

   let { pathname } = useLocation();

   console.log(pathname);

   let activePage = () => {
      if (pathname === "/projects") {
         return (
            <Projects />
         )
      } else if (pathname === "/about") {
         return (
            <About />
         )
      } else return <Welcome />
   }

   return (
      <div className="container">
         {activePage()}
      </div>
   )
}