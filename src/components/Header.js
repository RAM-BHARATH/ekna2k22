import React, { useState } from 'react';

function Header({ bg }) {
  const [sideMenu, setsideMenu] = useState(false);
  const sideMenuToggle = () => {
    console.log(sideMenu);
    setsideMenu(!sideMenu);
  }
  return (
    <header className={`fixed z-20 h-fit w-screen ${bg ? bg : ''}`}>
      {/* bg-cyan-900 */}
        <ul className='flex justify-between m-0'>
          <a href="/">
            <div className='p-3'>
              {/* <div className='w-24 h-12 bg-white'></div> */}
              <img src="/assets/icons/ekna_side.svg" alt="" className='w-24 h-12 rounded-xl'/>
            </div>
          </a>
          <div className='flex items-center'>
            <div>
              <a href="/student-ambassador" className='z-10 px-2 py-1 text-sm bg-orange-100 text-gray-800 m-auto rounded-md gemunu'>
                {/* bg-blue-400 */}
                  Student Ambassador
              </a>
            </div>
            <button className='z-10' onClick={sideMenuToggle}>
              <img className='z-10' src="assets/hamburger-menu-svgrepo-com.svg" alt="" />
            </button>
          </div>
        </ul>
        <nav className={`sidemenu ${ sideMenu ?'open':'close' } monts font-bold`}>
          <ul className='flex flex-col justify-center items-center h-screen text-cyan-50 text-lg'>
            
            <div>
              <li className='hover:text-cyan-700 hover:scale-110 transition-transform transition-transform-slow'>
                <a href="/">
                  HOME
                </a>
              </li>
              <li className='hover:text-cyan-700 hover:scale-110 transition-transform transition-transform-slow'>
                <a href="/events">
                  EVENTS
                </a>
              </li>
              <li className='hover:text-cyan-700 hover:scale-110 transition-transform transition-transform-slow'>
                <a href="/student-ambassador">
                  STUDENT AMBASSADOR
                </a>
              </li>
              <li className='hover:text-cyan-700 hover:scale-110 transition-transform transition-transform-slow'>
                <a href="/sponsors">
                  SPONSORS
                </a>
              </li>
              <li className='hover:text-cyan-700 hover:scale-110 transition-transform transition-transform-slow'>
                <a href="/#contact">
                  HELP
                </a>
              </li>
            </div>
          </ul>
        </nav>
    </header>
  )
}

export default Header