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
      <div className='w-screen min-h-screen flex flex-col justify-center items-center bg-blue-700 img-bg-2'>
        <h2 className='text-3xl lg:text-6xl text-white underline mb-5 text-center'>About Ekna2k22</h2>
        <div className='text-white w-3/4 text-xl text-center'>
          <p className='text-justify'>
            Ekna'22 is a National Level Techno-Cultural Fest that will be held on November 4,2022. It is a whimsical creation of the staff and students at AURCC's Electrical and Electronics Engineering department for the first time ever .On this auspicious occasion, 7 technical and 10 cultural events are scheduled to be conducted.Some of the activities of the Techno-Cultural Fest include Electro-Matrix, IQuid, Analogy-O-Mania, Paper presentation, Fashion show, Slick Standups, Music,Dance,Shortfilm, Photography and a lot  more. It is a unique window of opportunity for students from various disciplines to demonstrate their abilities and expertise. This event will undoubtedly give an opportunity for aspiring engineers  to develop their abilities and improve their performance. We take immense pleasure to welcome you all to Ekna'22 which will indubitably be "The Rise " for each and every individual who turns up for this Energy packed and Exciting event. We guarantee you the best day that you can have inside our campus and we hope  you can carry those memories along with you. Participate in numerous events for a registration fee of Rs 150 and gear yourself up for   an ethereal experience on November 4,2022.
          </p>
        </div>
      </div>
    </>
  )
}

export default Main