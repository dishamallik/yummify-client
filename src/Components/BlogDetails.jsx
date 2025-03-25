import React, { useEffect, useState, useMemo } from 'react';
import { useGetBlogQuery } from '../page/BlogApi';
import { useParams } from 'react-router-dom';
import sign from "../assets/Eva-Kosmas-Flores-Summer-567x850.jpg";
import Corner from './Corner';

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blogs, isLoading, error } = useGetBlogQuery();
    const [blog, setBlog] = useState(null);

   // In BlogDetails.js
useEffect(() => {
    if (blogs) {
      const foundBlog = blogs.find(r => r._id === id); // Remove parseInt if id is string
      setBlog(foundBlog);
    }
  }, [blogs, id]);
  
  const recommendedBlogs = useMemo(() => {
    if (!blogs) return [];
    return blogs.filter(item => item._id !== id).slice(0, 4); // Use _id
  }, [blogs, id]);

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading blog details</p>;
    if (!blog) return <p>Blog not found</p>;

    return (
        <div className='bg-orange-50'>
            <div>
                <div className='font-merienda text-center text-3xl p-5'>
                    <p>_ADVENTURES in COOKING_</p>
                </div>
                <div>
                    <img src={blog.img2} alt="" className='w-full object-cover h-[500px] relative' />
                </div>
                <div className='bg-opacity-80 bg-white max-w-2xl p-10 absolute left-80 -bottom-60 text-center mb-10'>
                    <p className='mt-3 text-yellow-800 text-2xl font-bold mb-1'>{blog.name}</p>
                    <p className='text-lg '>_{blog.type}_</p>
                </div>
            </div>

            <div className='container mx-auto mt-40'>
                <div className='flex gap-10'>

                   
                    <div className="col-span-2">
                        <div className='w-[700px] text-2xl'>{blog.description1}</div>
                        <img src={blog.img1} alt="" className='py-5 object-cover w-[700px] h-[500px]' />
                        <div className='w-[700px] text-2xl'>{blog.description2}</div>
                        <hr className='border-1 border-black mt-5 w-[700px]'></hr>

                       
                        <div className='mt-10'>
                            <p className='text-2xl font-bold'>Recommended</p>
                            <hr className='border-2 border-black mt-1 w-40'></hr>
                            {recommendedBlogs.length > 0 ? (
                                recommendedBlogs.map(blog => (
                                    <div key={blog.id} className="flex gap-5 items-center bg-white shadow-md rounded-lg p-5 my-5">
                                        <div>
                                            <img src={blog.img1} alt={blog.name} className="w-[200px] h-40 object-cover" />
                                        </div>
                                        <div className="md:w-2/3 md:pl-6 text-left">
                                            <h2 className="text-2xl font-bold text-gray-900 mt-1">{blog.name}</h2>
                                            <p className="text-gray-600 mt-2">{blog.description1.slice(0, 100)}...</p>
                                            <a href={`/blogs/${blog.id}`} className="text-yellow-600 font-bold mt-3 inline-block">
                                                CONTINUE READING
                                            </a>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p className="text-gray-500">No blogs available</p>
                            )}
                        </div>
                    </div>

                    <div className="col-span-1">
                        <div className="relative border-gray-400 mb-2">
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/80 px-2 py-2 rounded-lg shadow-lg text-lg font-semibold text-black text-center font-merienda gap-2">
                                <p>If you also want to submit a blog, sign up now!</p>
                                <button className="mt-4 px-6 py-2 bg-orange-500 text-white rounded-xl hover:bg-blue-600 transition duration-300">
                                    Sign Up
                                </button>
                            </div>
                            <img src={sign} alt="Delicious Food" className="w-96 h-80 p-2 mx-auto object-cover" />
                        </div>

                       
                        <div className='mt-10 mx-24'>
                            <div className='text-center text-2xl p-2 font-merienda'>
                                <p>You might like</p>
                                <hr className='border-1 border-black p-2 mt-2'></hr>
                            </div>

                            <div>
                                <div className='py-2'>
                                    <iframe width="360" height="215" src="https://www.youtube.com/embed/5fPJR5KzKGA" allowFullScreen></iframe>
                                </div>
                                <iframe width="360" height="215" src="https://www.youtube.com/embed/yVQLUjYA61Q" allowFullScreen></iframe>
                                <div className='py-2'>
                                    <iframe width="360" height="215" src="https://www.youtube.com/embed/OfuvqTuCl30" allowFullScreen></iframe>
                                </div>
                            </div>
                        </div>

                        <div className='mt-10 mx-24'>
                            <Corner />
                        </div>
                    </div>
                </div>
            </div>

           
            <div className="bg-yellow-200 text-white py-16 px-10 text-center mt-5 flex gap-2">
                <h2 className="text-2xl font-bold text-black mb-2">*Want more deliciousness?</h2>
                <p className="text-lg mb-4 text-black w-[700px]">
                    Subscribe here and we'll send you an email as new recipes are published AND our fan favorites ebook!
                </p>
                <div className="flex justify-center items-center max-w-md mx-auto">
                    <input type="email" placeholder="EMAIL ADDRESS..." className="px-4 py-2 w-full border-none focus:outline-none text-gray-800 rounded-l-lg" />
                    <button className="bg-black text-white px-4 py-2 font-semibold rounded-r-lg hover:bg-black">
                        SUBMIT
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;
