const Feature = () => {
  return (
    <div className="w-full py-20">
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20">
        <h1 className="text-8xl font-['FoundersGrotesk-Semibold'] tracking-tight">
          Featured Projects{" "}
        </h1>
      </div>
      <div className="px-20">
        <div className="cards w-full flex gap-10 mt-10">
            <div className="heading absolute bg-red-500">
                <h1></h1>
            </div>
          <div className="cardcontainer w-1/2 h-[75vh]  ">
            <div className="card w-full h-full rounded-xlscale-50 overflow-hidden">
              <img
                className="w-full h-full bg-cover "
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png"
                alt=""
              />
            </div>
          </div>
          <div className="cardcontainer w-1/2 h-[75vh] ">
            <div className="card w-full h-full rounded-xl scale-50  overflow-hidden">
              <img
                className="w-full h-full bg-cover "
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
