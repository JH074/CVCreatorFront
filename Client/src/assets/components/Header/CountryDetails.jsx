import React from "react";
import { useParams } from "react-router-dom";

const CountryDetails = () => {
  const { country } = useParams();

  return (
    <div className="flex flex-wrap md:flex md:flex-wrap lg:flex lg:flex-wrap lg:justify-center lg:items-start gap-1 w-screen h-auto items-center justify-center lg:mt-24 mt-10 mb-10">
      {[...Array(12)].map((_, index) => (
        <div
          key={index}
          className="w-72 md:w-80 lg:w-80 p-4 text-center rounded-lg border border-gray-300 bg-[#006BA6]/50 mb-2"
        >
          {country}
        </div>
      ))}
    </div>
  );
};

export default CountryDetails;
