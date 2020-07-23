import React, { useRef, useEffect, useState } from 'react';
import './App.scss';
import { About, Menu, Projects, MainInfo, Skills, Footer, CV } from './components';
import { Route, NavLink } from 'react-router-dom';

const App = () => {

  // Animated background
  const bgRef = useRef();
  window.addEventListener('mousemove', e => {
    let x = e.pageX / window.innerWidth;
    let y = e.pageY / window.innerHeight;
    if (bgRef.current !== undefined) {
      bgRef.current.style.transform = `translate(${-x}%, ${-y}%)`;
    }
  });

  // First load effects
  const maskRef = useRef();
  const containerRef = useRef();
  useEffect(() => {
    containerRef.current.style.opacity = 1;
    containerRef.current.style.width = '1140px';
    maskRef.current.style.background = 'radial-gradient(closest-side, rgba(0, 0, 0, 0.5), black)';
  }, [])

  // Toggle popup visibility 
  const [visiblePopup, setVisiblePopup] = useState(false);
  const toggleVisiblePopup = () => {
    setVisiblePopup(!visiblePopup);
  }

  // Hide popup on outside click
  const burgerRef = useRef();
  const clickOutside = e => {
    if(!e.path.includes(burgerRef.current)) {
      setVisiblePopup(false);
    }
  }
  useEffect(() => {
    document.body.addEventListener('click', clickOutside);
  }, [])

  // Set height for mobile browsers
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
  window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });
  return (
    <div className="App">
      <div className="mask" ref={maskRef} ></div>
      <img className="bg-image" ref={bgRef} src='./jpg/bg.jpg' alt='img' />
      <div className="container" ref={containerRef}>
        <nav className="menu">
          <NavLink className="menu-logo" exact to="/">
            <div className="logo-left"></div><div>My</div><span>info</span><div className="logo-right"></div>
          </NavLink>
          <Menu type="menu"/>
          <div className="burger-wrapper" ref={burgerRef}>
            {visiblePopup && <Menu type="burger" onClick={toggleVisiblePopup}/>}
            <img src="./svg/bars-solid.svg" alt="burger-icon" onClick={toggleVisiblePopup}/>
          </div>
        </nav>
          <Route path="/" exact component={MainInfo} />
          <Route path="/about" exact component={About} />
          <Route path="/projects" exact component={Projects} />
          <Route path="/skills" exact component={Skills} />
          <Route path="/cv" exact component={CV} />
          <Footer />
      </div>
    </div>
  );
}

export default App;