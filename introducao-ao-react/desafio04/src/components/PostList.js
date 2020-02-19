import React, { Component } from 'react';

import Post from 'react';

class PostList extends Component {
    state = {
        posts: [
            {
                id: 1,
                author: {
                name: "Joaquim",
                avatar: "https://imgur.com/gallery/lpY9k4r.jpeg",
                },
                date: "2020/02/14",
                content: [
                    {
                        id: 1,
                        author: {
                            name: "Neia",
                            avatar: "https://imgur.com/gallery/YbFLyyU.jpeg",
                        }
                    }
                ]
            }, {
                id: 2,
                author: {
                name: "Joaquim",
                avatar: "https://imgur.com/gallery/lpY9k4r.jpeg",
                },
                date: "2020/02/14",
                content: [
                    {
                        id: 1,
                        author: {
                            name: "Neia",
                            avatar: "https://imgur.com/gallery/YbFLyyU.jpeg",
                        }
                    }
                ]
            }
            
        ]
    }

    render() {
        return(
            <>
                <div className="postlist">
                    <div className="post">
                        {this.state.posts.map(post =>
                            <Post key={post.id} post={post} />
                        )}
                    </div>
                </div>
            </>
        )
    }
}

export default PostList