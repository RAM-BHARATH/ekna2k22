import React, { useEffect } from 'react'
import IndHeader from '../components/IndHeader'

function IndEvent2({ indEvent }) {

  useEffect(()=>{
    document.title = `${indEvent.eventName} | Ekna2k22`
  }, []);

  return (
    <>
      <IndHeader bg='bg-cyan-900'/>
      <div className='w-screen min-h-screen pattern-bg-2'>
        <div className='min-h-screen z-0 p-5'>
          <div className='z-5 lg:w-2/3  my-24 mx-auto flex flex-col justify-center items-center'>
            <h1 className='text-4xl mb-10'>{indEvent.eventName}</h1>
            <img src={indEvent.imgUrl} alt="" className='w-screen lg:w-1/2 rounded-md'/>
            <div className='flex flex-wrap items-center justify-center lg:w-1/2 gap-12 lg:gap-24 mx-auto my-10'>
              <div className='text-center'>
                <img src="/assets/icons/location.svg" alt="" className='w-24'/>
                <div className='my-3'>Lorem</div>
              </div>
              <div className='text-center'>
                <img src="/assets/icons/calendar.svg" alt="" className='w-24'/>
                <div className='my-3'>Lorem</div>
              </div>
              <div className='text-center'>
                <img src="/assets/icons/clock.svg" alt="" className='w-24'/>
                <div className='my-3'>Lorem</div>
              </div>
              <div className='text-center'>
                <img src="/assets/icons/contact.svg" alt="" className='w-24'/>
                <div className='my-3'>Lorem</div>
              </div>
              <div className='text-center'>
                <img src="/assets/icons/trophy.svg" alt="" className='w-24'/>
                <div className='my-3'>Lorem</div>
              </div>
              <div className='text-center'>
                <img src="/assets/icons/sand-clock.svg" alt="" className='w-24'/>
                <div className='my-3'>Lorem</div>
              </div>
              <div className='py-2 px-3 rounded-md bg-cyan-900'>
                <a href={indEvent.registrationLink1} className='text-white'>Solo Registration</a>
              </div>
              <div className='py-2 px-3 rounded-md bg-cyan-900'>
                <a href={indEvent.registrationLink2} className='text-white'>Group Registration</a>
              </div>
            </div>
            <p>{indEvent.description + indEvent.description + indEvent.description}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default IndEvent2