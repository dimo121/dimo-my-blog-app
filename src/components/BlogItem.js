import { connect } from 'react-redux';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';


class BlogItem extends React.Component {
    
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="blogContainer">
                <NavLink style={{'textDecoration': 'none'}} to={`/blog/${this.props.blog.id}`}>
                    <h1>{this.props.blog.title}<span className="blogContainer__span">{this.props.blog.createdAt}</span></h1>
                    <p>{this.props.blog.content}</p>
                </NavLink>
                <p>Replies: {this.props.blog.entries.length}<span>
                    <NavLink to={{
                                    pathname:'/createentry',
                                    state: {
                                        blog_id : this.props.blog.id
                                    } 
                                }}>
                        <button>Reply</button>
                    </NavLink></span>
                </p>
            </div>
        );
    }
};

// Create blog page to redirect to, will render blog item and entries underneath that
// needs option to reply to blog, also show number of entries on blog container

export default connect()(BlogItem);


//activeStyle={{text-decoration: none;}}