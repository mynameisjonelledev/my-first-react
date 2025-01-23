import { useState } from 'react'
import './index.css';
import { Header } from './Header.jsx';
import {MainContent} from './MainContent.jsx'
import { Footer } from './Footer.jsx';

export function reactLogo() {
  return(
    <img src="./assets/react-1-logo-png-transparent.png"  width="40px" />
  );
}

export function ReactFactsTitle() {
  return (
    <main>
      <div className="title">Fun Facts about React</div>
      <ul>
      <li className="react-li">Was first released in 2013</li>
      <li className="react-li">Was originally created by Jordan Walke</li>
      <li className="react-li">Has well over 100K stars on GitHub</li>
      <li className="react-li">Is maintained by Meta</li>
      <li className="react-li">Power thousands of enterprise apps, including mobile apps</li>
      </ul>
    </main>
  );
}


export function Page() {
  return (
    <>
    <Header />
    <MainContent />
    <Footer />
    </>
    
  );
}


