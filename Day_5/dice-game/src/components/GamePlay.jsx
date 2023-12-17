import NumberSelector from "./NumberSelector"
import TotalScore from "./TotalScore"


const GamePlay = () => {
  return (
    <div className="flex justify-around items-center">
      <TotalScore />
      <NumberSelector />
    </div>
  )
}

export default GamePlay
