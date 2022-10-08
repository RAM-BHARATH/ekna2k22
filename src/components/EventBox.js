import React from 'react'

function EventBox({ indEvent }) {
  return (
    <div className='event-box relative h-fit'>
        {/* <img src={indEvent.imgUrl} alt="" className='rounded-md'/> */}
        <img src={indEvent.imgUrl} alt="" className='rounded-md'/>
        {/* <p className='absolute top-6 left-6 text-xl'>{indEvent.eventName}</p> */}
        {/* <p className='absolute top-12 left-6 text-xl text-white'>{indEvent.type ? 'Technical': 'Non-'}</p> */}
    </div>
  )
}

export default EventBox