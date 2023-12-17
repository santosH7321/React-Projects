import flipkart from '../assets/flipkart.png';
import amazon from '../assets/amazon.png';
import shoes from '../assets/shoe_image.png';

function HeroSection(){
    return(
        <div className='flex justify-center items-center m-10'>
            <div className="flex justify-center items-center mt-10">
                <section className='w-[40%]'>
                    <h1 className='flex justify-around items-center  text-6xl font-bold py-10 '>YOUR FEET DESERVE THE BEST</h1>
                    <p className='flax justify-center items-center text-xl font-normal py-5'>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
                    <button className=' p-2 px-6  bg-red-600 hover:bg-red-700 drop-shadow-2xl  text-white font-semibold rounded '>Shop Now</button >
                    <button className='ml-10 p-2 px-6 border-4 border-black-500  hover:bg-gray-300 text-blue-800 drop-shadow-2xl font-semibold rounded  '>Category
                    </button>
                    <p className='py-5 '>Also Avilabe on</p>
                    <div className='flex gap-5'>
                            <a href="https://www.flipkart.com/"><img src={flipkart} alt="flipkart" /></a>

                            <a href="https://www.amazon.in/home/home"><img src={amazon} alt="amazon" /></a>

                    </div>
                    
                </section>
                <div className='pl-10 '>
                    <img className='hover:scale-105' src={shoes} alt="shoes" />
                </div>

            </div>

        </div>
    );

}
export default HeroSection;