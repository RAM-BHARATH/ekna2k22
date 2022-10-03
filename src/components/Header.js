import React, { useState } from 'react';

function Header() {
  const [sideMenu, setsideMenu] = useState(false);
  const sideMenuToggle = () => {
    console.log(sideMenu);
    setsideMenu(!sideMenu);
  }
  return (
    <header className='fixed z-5 h-fit w-screen'>
      {/* bg-cyan-900 */}
        <ul className='flex justify-between m-0'>
          <div className='p-3'>
            <div className='w-24 h-12 bg-white'></div>
          </div>
          <div className='flex'>
            <button className='z-10' onClick={sideMenuToggle}>
              Become an ambassador
            </button>
            <button className='z-10' onClick={sideMenuToggle}>
              <img className='z-10' src="assets/hamburger-menu-svgrepo-com.svg" alt="" />
            </button>
          </div>
        </ul>
        <nav className={`sidemenu ${ sideMenu ?'open':'close' }`}>
          <ul className='flex flex-col justify-center items-center h-screen text-cyan-50 text-lg'>
            <li className='hover:text-cyan-700 hover:scale-125 transition-transform'>
              <a href="/">
                HOME
              </a>
            </li>
            <li className='hover:text-cyan-700 hover:scale-125 transition-transform'>
              <a href="/events">
                EVENTS
              </a>
            </li>
            <li className='hover:text-cyan-700 hover:scale-125 transition-transform'>
              <a href="/student-ambassador">
                BECOME STUDENTS AMBASSADOR
              </a>
            </li>
            <li className='hover:text-cyan-700 hover:scale-125 transition-transform'>
              <a href="/sponsors">
                SPONSORS
              </a>
            </li>
            <li className='hover:text-cyan-700 hover:scale-125 transition-transform'>
              <a href="/help">
                HELP
              </a>
            </li>
          </ul>
        </nav>
    </header>
  )
}

export default Header