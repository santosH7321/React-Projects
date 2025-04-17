const HeaderCard = ({ resData }) => {
  return (
    <div className="flex flex-col items-center gap-2 w-auto">
      <div className="rounded-full overflow-hidden h-[200px] w-[200px] p-5 ">
        <img
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/" +
            resData.imageId
          }
          alt="Food"
          className="object-cover h-full w-full"
        />
      </div>
    </div>
  );
};

export default HeaderCard;
