import Call from '../assets/Vector1.png';
import Massege from '../assets/Vector.png';
import CallCenter from '../assets/contact.png';

const ContactPage = () =>{
    return(
        <div className="m-10">
            <div className="flex-col justify-center items-center">
                <h1 className="flex text-5xl font-bold my-5 ">CONTACT US</h1>
                <p className="pr-[150px]   text-gray-700 ">LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA. </p>
            </div>

            <section>
                <div>
                    <div className="flex gap-20 text-xl font-semibold text-white py-10 ">
                        <button className="p-2 px-6 bg-black rounded hover:bg-red-800">VIA SUPPORT CHAT</button>

                        <button className=" flex p-2 px-6 bg-black rounded hover:bg-yellow-700"><img className='m-2' src={Call} alt="" />VIA CALL</button>

                    </div>

                    <button className="flex p-2 px-[140px] border-2 border-black text-black  font-bold text-xl rounded hover:bg-sky-700 hover:text-white"><img className='m-2' src={Massege} alt="" />VIA EMAIL FORM</button>

                   <div className='flex justify-around items-center m-10 max-md:flex-col-reverse max-md:w-[100%] '>
                        <div>
                            <div>
                            Name: <input type="text" className='w-[100%] px-4 py-2 m-2 border-2 border-sky-500 rounded'/>
                            </div>
                            
                            <div>
                            Email: <input className='w-[100%] px-4 py-2 m-2 border-2 border-sky-500 rounded' type="email" />
                            </div>
                            
                            <div>
                            TEXT: <textarea className='w-[100%] px-4 py-2 m-2 border-2 border-sky-500 rounded'  name="" id="" cols="30" rows="10"></textarea>
                            </div>
                            
                            <div className='flex justify-end my-4'>
                                <button className='text-xl font-bold p-2 px-6 bg-black text-white rounded hover:bg-red-800'>SUBMIT</button>
                            </div>
                           
                        </div>

                        <div>
                            <img className='w-[608px] h-[615px] ' src={CallCenter} alt="" />
                        </div>
                   </div>
                </div>
                <div>

                </div>
            </section>
        </div>


        
    );
}

export default ContactPage;