import React from 'react';
import { Link } from 'react-router-dom';
import{ useEffect, useRef } from "react";
import gsap from 'gsap';

const Video = () => {

    const sectionRef = useRef(null);
    const inputRef = useRef(null);
  
    useEffect(() => {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );
      gsap.fromTo(
        inputRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.8, delay: 0.5 }
      );
    }, []);

    return (
        <div>
            <div className="bg-black text-white p-6  ">
                <h2 className="text-4xl font-bold text-center mb-4 p-4">WHAT TO WATCH</h2>
                <div className="flex  md:flex-row gap-4 container mx-28">
                    {/* Main Video */}
                    <div className="flex-1 relative">
                        <iframe
                            width="100%"
                            height="515"
                            src="https://www.youtube.com/embed/7WPtzF1eBQo?si=FK-1wPK3paoyI_tP"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                        <div className="bg-gradient-to-t from-black/70 mt-2">
                            <p className="uppercase text-yellow-500 text-sm">Street Eats</p>
                            <h3 className="text-lg font-bold">
                                Taiwan's Most Iconic Breakfast Spot Serves 1000 People an Hour
                            </h3>
                        </div>
                    </div>
                    <div className="h-100 border-l-2 border-gray-100"></div>


                    {/* Side Videos */}
                    <div className="flex-1 flex flex-col gap-4">
                        <div className="relative items-center gap-4">
                            <iframe
                                width="70%"
                                height="300"
                                src="https://www.youtube.com/embed/SdmYs2FMjps?si=ZHCmPpsXBYMRcyit"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            ></iframe>
                            <div className="flex flex-col">
                                <p className="text-sm uppercase text-yellow-500">On The Line</p>
                                <h4 className="text-sm font-semibold">
                                    How NYC’s Hottest Taqueria Uses an Entire Pig in Their Tacos
                                </h4>
                            </div>
                        </div>
                        <div className="relative items-center gap-4">
                            <iframe
                                width="70%"
                                height="300"
                                src="https://www.youtube.com/embed/mQVI29OBHnk?si=LCgthUX7PcXlBPLh"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            ></iframe>
                            <div className="flex flex-col">
                                <p className="text-sm uppercase text-yellow-500">Made to Order</p>
                                <h4 className="text-sm font-semibold">
                                    How One of NYC’s Best Bakeries Makes Focaccia
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-4 text-center p-4">
                    <Link to="/videos" className="border px-4 py-2 text-sm font-bold uppercase">
                        See More Videos
                    </Link>
                </div>
            </div>


            <div ref={sectionRef} className="bg-green-700 text-white py-16 px-10 text-center  flex gap-2">
      <h2 className="text-2xl font-bold text-black mb-2">*Want more deliciousness?</h2>
      <p className="text-lg mb-4 text-black w-[700px]">Subscribe here and we'll send you an email as new recipes are <br/> published AND our fan favorites ebook!</p>
      <div ref={inputRef} className="flex justify-center items-center max-w-md mx-auto">
        <input
          type="email"
          placeholder="EMAIL ADDRESS..."
          className="px-4 py-2 w-full border-none focus:outline-none text-gray-800 rounded-l-lg"
        />
        <button className="bg-black text-white px-4 py-2 font-semibold rounded-r-lg hover:bg-black">
          SUBMIT
        </button>
      </div>
    </div>
        </div>
    );
};

export default Video;