import React, {FC} from 'react';
import {IPost} from "../models/IPost";

interface PostItemProps {
    post: IPost
    remove: (post: IPost) => void
    edit: (post: IPost) => void
}

const PostItem: FC<PostItemProps> = ({post, remove, edit}) => {

    const handleRemove = (event: React.MouseEvent) => {
        event.preventDefault()
        event.stopPropagation()
        remove(post)
    }
    const editHandler = (event: React.MouseEvent) => {
        const title = prompt("EDIT", post.title) || post.title
        event.preventDefault()
        event.stopPropagation()
        edit({...post, title})
    }
    return (
        <div style={{
            display: "flex",
            padding: "20px",
            justifyContent: "space-between",
            border: "2px dashed",
            margin: "5px 0"

        }}>
            <div>id -- {post.id} title -- {post.title}</div>
            <button onClick={handleRemove}>Delete</button>
            <button onClick={editHandler}>Edit</button>
        </div>
    );
};

export default PostItem;