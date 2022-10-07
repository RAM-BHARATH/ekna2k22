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
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit officiis voluptates obcaecati. Illum laborum aliquam quo porro impedit dolorem. Nobis, dolor ullam tenetur velit non ut quae temporibus totam voluptate voluptas odit adipisci dolorem similique voluptatibus hic impedit qui eligendi aliquam ad. Ex consectetur, ea minus, officia, numquam porro alias ut nisi facilis exercitationem eos hic ducimus. Fugiat eaque deserunt delectus alias, dignissimos animi eum natus vitae corrupti quisquam maxime asperiores vero tempore ullam quas aut quia in libero atque est nulla earum. Sunt labore officia cupiditate sed dolorum provident eligendi quas laboriosam aliquam mollitia nam eius amet rem aperiam a repellat atque, animi expedita ab debitis ratione optio. Id ullam minima maiores. Mollitia aut voluptatibus numquam! Deleniti sit voluptatum cumque distinctio tenetur voluptatem amet sed iure! Hic harum nihil sequi nobis provident, voluptatibus atque repellendus ipsa fugiat vitae nemo vero eum quasi repellat similique, dolores officiis eius dicta asperiores praesentium illo impedit tempora architecto? Nisi sapiente asperiores sequi laborum sunt ab dicta id omnis fugiat labore porro temporibus, nostrum suscipit natus odio quae quaerat voluptatum eius deserunt dolorum, in illum necessitatibus, ducimus recusandae? Eius dolore, nobis, iusto facere itaque laborum obcaecati ipsa possimus quibusdam adipisci rerum veniam quis nisi.
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
                    <a href="https://forms.gle/GMVkSy3wo4SZgygg7" target='_blank' rel="noreferrer" className='px-3 py-2 bg-slate-500 rounded-md text-white hover:bg-black'>Become a Student Ambassador</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default StudentAmbassador