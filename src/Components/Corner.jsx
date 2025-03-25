import React from 'react';
import corner from "../assets/Screenshot 2025-02-27 122510.png"
import about from "../assets/about.jpg";
import { Link } from 'react-router-dom';
import { FaInstagram } from 'react-icons/fa';

const Corner = () => {
    return (
        <div className=''>
          <div className="relative  ">
  
  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/80 px-2 py-2 rounded-lg shadow-lg flex items-center gap-2">
    <p className="text-lg font-semibold text-black">Follow me on</p>
    <FaInstagram className="w-6 h-6 text-black" /> {/* React Instagram icon */}
  </div>

  <p className="text-center text-xl p-1">Instagram</p>
  <hr className="w-32 border-black mx-auto"></hr>
  <img src={corner} alt="Delicious Food" className="  p-2 mx-auto border-2 px-5 py-5 border-gray-400 w-80 h-80 " />
</div>




            <div className=" mt-5  ">
        <p className="text-center text-xl p-1"> About us</p>
        <hr className="w-32 border-black p-2 justify-self-center"></hr>
        <img src={about} alt="Delicious Food" className="  justify-self-center w-80 h-80  " />
        <p className='text-center px-3 lg:w-[400px] w-[450px] justify-self-center font-semibold'>Yummify brings food to life through stories and recipes that center parenting, health .  We bring food culture to everyone and make life more delicious.<br/>
            <Link to="/about" className='font-extrabold text-red-400'>read more....</Link>
        </p>

        </div>



        </div>
    );
};

export default Corner;