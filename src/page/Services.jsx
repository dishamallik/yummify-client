import { useRef, useEffect, useState } from "react";
import { useGetRecipeQuery } from "./RecipeApi";
import { FaUtensils, FaGlobe, FaClock } from "react-icons/fa";
import gsap from "gsap";
import Corner from "../Components/Corner"
import { Link,  } from "react-router-dom";
import { useGetBlogQuery } from "./BlogApi";

const mealTimes = ["Breakfast", "Lunch", "Dinner", "Snack", "Dessert"];
const dietTypes = ["Vegetarian", "Non-vegetarian"];
const cuisines = ["Indian", "Chinese", "Italian", "Mexican", "American", "Thai", "Japanese", "Middle Eastern", "French", "Spanish", "Russian", "International"];

const Services = () => {
   
    const { data: recipes, isLoading, error } = useGetRecipeQuery();
    const cardRefs = useRef([]);
    const borderRefs = useRef([]);
    const { data: blogs } = useGetBlogQuery();



    



    const [filteredRecipes, setFilteredRecipes] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedMealTime, setSelectedMealTime] = useState("");
    const [selectedDietType, setSelectedDietType] = useState("");
    const [selectedCuisine, setSelectedCuisine] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

   
    useEffect(() => {
        borderRefs.current.forEach((border) => {
            if (border) {
                gsap.to(border, { rotate: 360, repeat: -1, duration: 3, ease: "linear" });
            }
        });
    }, []);

   
    useEffect(() => {
        if (recipes) {
            let filtered = recipes.filter(recipe =>
                (!selectedMealTime || recipe.meal_time === selectedMealTime) &&
                (!selectedDietType || recipe.diet_type === selectedDietType) &&
                (!selectedCuisine || recipe.cuisines.includes(selectedCuisine)) &&
                (recipe.recipe_name.toLowerCase().includes(searchQuery.toLowerCase()))
            );
            setFilteredRecipes(filtered);
        }
    }, [recipes, selectedMealTime, selectedDietType, selectedCuisine, searchQuery]);

    // Pagination Logic
    const totalPages = Math.ceil(filteredRecipes.length / itemsPerPage);
    const paginatedRecipes = filteredRecipes.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const handleMouseEnter = (index) => {
        gsap.to(cardRefs.current[index], { scale: 1.1, duration: 0.3, ease: "power2.out" });
        gsap.to(cardRefs.current[index]?.querySelector(".darken"), { opacity: 0.5, duration: 0.3 });
    };

    const handleMouseLeave = (index) => {
        gsap.to(cardRefs.current[index], { scale: 1, duration: 0.3, ease: "power2.out" });
        gsap.to(cardRefs.current[index]?.querySelector(".darken"), { opacity: 0, duration: 0.3 });
    };

    return (
        <>
        <div className="bg-emerald-50  p-5">
            {isLoading && <p className="text-yellow-500">Loading...</p>}
            {error && <p className="text-red-500">Error loading recipes</p>}

            {!isLoading && !error && recipes && (
                <>
                    <div className="flex flex-wrap gap-5 p-5 items-center  ">
                        <input 
                            type="text" 
                            placeholder="Search recipes..." 
                            className="p-2 border rounded"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <select className="p-2 border rounded" onChange={(e) => setSelectedMealTime(e.target.value)}>
                            <option value="">All Meal Times</option>
                            {mealTimes.map(time => <option key={time} value={time}>{time}</option>)}
                        </select>
                        <select className="p-2 border rounded" onChange={(e) => setSelectedDietType(e.target.value)}>
                            <option value="">All Diet Types</option>
                            {dietTypes.map(type => <option key={type} value={type}>{type}</option>)}
                        </select>
                        <select className="p-2 border rounded" onChange={(e) => setSelectedCuisine(e.target.value)}>
                            <option value="">All Cuisines</option>
                            {cuisines.map(cuisine => <option key={cuisine} value={cuisine}>{cuisine}</option>)}
                        </select>
                    </div>





                    <section className="grid lg:grid-cols-3 gap-6 p-10">
   
    <div className="col-span-2 grid sm:grid-cols-1 grid-cols-2  gap-6">
        {paginatedRecipes.slice(0, 10).map((recipe, index) => (
            <div
                key={recipe.id}
                ref={(el) => (cardRefs.current[index] = el)}
                className="relative bg-white shadow-lg rounded-lg overflow-hidden border-2 border-gray-300 w-full  mx-auto transition-transform"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
            >
                
                <div className="relative">
                    <img
                        src={recipe.image}
                        alt={recipe.recipe_name}
                        className="w-full h-56 object-cover rounded-t-lg"
                    />
                   
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

   
    <div className="col-span-1  ">
       
        <Corner/>
        <div className="mt-5 ">
        <p className="text-2xl font-merienda mb-1">Blogs_</p>
  {blogs && blogs.length > 0 ? (
    blogs.slice(0, 2).map(blog => (
        
      <div key={blog._id} className="flex my-2 items-center bg-white shadow-md rounded-lg p-2 gap-3  h-auto">
        
        <div>
          <img src={blog.img1} alt={blog.name} className="h-28 w-40 object-cover" />
        </div>

        
        <div className="md:w-2/3 md:pl-6 text-left">
          <h2 className="text-md font-bold text-gray-900 mt-1">{blog.name}</h2>
          <p className="text-gray-600 text-xs mt-2">{blog.description1.slice(0, 100)}...</p>
          <a href={`/blogs/${blog.id}`} className="text-yellow-600 font-bold mt-1 text-xs inline-block">
            CONTINUE READING
          </a>
          
        </div>
        
      </div>
     
      
    ))
  ) : (
    <p className="text-gray-500">No blogs available</p>
  )}
   <Link to="/blog ">
   <button className="btn bg-emerald-200 ">More blogs</button>
   </Link>
</div>

    </div>
</section>






                    <div className="flex justify-center mt-6 gap-2">
                        {[...Array(totalPages)].map((_, index) => (
                            <button
                                key={index}
                                className={`px-3 py-1 border rounded ${currentPage === index + 1 ? "bg-green-500 text-white" : "bg-gray-200"}`}
                                onClick={() => setCurrentPage(index + 1)}
                            >
                                {index + 1}
                            </button>
                        ))}
                    </div>
                </>
            )}
        </div>







        <div className="bg-green-300 text-white py-16 px-10   flex gap-2">
      <h2 className="text-2xl font-bold text-black mb-2">Don't miss a single recipe!<br/>

Subscribe to receive new recipes straight to your inbox!</h2>
      
      <div  className="flex justify-center items-center max-w-md mx-auto">
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

export default Services;
