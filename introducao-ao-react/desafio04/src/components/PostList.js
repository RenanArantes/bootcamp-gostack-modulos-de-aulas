import React, { Component } from 'react';
import Post from './Post';

class PostList extends Component {
    state = {
        posts: [
            {
                id: 1,
                manager: {
                    name: "Venda do seu João",
                    avatar: "https://pngimage.net/wp-content/uploads/2018/06/png-entreprise-1.png",
                },
                date: "19 de Fevereiro de 2020",
                content: "Preciso de atualizar a guia de imposto.",
                comments: [
                    {
                        id: 1,
                        accountant: {
                            name: "Contador",
                            avatar: "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-original-577x577/s3/0015/3779/brand.gif",
                        },
                        date: '19 de Fevereiro de 2020',
                        content: "Sera gerada."
                    }, {
                        id: 2,
                        accountant: {
                            name: "Contador",
                            avatar: "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-original-577x577/s3/0015/3779/brand.gif",
                        },
                        date: '19 de Fevereiro de 2020',
                        content: "Disponível no e-mail;."
                    }
                ]
             }, 
            {
                id: 2,
                manager: {
                    name: "Transportadora Transportes",
                    avatar: "https://pngimage.net/wp-content/uploads/2018/06/png-entreprise-1.png",
                },
                date: "14 de Fevereiro de 2020",
                content: "Preciso de atualizar a guia de imposto.",
                comments: [
                    {
                        id: 1,
                        accountant: {
                            name: "Contador",
                            avatar: "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-original-577x577/s3/0015/3779/brand.gif",
                        },
                        date: '19 de Fevereiro de 2020',
                        content: "Sera gerada."
                    }, {
                        id: 2,
                        accountant: {
                            name: "Contador",
                            avatar: "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-original-577x577/s3/0015/3779/brand.gif",
                        },
                        date: '19 de Fevereiro de 2020',
                        content: "Disponível no e-mail;."
                    }
                ]
            }
            
        ]
    };

    render() {

        return(
            <div className="postlist">
                {this.state.posts.map( post =>(
                    <Post 
                        key={post.id} 
                        post={post}
                    />
                ))}
            </div>
        )
    }
}

export default PostList;
