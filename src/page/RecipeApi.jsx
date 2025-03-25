import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const recipeApi = createApi({
    reducerPath: 'recipeApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://yummify-server.vercel.app/',
    }),

    endpoints: (builder) => ({


        getRecipe: builder.query({
            query: () => 'recipes',
            providesTags: (result) =>
                result
                    ? [...result.map(({ id }) => ({ type: 'Post', id })), { type: 'Post', id: 'LIST' }]
                    : [{ type: 'Post', id: 'LIST' }],
        }),
       
    }),
});

export const {
    useGetRecipeQuery,
   
} = recipeApi;