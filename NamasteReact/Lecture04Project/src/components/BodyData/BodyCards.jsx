import React from "react";

const BodyCards = (props) => {
  const { bodyObj } = props;
  return (
    <div className="grid grid-rows-3 gap-3 h-screen w-full m-15">
      <div className="bg-gray-500 p-4 rounded-lg shadow-md h-[330px] w-[300px]">
        <div>
          <img
            className="w-full h-full object-cover"
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
              bodyObj.cloudinaryImageId
            }
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default BodyCards;
