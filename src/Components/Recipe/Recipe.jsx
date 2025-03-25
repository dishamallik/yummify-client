import React from 'react';
import Food from "../../json/Food.json"
import Lottie from 'lottie-react';
import { MdOutlineDownloadDone } from "react-icons/md";


const Recipe = () => {
    return (
        <div>
          
           
           <div className="hero bg-yellow-200 p-5 my-20">
  <div className="hero-content flex-col lg:flex-row-reverse">
  <Lottie
           className="max-w-sm rounded-lg "
            animationData={Food} ></Lottie> 
    <div>
      <h1 className="text-5xl  font-bold ">Save all your favorite <span className='font-merienda text-red-700'>recipes</span> <br/>in one place!</h1>
      
      <div className="text-xl">
      <p className="flex items-center space-x-4 py-6">
        <MdOutlineDownloadDone className="text-green-500 text-xl" />
        <span>Get editors' favorite recipes</span>
      </p>
      <p className="flex items-center space-x-4">
        <MdOutlineDownloadDone className="text-green-500 text-xl" />
        <span>Save recipes from all over the internet</span>
      </p>
      <p className="flex items-center space-x-4 py-6">
        <MdOutlineDownloadDone className="text-green-500 text-xl" />
        <span>Join our community of <span className='text-red-700 font-bold'>400,000!</span> (It's free!)</span>
      </p>
    </div>
      <button className="btn bg-black text-white rounded-none">Get Started</button>
    </div>
  </div>
</div>



        </div>
    );
};

export default Recipe;