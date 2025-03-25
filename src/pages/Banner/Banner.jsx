import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import img from "../../assets/20230823-1123-THANKSGIVING-WELL-306.jpg";
import img2 from "../../assets/chicken-scarpariello.jpg";
import img3 from "../../assets/Chocolate-Pudding_Recipe_2023-08-10_1286_3x2.jpg";
import img4 from "../../assets/istockphoto-1496591053-612x612.jpg";
import img5 from "../../assets/pexels-enginakyurt-1435896.jpg";

const Banner = () => {
  const leftColumnRef = useRef(null);
  const centerColumnRef = useRef(null);
  const rightColumnRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(leftColumnRef.current, { x: '-100%' }, { x: '0%', duration: 1, delay: 0.8 });
    gsap.fromTo(rightColumnRef.current, { x: '100%' }, { x: '0%', duration: 1, delay: 0.8 });
    gsap.fromTo(centerColumnRef.current, { scale: 0 }, { scale: 1, duration: 1, delay: 0.8 });
  }, []);

  return (
    <div className="min-h-screen bg-red-50 p-4 md:p-6 lg:p-8">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-7 gap-4">
        {/* Left Column */}
        <div 
          className="space-y-4 md:col-span-1 lg:col-span-2" 
          ref={leftColumnRef}
        >
          <div className="h-[200px] md:h-[250px] lg:h-[300px]">
            <img src={img3} alt="Chocolate Pudding" className="w-full object-cover h-[100px] md:h-[240px] lg:h-[160px]" />
            <div className="p-2">
              <button className="bg-black text-white w-20 h-7 relative overflow-hidden group">
                <span className="absolute inset-0 bg-yellow-400 w-0 h-full transition-all duration-300 group-hover:w-full"></span>
                <span className="relative z-10 group-hover:text-black">Recipe</span>
              </button>
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold">Chocolate Pudding</h3>
              <p className="text-xs md:text-sm text-gray-600">
                Chocolate pudding is a rich, creamy dessert made with cocoa powder, milk, sugar, and cornstarch, cooked until thickened.
              </p>
              <p className="mt-1 text-yellow-600 text-xs md:text-sm">★ 4.8 (107)</p>
            </div>
          </div>
          <div className="h-[200px] md:h-[250px] lg:h-[300px]">
            <img src={img2} alt="Chicken Scarpariello" className="w-full h-[100px] md:h-[140px] lg:h-[160px] object-cover" />
            <div className="p-2">
              <button className="bg-black text-white w-20 h-7 relative overflow-hidden group">
                <span className="absolute inset-0 bg-yellow-400 w-0 h-full transition-all duration-300 group-hover:w-full"></span>
                <span className="relative z-10 group-hover:text-black">Recipe</span>
              </button>
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold">Chicken Scarpariello</h3>
              <p className="text-xs md:text-sm text-gray-600">
                Braised chicken thighs, sweet Italian sausage, and roasted potatoes on a weeknight: Yes, you can.
              </p>
              <p className="mt-1 text-yellow-600 text-xs md:text-sm">★ 4.07 (50)</p>
            </div>
          </div>
        </div>

        {/* Center Column */}
        <div 
          className="md:col-span-1 lg:col-span-3" 
          ref={centerColumnRef}
        >
          <div className="h-full">
            <img src={img} alt="Main Dish" className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover" />
            <div className="p-2">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold">Our 59 Best Cabbage Recipes</h3>
              <p className="text-xs md:text-sm text-gray-600">
                These weeknight go-tos are sure to convert any brassica hater, one shred, wedge, or leaf at a time.
              </p>
              <p className="mt-1 text-yellow-600 text-xs md:text-sm">★ 4.07 (50)</p>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div 
          className="space-y-4 md:col-span-1 lg:col-span-2" 
          ref={rightColumnRef}
        >
          <div className="h-[200px] md:h-[250px] lg:h-[300px]">
            <img src={img4} alt="Pani Puri" className="w-full h-[100px] md:h-[140px] lg:h-[160px]  object-cover" />
            <div className="p-2">
              <button className="bg-black text-white w-20 h-7 relative overflow-hidden group">
                <span className="absolute inset-0 bg-yellow-400 w-0 h-full transition-all duration-300 group-hover:w-full"></span>
                <span className="relative z-10 group-hover:text-black">Recipe</span>
              </button>
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold">Pani Puri</h3>
              <p className="text-xs md:text-sm text-gray-600">
                Consumer advocates have been pushing for a ban on the controversial additive.
              </p>
              <p className="mt-1 text-yellow-600 text-xs md:text-sm">★ 4.00 (50)</p>
            </div>
          </div>
          <div className="h-[200px] md:h-[250px] lg:h-[300px]">
            <img src={img5} alt="Pasta al Pesto" className="w-full h-[100px] md:h-[140px] lg:h-[160px] object-cover" />
            <div className="p-2">
              <button className="bg-black text-white w-20 h-7 relative overflow-hidden group">
                <span className="absolute inset-0 bg-yellow-400 w-0 h-full transition-all duration-300 group-hover:w-full"></span>
                <span className="relative z-10 group-hover:text-black">Recipe</span>
              </button>
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold">Pasta al Pesto</h3>
              <p className="text-xs md:text-sm text-gray-600">
                Green pasta is made by blending spinach, basil, or other greens into the pasta dough, giving it its signature color.
              </p>
              <p className="mt-1 text-yellow-600 text-xs md:text-sm">★ 4.01 (50)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;