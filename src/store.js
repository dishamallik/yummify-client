import { configureStore } from "@reduxjs/toolkit";
import { recipeApi } from "./page/RecipeApi";
import { blogApi } from "./page/BlogApi.jsx";

const Store = configureStore({
    reducer: {
        [recipeApi.reducerPath]: recipeApi.reducer,
        [blogApi.reducerPath]: blogApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(recipeApi.middleware)
            .concat(blogApi.middleware) 
});

export default Store;