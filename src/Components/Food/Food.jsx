import React from "react";






const Food = ({ food }) => {
  const { name, image, rating } = food;
  return (
    
    <div className=" rounded-lg sm:w-full md:w-1/2 lg:w-3/3 ">
        
      <div className="">
        <img
          src={image}
          alt={name}
          className="rounded-lg lg:w-full "
        />
      </div>
      <div className="mt-2 text-center">
        <h3 className="lg:text-xl sm:text-sm md:text-xl font-extrabold text-gray-800">{name}</h3>
        <p className="text-sm  text-yellow-500">Rating: {rating} / 5</p>
      </div>
    </div>
  );
};

export default Food;
