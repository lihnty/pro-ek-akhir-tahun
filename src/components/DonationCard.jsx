import React from "react";

const DonationCard = ({ name, imageUrl }) => {
  return (
    <div className="relative group max-w-xs bg-white rounded-lg shadow-lg overflow-hidden">
      <img src={imageUrl} alt="donor" className="w-full h-48 object-cover" />
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
      <p className="text-white text-xl font-thin">{name}</p>

      </div>
    </div>
  );
};

export default DonationCard;
