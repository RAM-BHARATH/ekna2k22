import React, { useEffect, useState } from 'react'
import EventBox from './EventBox'

function EventList({ eventsList }) {
  const [choice, setChoice] = useState(0)
  // const [list, setList] = useState()

  const chooseEventList = (num) =>{
    setChoice(num);
  }

  const choiceList = (choice) =>{
    return eventsList.filter(indEvent => indEvent.type === choice)
  }
  useEffect(()=>{
    console.log(choiceList(choice))
  }, [choice])

  return (
      <div>
        <div className='gap-y-4 max-w-100 lg:max-w-5xl justify-center mx-auto mt-24 pb-1 lg:pb-20'>
          <h2 className='cookie text-5xl text-center my-10'>Events</h2>
          <div className='w-full justify-between cookie'>
            <span onClick={()=> chooseEventList(0)} className={`${!choice ? 'underline text-neutral-900' : 'text-neutral-500'} text-2xl mx-4 lg:text-6xl`}>
              <img src="/assets/icons/tech.svg" alt="" className='w-6 h-6 mx-1 inline'/>
              Technical
            </span>
            <span onClick={()=> chooseEventList(1)} className={`${!choice ? 'text-neutral-500' : 'underline text-neutral-900'} text-2xl mx-4 lg:text-6xl`}>
            <img src="/assets/icons/non-tech.svg" alt="" className='w-6 h-6 mx-1 inline'/>
              Non-Technical
            </span>
          </div>
        </div>
        <div className='flex flex-wrap gap-y-4 max-w-100 lg:max-w-5xl justify-center mx-auto my-10 pb-1 lg:pb-20'>
            {/* {eventsList.map(indEvent => (
                <a href={indEvent.eventUrl}>
                  <EventBox key={indEvent.id} indEvent={indEvent}/>
                </a>
            ))} */}
            {choiceList(choice).map(indEvent=> (
                <a href={indEvent.eventUrl}>
                  <EventBox key={indEvent.id} indEvent={indEvent}/>
                </a>
            ))}
        </div>
      </div>
  )
}

export default EventList