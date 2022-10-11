import React from 'react'

function Footer() {
  return (
    <div className='w-full'>
        <div className='flex text-white flex-wrap'>
            <div className='flex flex-col w-full lg:w-1/3  p-4'>
                <div className='flex flex-col jusitfy-center'>
                    <h2 className='text-center text-4xl my-4 cookie'>Location</h2>
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
                    <h2 className='text-center text-4xl my-4 cookie'>Address</h2>
                    <div className='mx-auto w-full p-2 text-lg'>
                        <div className='mx-auto text-justify monts'>
                            <p className='text-base'>Anna University Regional Campus - Coimbatore,</p>
                            <p className='text-base'>Maruthamalai Main Road,</p>
                            <p className='text-base'>Navavoor,</p>
                            <p className='text-base'>Coimbatore - 641046.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex w-full lg:w-1/3 p-4 justify-center'>
                <img src="/assets/icons/anna.png" alt="" className='w-fit h-fit' />
            </div>
            <div className='flex flex-col w-full lg:w-1/3  p-4'>
                <div className='flex flex-col jusitfy-center'>
                    <h2 className='text-center text-4xl my-4 cookie'>Important Links</h2>
                    <div className='underline text-center monts text-base'><a href="/events">Events</a></div>
                    <div className='underline text-center monts text-base'><a href="/student-ambassador">Student Ambassador</a></div>
                    <div className='underline text-center monts text-base'><a href="/register">Register</a></div>
                    <div className='underline text-center monts text-base'><a href="/sponsors">Sponsorship</a></div>
                    <a id="contact">
                        <h2 className='text-center text-4xl my-4 cookie' id='contact'>Contact Us</h2>
                    </a>
                    <div className='w-full flex flex-col  mb-5 text-left'>
                        <h3 className='text-xl font-bold text-left'>General Queries:</h3>
                        <ul className='list-decimal monts text-base mx-7'>
                            <li>Yazhini S - 75300 74020</li>
                            <li>Balaji S - 78689 28433</li>
                            <li> Arjun R - 9790790148</li>
                        </ul>
                        <h3 className='text-xl font-bold'>Technical Event Queries:</h3>
                        <ul className='list-decimal monts text-base mx-7'>
                            <li>Vigneshwaran V - 8072899835</li>
                            <li>Naveenraj K - 6380824773</li>
                        </ul>
                        <h3 className='text-xl font-bold'>Non-Technical Event Queries:</h3>
                        <ul className='list-decimal monts text-base mx-7'>
                            <li>Sakthivel G R - 9789735839</li>
                            <li>Obliraj R - 7010069143</li>
                        </ul>
                        <h3 className='text-xl font-bold'>Payment related Queries:</h3>
                        <ul className='list-decimal monts text-base mx-7'>
                            <li>Santhosh Kumar P - 7356591700</li>
                            <li>Boopathi B - 9150406393</li>
                        </ul>
                    </div>
                    <div className='mx-auto w-full flex justify-center'>
                        <a href="https://www.instagram.com/_ekna2k22_">
                            <img src="/assets/icons/instagram.svg" alt=""  className='w-8 h-8 mx-2 my-1'/>
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=100086210026178">
                            <img src="/assets/icons/facebook.svg" alt=""  className='w-8 h-8 mx-2 my-1'/>
                        </a>
                        <a href="https://youtube.com/channel/UCKx4Owx-QH65a0Zs4AMBdGg">
                            <img src="/assets/icons/youtube.svg" alt=""  className='w-8 h-8 mx-2 my-1'/>
                        </a>
                        <a href="https://twitter.com/eknasympo?s=11&t=uZ8uWl46_3qMJ0dQWnKEqw">
                            <img src="/assets/icons/twitter.svg" alt=""  className='w-8 h-8 mx-2 my-1'/>
                        </a>
                        <a href="mailto:eknasympo@gmail.com">
                            <img src="/assets/icons/mail.svg" alt=""  className='w-8 h-8 mx-2 my-1'/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer