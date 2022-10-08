import React from 'react'

function Main() {
  return (
    <>
      <div className='w-screen min-h-screen flex justify-center items-center img-bg'>
          {/* bg-slate-900  */}
          {/* <div className='bg-white w-80 h-80 animate-logo'> */}
          <img src="assets/ekna-logo.png" alt="" />
          {/* </div> */}
      </div>
      <div className='w-screen min-h-screen flex flex-col justify-center items-center bg-zinc-800  pb-2'> 
      {/* img-bg-2 */}
        <h2 className='text-5xl lg:text-6xl mb-5 text-center cookie mt-10 text-cyan-500'>About Ekna'22</h2>
        <div className='text-white w-3/4 text-lg lg:text-xl text-center'>
          <p className='text-justify monts'>
            Ekna'22 is a National Level Techno-Cultural Fest that will be held on November 4,2022. It is a whimsical creation of the staff and students at AURCC's Electrical and Electronics Engineering department for the first time ever .On this auspicious occasion, 7 technical and 10 cultural events are scheduled to be conducted.Some of the activities of the Techno-Cultural Fest include Electro-Matrix, IQuid, Analogy-O-Mania, Paper presentation, Fashion show, Slick Standups, Music,Dance,Shortfilm, Photography and a lot  more. It is a unique window of opportunity for students from various disciplines to demonstrate their abilities and expertise. This event will undoubtedly give an opportunity for aspiring engineers  to develop their abilities and improve their performance. We take immense pleasure to welcome you all to Ekna'22 which will indubitably be "The Rise " for each and every individual who turns up for this Energy packed and Exciting event. We guarantee you the best day that you can have inside our campus and we hope  you can carry those memories along with you. Participate in numerous events for a registration fee of Rs 150 and gear yourself up for   an ethereal experience on November 4,2022.
          </p>
        </div>
        <iframe className='my-5 w-4/5 lg:h-72 lg:w-96' src="https://www.youtube.com/watch?v=X6VaBPzjh6A" title="EKNA 2k22" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
        </iframe>
        <div className='flex flex-wrap w-full py-10 justify-center items-center'>
          <div className='w-full lg:w-1/2'>
            <img src="/assets/ticket.svg" alt="" className='w-48 mx-auto lg:w-72'/>
          </div>
          <div className='w-4/5 mx-auto lg:w-1/2'>
            <ul className='mx-auto list-disc text-white font-bold monts'>
              <li className='mx-auto my-1'>Exciting cash prizes and rewards for winners</li>
              <li className='mx-auto my-1'>Participation certificates will be provided, if unfortunately you couldn't win</li>
              <li className='mx-auto my-1'>Lunch will be provided for all participants</li>
            </ul>
            <p className='text-cyan-500 text-lg mt-4 font-bold'>**To register for the various events with just ₹150 of ticket,</p>
          </div>
        </div>
        <a href="/events" className='px-5 py-2 bg-blue-700 text-2xl text-white rounded-2xl hover:bg-gray-800 hover:text-white gemunu mb-5'>Register</a>
      </div>
      <div className='w-screen flex flex-col justify-center items-center bg-zinc-800  pb-2'>
        <h2 className='text-5xl lg:text-6xl text-white mb-5 text-center cookie'>Our Sponsors</h2>
        <div className='flex justify-center p-2'>
          <img src="/assets/sponsors/twin-birds.jpeg" alt="" className='w-2/3 lg:w-96'/>
        </div>
      </div>
    </>
  )
}

export default Main