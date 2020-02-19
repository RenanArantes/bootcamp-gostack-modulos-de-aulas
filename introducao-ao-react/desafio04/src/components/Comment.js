import React from 'react';

function Comment({ comment }) {

    return(
        <div className="post-comments">
            <div className="divider" />
            <div className="comment">
                <img className="avatar" src={comment.accountant.avatar}></img>
                <p>
                    <span>{comment.accountant.name}</span>
                    {comment.content}
                </p>
            </div>
        </div>
    )
}

export default Comment;
