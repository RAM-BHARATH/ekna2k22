import React, { useEffect } from 'react'
import Header from '../components/Header'

function StudentAmbassador() {
    useEffect(()=>{
        document.title = 'Student Ambassador | Ekna2k22'
     }, []);
  return (
    <div>
        <Header bg='bg-cyan-900'/>
        <div>
            <div className='w-screen min-h-screen pattern-bg-2 p-5 text-center'>
                <div className='my-24'>
                    <h1 className='text-4xl'>STUDENT AMBASSADOR</h1>
                    <div className='p-3 lg:mx-auto lg:w-2/3 text-justify'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat quos magni cupiditate quo, ex rem eligendi eius dolores! Explicabo recusandae iste deserunt est voluptatum deleniti hic reprehenderit impedit excepturi provident.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi explicabo ad nemo veritatis voluptatibus aspernatur exercitationem quo in blanditiis. Excepturi alias corporis sapiente obcaecati ea? Provident porro unde earum commodi.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum similique quam distinctio optio velit sunt vero aliquam, alias libero illo error esse facilis debitis tenetur repellendus perspiciatis nulla ipsum minus.
                    </div>
                    <h2 className='text-3xl w-fit mx-auto border-b-black border-b-2'>Work of a Student Ambassador</h2>
                    <div className='p-3 lg:mx-auto lg:w-2/3 text-justify'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe voluptates modi delectus architecto pariatur eum quis quidem! Quae, assumenda dignissimos eos rem officiis a ullam doloremque voluptate molestias, dolores aliquid.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, velit. Facere, sed, sunt eveniet error dignissimos atque animi, possimus alias ad laudantium quis! Similique libero maxime earum ipsum quidem quod.
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto distinctio voluptatum dolor et labore voluptatem facere, placeat odit necessitatibus veritatis quibusdam dolorem blanditiis dignissimos magni culpa cumque? Magni, dignissimos quaerat!
                    </div>
                    <h2 className='text-3xl w-fit mx-auto border-b-black border-b-2'>Benefits of becoming a Student Ambassador</h2>
                    <table className="table-fixed border-spacing-2 border-black border-2 my-10 mx-auto">
                        <thead>
                            <tr>
                                <th className='p-3'>Silver</th>
                                <th className='p-3'>Gold</th>
                                <th className='p-3'>Diamond</th>
                            </tr>
                        </thead>
                        <tbody className='border-spacing-2 border-black border-2'>
                            <tr className='border-spacing-2 border-black border-2'>
                                <td className='p-3'>Certificates</td>
                                <td className='p-3'>Certificates</td>
                                <td className='p-3'>Certificates</td>
                            </tr>
                            <tr className='border-spacing-2 border-black border-2'>
                                <td className='p-3'>Free Food &amp; Registration</td>
                                <td className='p-3'>Free Food &amp; Registration</td>
                                <td className='p-3'>Free Food &amp; Registration</td>
                            </tr>
                            <tr className='border-spacing-2 border-black border-2'>
                                <td className='p-3'>-</td>
                                <td className='p-3'>T-Shirts</td>
                                <td className='p-3'>T-Shirts</td>
                            </tr>
                            <tr className='border-spacing-2 border-black border-2'>
                                <td className='p-3'>-</td>
                                <td className='p-3'>Can participate in more than 2 events</td>
                                <td className='p-3'>Can participate in any event</td>
                            </tr>
                            <tr className='border-spacing-2 border-black border-2'>
                                <td className='p-3'>-</td>
                                <td className='p-3'>-</td>
                                <td className='p-3'>Gift Vouchers</td>
                            </tr>
                        </tbody>
                    </table>
                    <table className="table-fixed border-spacing-2 border-black border-2 my-10 mx-auto">
                        <thead>
                            <tr>
                                <th className='p-3'>Zones</th>
                                <th className='p-3'>Silver</th>
                                <th className='p-3'>Gold</th>
                                <th className='p-3'>Diamond</th>
                            </tr>
                        </thead>
                        <tbody className='border-spacing-2 border-black border-2'>
                            <tr className='border-spacing-2 border-black border-2'>
                                <td className='p-3'>Coimbatore</td>
                                <td className='p-3'>15-25</td>
                                <td className='p-3'>25-40</td>
                                <td className='p-3'>40-60</td>
                            </tr>
                            <tr className='border-spacing-2 border-black border-2'>
                                <td className='p-3'>Other Districts</td>
                                <td className='p-3'>10-20</td>
                                <td className='p-3'>20-30</td>
                                <td className='p-3'>30-50</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default StudentAmbassador