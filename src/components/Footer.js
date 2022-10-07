import React from 'react'

function Footer() {
  return (
    <div className='w-full'>
        <div className='flex text-white flex-wrap'>
            <div className='flex flex-col w-full lg:w-1/3  p-4'>
                <div className='flex flex-col jusitfy-center'>
                    <h2 className='text-center text-2xl my-4'>Location</h2>
                    <div className='mx-auto w-full'>
                         {/* <!-- Map --> */}
                         <div className="map-outer tm-mb-40">
                             <div className="gmap-canvas">
                                 <iframe className="mx-auto" id="gmap-canvas"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.9491172651287!2d76.88388301532656!3d11.04244189214134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85910327ab1e3%3A0x9f7a2b4ef20fe07!2sAnna%20University%20Regional%20Campus%2C%20Coimbatore!5e0!3m2!1sen!2sin!4v1653732177820!5m2!1sen!2sin" 
                                frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" title="Map"></iframe>
                            </div>
                        </div>
                    </div>
                    <h2 className='text-center text-2xl my-4'>Address</h2>
                    <div className='mx-auto w-full p-2 text-lg'>
                        <div className='mx-auto text-center'>
                            <p>Anna University Regional Campus Coimbatore</p>
                            <p>Maruthamalai Main Road</p>
                            <p>Navavoor</p>
                            <p>Coimbatore - 641046</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex w-full lg:w-1/3 p-4 justify-center'>
                <img src="/assets/icons/anna.png" alt="" className='w-fit h-fit' />
            </div>
            <div className='flex flex-col w-full lg:w-1/3  p-4'>
                <div className='flex flex-col jusitfy-center'>
                    <h2 className='text-center text-3xl my-4'>Links</h2>
                    <div className='underline text-center'><a href="/events">Events</a></div>
                    <div className='underline text-center'><a href="/student-ambassador">Stuent Ambassador</a></div>
                    <div className='underline text-center'><a href="/register">Register</a></div>
                    <div className='underline text-center'><a href="/sponsors">Sponsorship</a></div>
                    <h2 className='text-center text-3xl my-4'>Contact</h2>
                    <div className='mx-auto w-fill'>
                        <p>Lorem Lorem Lorem</p>
                        <p>Lorem Lorem Lorem</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer