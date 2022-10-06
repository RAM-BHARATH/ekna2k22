import React, { useEffect } from 'react'
import Header from '../components/Header'
import '../styles/dist/main.css';
import '../App.css';
import EventList from '../components/EventList';

function Events({ eventsList }) {

  useEffect(()=>{
    document.title = 'Events List | Ekna2k22'
  }, []);

  return (
    <div>
        <Header bg='bg-cyan-900'/>
        <div className='w-screen min-h-screen pattern-bg-2 p-5'>
          <EventList eventsList={eventsList}/>
        </div>
    </div>
  )
}

export default Events