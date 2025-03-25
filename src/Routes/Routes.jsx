import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Services from "../page/Services.jsx"
import Contact from "../page/Contact.jsx";
import Blog from "../page/Blog.jsx";
import About from "../page/About.jsx";
import Videos from "../Components/Videos.jsx";
import RecipeDetails from "../Components/RecipeDetails.jsx";
import BlogDetails from "../Components/BlogDetails.jsx";






export  const router = createBrowserRouter([
   
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
           path: '/',
           element: <Home></Home>
        },
        {
           path: '/services',
           element: <Services></Services>
        },
        {
           path: '/about',
           element: <About/>
        },
        {
           path: '/contact',
           element: <Contact/>
        },
        {
           path: '/blog',
           element: <Blog/>
        },
        {
           path: '/videos',
           element: <Videos/>
        },
        {
           path: "/recipes/:id",
           element: <RecipeDetails/>
        },
        {
           path: "/blogs/:id",
           element: <BlogDetails/>
        },
      ]
    },
  ]);