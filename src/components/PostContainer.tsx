import React, {FC} from 'react';
import {postApi} from "../services/PostService";
import PostItem from "./PostItem";
import {IPost} from "../models/IPost";

const PostContainer: FC = () => {
    const {data: posts, error, isLoading, refetch} = postApi.useFetchAllPostsQuery(15

        // FOR CHAT web socket (ws)
        // ,{
        //     pollingInterval: 1000
        // }
    )
    const [createPost, {isLoading: createIsLoading, error: createError}] = postApi.useCreatePostMutation()
    const [editPost, {}] = postApi.useEditPostMutation()
    const [deletePost, {}] = postApi.useDeletePostMutation()
    const handleCreatePost = async () => {
        const title = prompt()
        await createPost({title, body: title} as IPost)
    }
    const handleEdit = (post: IPost) => {
        editPost(post)
    }
    const hamdleRemove = (post: IPost) => {
        deletePost(post)
    }

    return (
        <div>
            <div style={{
                width: "75vw",
                margin: "0 auto",
                background: "aquamarine"
            }}>
                <button onClick={() => refetch()}>Refetch</button>
                <button onClick={handleCreatePost}>Add New Post</button>

                {isLoading && <h1>Loading...</h1>}
                {error && <h1>ERROR</h1>}
                {createIsLoading && <h1>create Post<br/>Loading...</h1>}
                {createError && <h1>create Post<br/>ERROR</h1>}
                {posts && posts.map(post => <PostItem remove={hamdleRemove} edit={handleEdit} key={post.id}
                                                      post={post}/>)}
            </div>
        </div>
    );
};

export default PostContainer;