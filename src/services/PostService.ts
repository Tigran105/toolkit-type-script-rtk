import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {IPost} from "../models/IPost";


export const postApi = createApi({
    reducerPath: "postApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:5000/"
    }),
    tagTypes: ["Post"],
    endpoints: (build) => ({
        fetchAllPosts: build.query<IPost[], number>({
            query: (limit: number = 5) => ({
                url: "/posts",
                params: {
                    _limit: limit
                }
            }),
            providesTags: result => ["Post"]
        }),
        createPost: build.mutation<IPost, IPost>({
            query: (post) => ({
                url: "/posts",
                method: "POST",
                body: post
            }),
            invalidatesTags: result => ["Post"]
        }),
        editPost: build.mutation<IPost, IPost>({
            query: (post) => ({
                url: `/posts/${post.id}`,
                method: "PUT",
                body: post
            }),
            invalidatesTags: result => ["Post"]
        }),
        deletePost: build.mutation<IPost, IPost>({
            query: (post) => ({
                url: `/posts/${post.id}`,
                method: "DELETE",
            }),
            invalidatesTags: result => ["Post"]
        })

    })
})