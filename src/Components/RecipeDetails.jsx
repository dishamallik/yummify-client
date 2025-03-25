import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGetRecipeQuery } from '../page/RecipeApi';
import Corner from './Corner';
import { FaClock, FaGlobe, FaUtensils } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const RecipeDetail = () => {
    const { id } = useParams();
    const { data: recipes, isLoading, error } = useGetRecipeQuery();
    const [recipe, setRecipe] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    useEffect(() => {
        if (recipes) {
            const foundRecipe = recipes.find(r => r.id === parseInt(id));
            setRecipe(foundRecipe);
        }
    }, [recipes, id]);

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading recipe details</p>;
    if (!recipe) return <p>Recipe not found</p>;

    const totalPages = Math.ceil(recipes.length / itemsPerPage);
    const paginatedRecipes = recipes.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    return (
        <>
            <div className="lg:flex md:flex container mx-auto gap-4">
                <div className="col-span-2">
                    <h1 className="text-3xl font-bold mb-1 mt-4">{recipe.recipe_name}</h1>
                    <img src={recipe.image} alt={recipe.recipe_name} className="w-[900px] h-[418px]" />
                    <p className="text-lg py-2 w-5/6"><strong>Instructions:</strong> {recipe.instructions}</p>
                    <div className='flex gap-2 py-5'>
                        <div className="text-lg mb-2 py-1 px-2 border-2 rounded-3xl bg-orange-500 flex gap-2 items-center"> 
                            <FaUtensils /> <p>{recipe.diet_type}</p>
                        </div>
                        <div className="text-lg mb-2 py-1 px-2 border-2 rounded-3xl bg-yellow-500 flex gap-2 items-center"> 
                            <FaGlobe /> <p>{recipe.cuisines}</p>
                        </div>
                        <div className="text-lg mb-2 py-1 px-2 border-2 rounded-3xl bg-red-400 flex gap-2 items-center">
                            <FaClock /> <p>{recipe.meal_time}</p>
                        </div>
                    </div>
                    <p className="text-lg mb-4">{recipe.ingredients}</p>
                    <div className="bg-yellow-300 text-white py-10 px-10 mt-10 flex gap-2">
                        <h2 className="text-2xl font-bold text-black mb-2">Don't miss a single recipe!<br/> Subscribe to receive new recipes straight to your inbox!</h2>
                        <div className="flex justify-center items-center max-w-md mx-auto">
                            <input type="email" placeholder="EMAIL ADDRESS..." className="px-4 py-2 w-full border-none focus:outline-none text-gray-800 rounded-l-lg" />
                            <button className="bg-black text-white px-4 py-2 font-semibold rounded-r-lg hover:bg-black">SUBMIT</button>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 mt-14">
                    <Corner />
                </div>
            </div>




            <hr className='w-11/12 justify-self-center mt-10 border-1 border-black' />
            <p className='text-center text-3xl p-2 mt-10  '>YOU MAY ALSO LIKE</p>
            <hr className='justify-self-center   w-60  border-1 border-black'></hr>
            {/* Cards and Pagination */}
            <div className="grid lg:grid-cols-3 md:grid-cols-3 gap-6 p-10">
                {paginatedRecipes.map(recipe => (
                    <div key={recipe.id} className="bg-white shadow-lg rounded-lg overflow-hidden border-2 border-gray-300 w-full mx-auto">
                        <div className="relative">
                                           <img
                                               src={recipe.image}
                                               alt={recipe.recipe_name}
                                               className="w-full h-56 object-cover rounded-t-lg"
                                           />
                                           {/* Overlay */}
                                           <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 text-center text-white">
                                               <h3 className="text-lg font-semibold">{recipe.recipe_name}</h3>
                                               <p className="text-sm flex items-center justify-center gap-2">
                                                   <FaUtensils /> {recipe.diet_type} | <FaGlobe /> {recipe.cuisines} | <FaClock /> {recipe.meal_time}
                                               </p>
                                               <Link to={`/recipes/${recipe.id}`} ><button className="mt-2 bg-white text-black px-4 py-1 rounded-full hover:bg-gray-200 transition">
                                                   Recipes
                       
                                               </button>
                                               </Link>
                                           </div>
                                       </div>
                    </div>
                ))}
            </div>
            {/* Pagination */}
            <div className="flex justify-center gap-2 mt-5">
                <button disabled={currentPage === 1} onClick={() => setCurrentPage(prev => prev - 1)} className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300">Previous</button>
                <span className="px-4 py-2 bg-gray-100 rounded-lg">Page {currentPage} of {totalPages}</span>
                <button disabled={currentPage === totalPages} onClick={() => setCurrentPage(prev => prev + 1)} className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300">Next</button>
            </div>
        </>
    );
};

export default RecipeDetail;
