import React from 'react'
import EventBox from './EventBox'

function EventList({ eventsList }) {
  return (
      <div className='flex flex-wrap gap-y-4 max-w-100 lg:max-w-5xl justify-center mx-auto my-24 pb-1 lg:pb-20'>
          {eventsList.map(indEvent => (
              <a href={indEvent.eventUrl}>
                <EventBox key={indEvent.id} indEvent={indEvent}/>
              </a>
          ))}
      </div>
  )
}

export default EventList