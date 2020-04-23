import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { changeActiveBlog } from '../actions/blogs';


class BlogItem extends React.Component {
    
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="blogContainer">
                <h1>{this.props.blog.title}<span className="blogContainer__span">{this.props.blog.createdAt}</span></h1>
                <p>{this.props.blog.content}</p>
                <p>Replies: {this.props.blog.entries ? Object.keys(this.props.blog.entries).length : 0}
                    <span>
                        <Link className='Link' to={{
                                                        pathname:'/createentry',
                                                        state: {
                                                            blog_id : this.props.blog.id
                                                        } 
                                                    }}>
                            <button>Reply</button>
                        </Link>
                    </span>
                </p>
            </div>
        );
    }
};

// Create blog page to redirect to, will render blog item and entries underneath that
// needs option to reply to blog, also show number of entries on blog container

export default connect()(BlogItem);