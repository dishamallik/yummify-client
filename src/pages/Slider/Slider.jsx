import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Food from "../../Components/Food/Food";
import { BiStar } from "react-icons/bi";

const Slider = () => {
  const foods = [
    {
      id: 1,
      name: "Curried Lentil, Tomato, and Coconut Soup",
      image: "https://assets.bonappetit.com/photos/5a05c9df3388d32a6ed54e97/3:4/w_640,c_limit/curried-lentil-tomato-and-coconut-soup.jpg",
      rating: 4.5,
    },
    {
      id: 2,
      name: "Spanish Shrimp and Rice with Saffron Mayo",
      image: "https://assets.bonappetit.com/photos/6769a4f007ff88dac9701efe/3:4/w_640,c_limit/20241101_BA_0225PANTRY_Spanish-Shrimp-and-Rice-_0227.jpg",
      rating: 4.8,
    },
    {
      id: 3,
      name: "Green Curry Lentils and Pasta",
      image: "https://assets.bonappetit.com/photos/67660186f300e79455602b21/3:4/w_640,c_limit/20241112_03_Green%20Curry%20Lentils%20with%20Pasta_027.jpg",
      rating: 4.2,
    },
    {
      id: 4,
      name: "Picadillo",
      image: "https://assets.bonappetit.com/photos/5f32b10e899c3a155c703dc1/3:4/w_640,c_limit/Picadillo-Recipe.jpg",
      rating: 4.7,
    },
    {
      id: 5,
      name: "Quinoa-Bean Salad With Lots of Dill",
      image: "https://assets.bonappetit.com/photos/672a4bb35d5d5cea54368b04/3:4/w_640,c_limit/dilly-bean-salad_RECIPE_103124_6955_VOG_final.jpg",
      rating: 4.9,
    },
    {
      id: 6,
      name: "BA’s Best Bolognese",
      image: "https://assets.bonappetit.com/photos/5c2f8fe22efb8f2d33e396ca/3:4/w_640,c_limit/bolognese.jpg",
      rating: 4.3,
    },
    {
      id: 7,
      name: "Cumin Lamb and Potato Wontons",
      image: "https://assets.bonappetit.com/photos/677d59110df45af1ffa19ce7/3:4/w_640,c_limit/Cumin-Lamb-Potato-Leek-Wontons-Balsamic-Sauce_VOG.jpg",
      rating: 4.6,
    },
    {
      id: 8,
      name: "Spicy Salmon Hand Rolls",
      image: "https://assets.epicurious.com/photos/678651c3165417696a0c8465/3:4/w_640,c_limit/20241101_BA_0225PANTRY_Spicy-Salmon-Hand-Rolls-_0163s.jpg",
      rating: 4.8,
    },
    {
      id: 9,
      name: "Miso Chicken and Squash Soup",
      image: "https://assets.epicurious.com/photos/67757495f323898b25cb08bd/3:4/w_640,c_limit/20241119_05_Red%20Miso%20Chicken%20Soup_015.jpg",
      rating: 4.4,
    },
    {
      id: 10,
      name: "Extra-Creamy Fettuccine Alfredo",
      image: "https://assets.epicurious.com/photos/675ce3e39959d736eb89b0ea/3:4/w_640,c_limit/fettuccine-alfredo_RECIPE_V3_120524_11091_VOG_final.jpg",
      rating: 4.5,
    },
  ];

  return (
    <div>
      <div className="text-center m-10">
        <div className="text-4xl">Trending Recipes</div>
        <hr className="w-20 mx-auto my-4 border-red-400 border-t-2" />
      </div>

      <div className="container mx-auto text-black flex items-center justify-center">
        <Swiper
          className="mySwiper"
          modules={[Navigation]}
          pagination={{ clickable: true }}
          navigation
          spaceBetween={30} // Default spacing
          breakpoints={{
            // For extra small devices (xs)
            320: {
              slidesPerView: 1,
              spaceBetween: 5,
            },
            // For small devices (sm)
            640: {
              slidesPerView: 1,
              spaceBetween: 5,
            },
            // For medium devices (md)
            768: {
              slidesPerView: 2,
              spaceBetween: 5,
            },
            // For large devices (lg)
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
        >
          {foods.map((food) => (
            <SwiperSlide key={food.id}>
               <div className="  container w-full mx-auto">
               <div className="">
                                        <img
                                            src={food.image}
                                            alt={food.name}
                                            className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover rounded-t-lg"
                                        />
                                        <div className="font-bold text-center">
                                          <p className="text-2xl ">{food.name}</p>
                                          <p  className="text-md text-yellow-400"> {food.rating}</p>
                                        </div>
                                        </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;