import React, { useState } from 'react';
import Logo from '../img/logo.jpg';

function Nav() {
  // Function to handle smooth scrolling when section links are clicked
  const [menuvisiable, setmenupage] = useState(false)
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setmenupage(false)
  };
  const menupage = () => {
    setmenupage(true)
  }
  const closepage = () => {
    setmenupage(false)
  }
  return (
    <div className=' nav flex justify-between items-center py-2 shadow bg-white fixed w-full z-50'>
      <div className="nav-logo nav-left flex justify-start items-center">
        <div className="logo w-14 rounded-full overflow-hidden m-2 ml-1 lg:ml-10 sm:5">
          <img src={Logo} alt="Logo" />
        </div>
        <h1 className='font-bold text-sm lg:text-lg sm:text-lg ml-1 text-neutral-700'>SUHAS SONAWANE</h1>
      </div>
      <div className="nav-right flex mr-5 menu">
        <div className='hidden lg:flex sm:flex'>
          <span className='sm:mx-2 lg:mx-5 text-inherit font-bold cursor-pointer' onClick={() => scrollToSection('home')}>HOME</span>
          <span className='sm:mx-2 lg:mx-5  text-inherit font-bold cursor-pointer' onClick={() => scrollToSection('about')}>ABOUT</span>
          <span className='sm:mx-2 lg:mx-5  text-inherit font-bold cursor-pointer' onClick={() => scrollToSection('project')}>PROJECT</span>
          <span className='sm:mx-2 lg:mx-5  text-inherit font-bold cursor-pointer' onClick={() => scrollToSection('contact')}>CONTACT</span>
        </div>
        <div>
          <span class="material-symbols-outlined flex lg:hidden sm:hidden text-3xl" onClick={menupage}>menu</span>
          <div className={`menu-page duration-500 absolute w-full h-screen bg-white top-0 left-0 lg:hidden sm:hidden ${menuvisiable ? 'hidepage ' : ' '}`}>
          <span class="material-symbols-outlined flex justify-end m-5 mr-6  lg:hidden sm:hidden text-3xl" onClick={closepage}>close</span>
            <div className='relative flex justify-center items-center flex-col w-full h-full border-4 pb-48'>
              <span className='text-2xl my-2 w-full flex justify-center items-center tracking-widest font-bold cursor-pointer' onClick={() => scrollToSection('home')}>HOME</span>
              <span className='text-2xl my-2 w-full flex justify-center items-center tracking-widest font-bold cursor-pointer' onClick={() => scrollToSection('about')}>ABOUT</span>
              <span className='text-2xl my-2 w-full flex justify-center items-center tracking-widest font-bold cursor-pointer' onClick={() => scrollToSection('project')}>PROJECT</span>
              <span className='text-2xl my-2 w-full flex justify-center items-center tracking-widest font-bold cursor-pointer' onClick={() => scrollToSection('contact')}>CONTACT</span>
              <div className="absolute bottom-48 flex saturate-110">
                <a href="https://twitter.com/devsuhas621" target='new'><img width="50" height="50" src="https://img.icons8.com/ios-filled/50/twitterx--v1.png" alt="twitterx--v1"  className='mx-2 w-10'/></a>
                <a target='new' href="https://www.linkedin.com/in/suhas-sonawane-793a31296/"><img width="50" height="50" src="https://img.icons8.com/color/48/linkedin.png" alt="linkedin"  className='mx-2 w-10'/></a>
                <a target='new' href="https://github.com/devsuhas0621"><img width="45" height="45" src="https://img.icons8.com/fluency/48/000000/github.png" alt="github"  className='mx-2 w-10'/></a>
                <a target='new' href="mailto:devsuhas621@gmail.com"><img width="50" height="50" src="https://img.icons8.com/emoji/48/e-mail.png" alt="e-mail"  className='mx-2 w-10'/></a>
    
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
