import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";

function Main({ sponsors }) {
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
        <h2 className='text-5xl lg:text-6xl mb-3 text-center cookie mt-10 text-cyan-500'>About Ekna'22</h2>
        <div className='text-white w-3/4 text-lg lg:text-xl text-center'>
          <p className='text-justify monts'>
            Ekna'22 is a National Level Techno-Cultural Fest that will be held on November 4,2022. It is a whimsical creation of the staff and students at AURCC's Electrical and Electronics Engineering department. On this auspicious occasion, 7 technical and 10 cultural events are scheduled to be conducted.Some of the activities of the Techno-Cultural Fest include Electro-Matrix, IQuid, Analogy-O-Mania !, Paper presentation, Fashion show, Slick Standups, Music, Dance, Shortfilm, Photography and a lot  more. It is a unique window of opportunity for students from various disciplines to demonstrate their abilities and expertise. This event will undoubtedly give an opportunity for aspiring engineers to develop their abilities and improve their performance. We take immense pleasure to welcome you all to Ekna'22 which will indubitably be "The Rise" for each and every individual who turns up for this Energy packed and Exciting event. We guarantee you the best day that you can have inside our campus and we hope, you can carry those memories along with you. Gear yourself up for an ethereal experience on November 4,2022.
          </p>
        </div>
        {/* <iframe className='my-5 w-4/5 lg:h-72 lg:w-96' src="https://youtu.be/X6VaBPzjh6A" title="EKNA 2k22" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen> */}
        {/* </iframe> */}
        <iframe className='my-5 w-4/5 lg:h-72 lg:w-96' src="https://www.youtube.com/embed/X6VaBPzjh6A" title="EKNA'22 || It's a grand opening of an amazing event Ekna'22 by AURCC  || Department of EEE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <div className='flex flex-wrap w-full py-10 justify-center items-center'>
          <div className='w-full lg:w-1/2'>
            <img src="/assets/ticket.svg" alt="" className='w-48 mx-auto lg:w-72'/>
          </div>
          <div className='w-4/5 mx-auto lg:w-1/2'>
            {/* <p className='text-yellow-400 text-lg my-4 font-bold'>** With this ticket, you're eligible to enroll yourself for one Technical and one Non-Technical Event.</p> */}
            <ul className='mx-auto list-disc text-white font-bold monts'>
              <li className='mx-auto my-1'>It's an one day Inter-college Techno-Cultural fest.</li>
              <li className='mx-auto my-1'>Overall championship will be awarded.</li>
              <li className='mx-auto my-1'>It's an Inter-department and inter-college fest so that any college student can participate.</li>
              <li className='mx-auto my-1'>Exciting cash prizes and rewards are waiting for the winners.</li>
              <li className='mx-auto my-1'>Participation certificates will be provided for all the participants.</li>
              <li className='mx-auto my-1'>Lunch will be provided for all participants.</li>
              <li className='mx-auto my-1'>Accommodation and transportation will be provided.</li>
            </ul>
            <p className='text-cyan-500 text-lg my-4 font-bold'>To register for a event with just ₹150 of ticket,</p>
            </div>
        </div>
        <a href="/events" className='px-5 py-2 bg-blue-700 text-2xl text-white rounded-2xl hover:bg-gray-800 hover:text-white gemunu mb-5'>Register</a>
      </div>
      <div className='w-screen flex flex-col justify-center items-center bg-zinc-800  pb-2'>
        <h2 className='text-5xl lg:text-6xl text-white mb-5 text-center cookie'>Our Sponsors</h2>
        {/* <div className='flex justify-center p-2'>
          <img src="/assets/sponsors/twin-birds.jpeg" alt="" className='w-2/3 lg:w-96'/>
        </div> */}
        {/* <div className="border border-brand-primary border-l-0 border-r-0 container lg:p-20 mt-6 overflow-hidden py-24 relative lg:mx-auto">
            <div className="flex animate-infinite absolute left-0 lg:w-1/2 lg:mx-auto">
                <div className="flex w-1/2 justify-between items-center logo lg:mx-auto">
                    <a href="/" className='mx-2 h-48 w-72'><img src={sponsors[0].sponsorLogo} alt="" className='h-24 w-72'/></a>
                    <a href="/" className='mx-2 h-48 w-72'><img src={sponsors[1].sponsorLogo} alt="" className='h-24 w-72' /></a>
                    <a href="/" className='mx-2 h-48 w-72'><img src={sponsors[0].sponsorLogo} alt="" className='h-24 w-72' /></a>
                    <a href="/" className='mx-2 h-48 w-72'><img src={sponsors[1].sponsorLogo} alt="" className='h-24 w-72' /></a>
                </div>
                <div className="flex w-1/2 justify-between items-center logo">
                    <a href="/" className='mx-2 h-48 w-72'><img src={sponsors[0].sponsorLogo} alt="" className='h-24 w-72' /></a>
                    <a href="/" className='mx-2 h-48 w-72'><img src={sponsors[1].sponsorLogo} alt="" className='h-24 w-72' /></a>
                    <a href="/" className='mx-2 h-48 w-72'><img src={sponsors[0].sponsorLogo} alt="" className='h-24 w-72' /></a>
                    <a href="/" className='mx-2 h-48 w-72'><img src={sponsors[1].sponsorLogo} alt="" className='h-24 w-72' /></a>
                </div>
            </div>
        </div> */}
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide><img src={sponsors[0].sponsorLogo} alt="" className='h-24 w-72'/></SwiperSlide>
          <SwiperSlide><img src={sponsors[1].sponsorLogo} alt="" className='h-24 w-72'/></SwiperSlide>
          <SwiperSlide><img src={sponsors[2].sponsorLogo} alt="" className='h-24 w-72'/></SwiperSlide>
        </Swiper>
      </div>
    </>
  )
}

export default Main