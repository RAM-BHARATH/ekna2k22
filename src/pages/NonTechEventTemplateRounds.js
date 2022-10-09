import React, { useEffect } from 'react'
import IndHeader from '../components/IndHeader'

function NonTechEventTemplateRounds({ indEvent }) {

  useEffect(()=>{
    document.title = `${indEvent.eventName} | Ekna2k22`
  }, []);

  return (
    <>
      <IndHeader bg='bg-cyan-900'/>
      <div className='w-screen min-h-screen pattern-bg-2'>
        <div className='min-h-screen z-0 p-5'>
          <div className='z-5 lg:w-2/3  my-24 mx-auto flex flex-col justify-center items-center'>
            {/* <h1 className='text-4xl mb-10 cookie'>{indEvent.eventName}</h1> */}
            <img src={indEvent.imgUrl} alt="" className='w-screen lg:w-1/2 rounded-md'/>
            <div className='flex flex-wrap items-baseline justify-center lg:w-1/2 gap-12 lg:gap-24 mx-auto my-10 tex'>
              <div className='text-center'>
                <img src="/assets/icons/location.svg" alt="" className='w-24'/>
                <div className='my-3'>{indEvent.location}</div>
              </div>
              <div className='text-center'>
                <img src="/assets/icons/calendar.svg" alt="" className='w-24'/>
                <div className='my-3'>{indEvent.date}</div>
              </div>
              <div className='text-center'>
                <img src="/assets/icons/clock.svg" alt="" className='w-24'/>
                <div className='my-3'>{indEvent.time}</div>
              </div>
              {/* <div className='text-center'>
                <img src="/assets/icons/contact.svg" alt="" className='w-24'/>
                <div className='my-3'>Lorem</div>
              </div> */}
              <div className='text-center'>
                <img src="/assets/icons/trophy.svg" alt="" className='w-24'/>
                <div className='my-3'>
                  <ul className='w-28 mx-auto'>
                  {indEvent.prize.map(prize=> (
                    <li key={prize} className='w-28 mx-auto text-left'>{prize}</li>
                  ))}
                  </ul>
                </div>
              </div>
              {/* <div className='text-center'>
                <img src="/assets/icons/sand-clock.svg" alt="" className='w-24'/>
                <div className='my-3'>Lorem</div>
              </div> */}
              <div className='py-2 px-3 rounded-md bg-cyan-900'>
                <a href={indEvent.registrationLink} className='text-white'>Register</a>
              </div>
            </div>
            <h3 className='cookie text-3xl text-left w-full'>Description</h3>
            <p className='text-justify monts'>{indEvent.description}</p>
            {
              indEvent.rounds ? (
                <>
                  <h3 className='cookie text-3xl text-left w-full mt-8 mb-4'>Rounds</h3>
                  <ul className='list-decimal w-4/5'>
                      {indEvent.rounds.map((round, index) => <li key={index} className='monts'>{round}</li>)}
                  </ul>
                </>
              ) : ''
            }
            {
              indEvent.themes ? (
                <>
                  <h3 className='cookie text-3xl text-left w-full mt-8 mb-4'>Themes</h3>
                  <ul className='list-decimal w-4/5'>
                      {indEvent.themes.map((theme, index) => <li key={index} className='monts'>{theme}</li>)}
                  </ul>
                </>
              ): ''
            }
            <h3 className='cookie text-3xl text-left w-full mt-8 mb-4'>Rules and Regulations</h3>
            <ul className='list-decimal w-4/5'>
                {indEvent.rules.map((rule, index) => <li key={index} className='monts'>{rule}</li>)}
            </ul>
            <h3 className='cookie text-3xl text-left w-full mt-8 mb-4'>Event Organizers</h3>
            <ul className='list-decimal w-4/5'>
                {indEvent.eventOrganizers.map((organizer, index) => <li key={index} className='monts'>{organizer}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default NonTechEventTemplateRounds