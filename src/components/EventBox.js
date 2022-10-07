import React from 'react'

function EventBox({ indEvent }) {
  return (
    <div className='event-box relative'>
        <img src={indEvent.imgUrl} alt="" className='rounded-md'/>
        <p className='absolute top-6 left-6 text-xl'>{indEvent.eventName}</p>
        <p className='absolute top-12 left-6 text-xl text-white'>{indEvent.type}</p>
    </div>
  )
}

export default EventBox