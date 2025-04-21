import React from "react";

const BodyData = () => {
  return (
    <div className="w-full h-screen overflow-hidden">
      <div className="grid grid-cols-5 items-center justify-around m-10">
        <div className="card h-70 w-60 rounded-2xl bg-gray-300 gap-5">
          <img className="w-full h-40 object-cover" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/1/9/041acbd3-37b1-4d3c-9aa3-9aa86c67d584_254135.JPG" alt="image" />
          <h1 className="text-2xl font-bold">Title</h1>
          <p>Rating</p>
          <p>Des1</p>
          <p>Des2</p>
        </div>
      </div>
    </div>
  );
};

export default BodyData;
