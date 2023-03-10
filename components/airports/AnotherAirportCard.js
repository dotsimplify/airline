import React from "react";

function Card({ imageUrl, headingText }) {
  return (
    <div className="relative rounded-lg overflow-hidden shadow-lg">
      <img
        src={imageUrl}
        alt=""
        className="w-full h-full object-cover transform transition-all duration-300 scale-100 hover:scale-110"
      />
      <div className="absolute inset-0 bg-black opacity-50 transition-opacity hover:opacity-0"></div>
      <div className="absolute inset-0 flex justify-center items-center transition-all duration-300 scale-0 hover:scale-100">
        <h2 className="text-white font-bold text-2xl">{headingText}</h2>
      </div>
    </div>
  );
}

export default Card;
