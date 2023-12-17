import DiceImg from '../assets/dices.png'

const DiceStart = ({ toggle }) => {
  return (
    <div className='flex justify-center items-center '>
        <div className='flex justify-center items-center '>
            <div>
                <img src={DiceImg} alt="" />
            </div>

            <div className='text-black'>
                <h1 className='text-8xl font-bold'>DICE GAME</h1>

                <div className='flex justify-end items-end py-5'>
                <button onClick={toggle} className='p-2 px-8 bg-black text-white rounded font-semibold'>Play Now</button>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default DiceStart
