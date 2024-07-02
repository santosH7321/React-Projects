import { FaArrowUpLong } from "react-icons/fa6";

const LandingPage = () => {
  return (
    <div className="w-full h-screen bg-zinc-900 pt-1">
      <div className="textstructure mt-52 px-20">
        {["We Create", "Eye Opening", "Presentations"].map((item, index) => {
          return (
            <div key={index} className="masker overflow-hidden">
              <div className="w-fit flex item-end overflow-hidden">
                {index === 1 && (
                  <div className="mr-[1vw] w-[9vw] h-[7vw] relative top-0 rounded-md bg-green-500 "></div>
                )}
                <h1 className="flex items-center uppercase text-[9vw] leading-[7.5vw] tracking-tighter font-['FoundersGrotesk-Semibold'] font-medium">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-20">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p
            key={index}
            className="text-md font-light tracking-tighter leading-none "
          >
            {item}
          </p>
        ))}
      

      <div className="start flex items-center gap-5 ">
        <div className="px-5 py-2 border-[1px] border-zinc-400 font-light text-md  capitalize rounded-full">
          start the project
        </div>
        <div className="w-10 h-10 border-[2px] border-zinc-500 flex items-center justify-center rounded-full">
          <span className="rotate-[45deg]">
            <FaArrowUpLong />
          </span>
        </div>
      </div>
      </div>
    </div>
  );
};

export default LandingPage;
