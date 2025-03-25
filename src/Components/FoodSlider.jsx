import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { FaClock, FaGlobe, FaUtensils } from 'react-icons/fa';
import { useGetRecipeQuery } from '../page/RecipeApi';
import { Link } from 'react-router-dom';

const FoodSlider = () => {
    const { data: recipes, isLoading, error } = useGetRecipeQuery();

    return (
        <div>
            <div className="text-center m-10">
                <div className="text-4xl">Recipes</div>
                <hr className="w-20 mx-auto my-4 border-red-400 border-t-2" />
            </div>

            <div className="container mx-auto text-black flex items-center justify-center">
                <Swiper
                    className="mySwiper"
                    modules={[Navigation]}
                    pagination={{ clickable: true }}
                    navigation
                    spaceBetween={30}
                    breakpoints={{
                        // For small devices (sm)
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        // For medium devices (md)
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        // For large devices (lg)
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 30,
                        },
                    }}
                >
                    {isLoading && <p className="text-yellow-500">Loading...</p>}
                    {error && <p className="text-red-500">Error loading recipes</p>}

                    {recipes && recipes.length > 0 ? (
                        recipes.map(recipe => (
                            <SwiperSlide key={recipe.id}>
                                <div className="bg-white shadow-lg rounded-lg overflow-hidden border-2 border-gray-300 w-full mx-auto">
                                    <div className="relative">
                                        <img
                                            src={recipe.image}
                                            alt={recipe.recipe_name}
                                            className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover rounded-t-lg"
                                        />
                                        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 text-center text-white">
                                            <h3 className="text-xl font-semibold">{recipe.recipe_name}</h3>

                                            <div className="text-sm flex gap-2 items-center">
                                                <FaUtensils /> <p>{recipe.diet_type}</p>
                                            </div>
                                            <div className="text-sm flex gap-2 items-center">
                                                <FaGlobe /> <p>{recipe.cuisines}</p>
                                            </div>
                                            <div className="text-sm flex gap-2 items-center">
                                                <FaClock /> <p>{recipe.meal_time}</p>
                                            </div>

                                            <Link to={`/recipes/${recipe.id}`}>
                                                <button className="mt-2 bg-white text-black px-4 py-1 rounded-full hover:bg-gray-200 transition">
                                                    Recipes
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    ) : (
                        <p className="text-gray-500">No recipes available</p>
                    )}
                </Swiper>
            </div>
        </div>
    );
};

export default FoodSlider;