import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const postApih = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => "/posts",
    }),
  }),
});

// export const { useGet}
