import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const blogApi = createApi({
reducerPath: 'blogApi',
baseQuery: fetchBaseQuery({
    baseUrl: 'https://yummify-server.vercel.app/',
}),

endpoints: (builder) => ({


    getBlog: builder.query({
        query: () => 'blogs',
        providesTags: (result) =>
            result
                ? [...result.map(({ id }) => ({ type: 'Post', id })), { type: 'Post', id: 'LIST' }]
                : [{ type: 'Post', id: 'LIST' }],
    }),
   
}),
});

export const {
useGetBlogQuery,

} = blogApi;