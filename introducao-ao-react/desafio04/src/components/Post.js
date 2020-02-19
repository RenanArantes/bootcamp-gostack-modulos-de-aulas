import React from 'react';

import Comment from './Comment';

function Post({ post })  {

    return (
        <div className="post">
            <div className="post-header">
                <img className="avatar" src={post.manager.avatar}/>
                <div className="details">
                    <span>
                        <strong>{post.manager.name}</strong>
                    </span>
                    <span>
                        {post.date}
                    </span>
                </div>
            </div>
            <p className="post-content">{post.content}</p>
            <script>{console.log(post)}</script>
            {post.comments.map( comment => 
                <Comment key={comment.id} comment={comment}/>
            )} 
        </div>
    )
}

export default Post;