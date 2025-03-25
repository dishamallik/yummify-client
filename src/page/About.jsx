import React, { useEffect, useRef } from "react";
import { gsap, Strong } from "gsap";
import about from "../assets/about.jpg";
import about2 from "../json/Animation - 1740327798165.json";
import Lottie from "lottie-react";

const About = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const listRef = useRef(null);

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

  useEffect(() => {
    gsap.from(containerRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out",
    });

    gsap.from(textRef.current, {
      opacity: 0,
      y: 20,
      duration: 1,
      delay: 0.5,
      ease: "power2.out",
    });

    gsap.from(listRef.current.children, {
      opacity: 0,
      x: -20,
      duration: 1,
      stagger: 0.2,
      delay: 1,
      ease: "power2.out",
    });
  }, []);

  return (
    <>
    <div className="container mx-auto bg-[#edeae4] p-20  rounded-lg flex items-end h-full">
      {/* Image Section */}
      <div className="md:w-1/2 relative">
        <img
          src={about}
          alt="Ingredients"
          className="lg:max-w-xs w-[400px] absolute lg:-top-60 md:-top-40"
        />
      </div>

      {/* Text Section */}
      <div className="lg:w-3/4 md:3/4 lg:pl-96 md:pl-20  flex flex-col justify-end h-full  ">
        <h1 className="text-4xl font-extrabold font-merienda text-yellow-600 " ref={textRef}>
          WELCOME, EVERYONE!
        </h1>
        <p className="mt-3 text-gray-700">
          At <strong>Yummify</strong>, we share simple recipes that require{" "}
          <strong>10 ingredients or less, 1 bowl, or 30 minutes or less to prepare.</strong>
        </p>
        <p className="mt-2 font-semibold">All eaters are welcome.</p>
        <p className="text-gray-600">
          Whether you’re new to Minimalist Baker or have been around for a while, we’re so
          glad you’re here.
        </p>
        <div className="mt-5" ref={listRef}>
          <p className="flex items-center">
            <span className="w-4 h-1 bg-red-500 mr-2"></span>
            <strong>10 Ingredients or Less</strong>
          </p>
          <p className="flex items-center mt-2">
            <span className="w-4 h-1 bg-green-600 mr-2"></span>
            <strong>1 - Bowl</strong>
          </p>
          <p className="flex items-center mt-2">
            <span className="w-4 h-1 bg-orange-500 mr-2"></span>
            <strong>30 Minutes or Less to Prepare</strong>
          </p>
        </div>
      </div>
    </div>

    
        <div className="relative">
    <Lottie
           className="lg:max-w-xl max-w-md rounded-lg absolute lg:right-12 lg:-top-72 md:-top-40 -top-36 right-5"
            animationData={about2} ></Lottie> 
            
</div>


            <div ref={sectionRef} className="bg-yellow-400 text-white py-16 px-10 text-center mt-60 lg:flex md:flex gap-2">
      <h2 className="text-2xl font-bold text-black mb-2">*Want more deliciousness?</h2>
      <p className="text-lg mb-4 text-black lg:w-[700px] md:w-[400px]">Subscribe here and we'll send you an email as new recipes are <br/> published AND our fan favorites ebook!</p>
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


    

    </>
  );
};

export default About;
