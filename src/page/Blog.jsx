import React from 'react';
import header from "../assets/Recipes-Header-5 (1).jpg";
import { useGetBlogQuery } from './BlogApi';
import { Link } from 'react-router-dom';
import Corner from '../Components/Corner';
import sign from '../assets/Eva-Kosmas-Flores-Summer-567x850.jpg';
import { useAuth0 } from '@auth0/auth0-react';

const Blog = () => {
  const { loginWithRedirect } = useAuth0();
  const { data: blogs, isLoading, error } = useGetBlogQuery();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading blogs!</p>;

  return (
    <div>
      <div className='font-merienda text-center text-3xl p-5'>
        <p>_ADVENTURES in COOKING_</p>
      </div>
      <div>
        <img src={header} alt="" className='w-full object-cover h-[500px] relative' />
      </div>
      <div className='bg-opacity-80 bg-white max-w-2xl p-10 absolute lg:left-80 left-10 -bottom-10 lg:-bottom-80 text-center mb-10'>
        <p className='mt-3 text-yellow-800 text-5xl font-merienda mb-1'>_Blog_</p>
        <p>From pastries to roasts to veggies and meats, you will find the cure to your blog hungers below. I recommend eating seasonally whenever possible, since it means that your ingredients will be fresher and your food will look and taste better.</p>
        <p className='font-merienda p-2 text-xl'>Interested In?</p>
        <div className='p-4'>
          <input
            type="email"
            placeholder="EMAIL ADDRESS..."
            className="px-4 py-2 border-2 focus:outline-none text-gray-800 rounded-l-lg w-40"
          />
          <button className="bg-black text-white px-4 py-2 font-semibold rounded-r-lg hover:bg-black">
            SUBMIT
          </button>
        </div>
      </div>










 <div className='container mx-auto mt-60'>
 <hr className='border-1 border-black '></hr>    
<div className='lg:flex gap-6 p-5 '>

<div className=" col-span-2 lg:w-[2000px] ">
  {blogs && blogs.length > 0 ? (
    blogs.map(blog => (
      <div key={blog._id} className="flex gap-5 items-center bg-white shadow-md rounded-lg p-5 my-5 ">
        
        <div className="">
          <img src={blog.img1} alt={blog.name} className="w-[700px] h-60 object-cover " />
          
        </div>

       
        <div className="md:w-2/3 md:pl-6 text-left">
          
          <h2 className="text-2xl font-bold text-gray-900 mt-1">{blog.name}</h2>
          <p className="text-gray-600 mt-2">{blog.description1.slice(0, 100)}...</p>
          <a href={`/blogs/${blog._id}`} className="text-yellow-600 font-bold mt-3 inline-block">
  CONTINUE READING
</a>
        </div>
      </div>
    ))
  ) : (
    <p className="text-gray-500">No blogs available</p>
  )}
</div>

      <div className="col-span-1   ">
      <div className="relative  border-gray-400 mb-2 ">
       
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/80 px-2 py-2 rounded-lg shadow-lg  text-lg font-semibold text-black text-center font-merienda gap-2 ">
          <p className=""> If you also want to submit a blog, sign up now!</p>
          
          <button className="mt-4 px-6 py-2 bg-orange-500 text-white rounded-xl hover:bg-blue-600 transition duration-300 "   onClick={() => loginWithRedirect()}>
            Sign Up
          </button>
        
          
         
        </div>
        
      
        
        
        <img src={sign} alt="Delicious Food" className="lg:w-96 w-screen h-80 p-2 mx-auto object-cover" />
      </div>





        <div className='mt-10 '>
          <div className='text-center text-2xl p-2 font-merienda'>
          <p className=''>you might like</p>
          <hr className='border-1 border-black  p-2 mt-2'></hr> 
          </div>


          <div className="flex flex-col md:flex-row gap-4 justify-center items-center p-4">
  {/* First iframe */}
  <div className="w-full lg:w-[460px] md:w-[460px]">
    <iframe
      className="w-full h-[315px]"
      src="https://www.youtube.com/embed/5fPJR5KzKGA?si=62Dg3OVNcMe89-eE"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  </div>

  {/* Second iframe */}
  <div className="w-full md:w-[460px] lg:w-[460px]">
    <iframe
      className="w-full h-[315px]"
      src="https://www.youtube.com/embed/yVQLUjYA61Q?si=M7ZtaBCbta8Xne8S"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  </div>

  {/* Third iframe */}
  <div className="w-full md:w-[460px] lg:w-[460px]">
    <iframe
      className="w-full h-[315px]"
      src="https://www.youtube.com/embed/OfuvqTuCl30?si=QVktW0cKSDvQbeiz"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  </div>
</div>
        </div>
      <div className='mt-10 '>
        <Corner/>
      </div>
    </div>
    </div>









    </div>



    











    </div>
  );
};

export default Blog;