import React from 'react';
import { connect } from 'react-redux';
import BlogItem from './BlogItem';
import EntryItem from './Entryitem';

class BlogPage extends React.Component{
    constructor(props){
        super(props);
        this.blog = {}
    }

    render(){
        const index = this.props.blogs.findIndex((item) => item.id == this.props.match.params.id);
        this.blog = this.props.blogs[index];
        return (
            <div className="search__container">
                <div className="blogContainer">
                    <h1>{this.blog.title}<span className="blogContainer__span">{this.blog.createdAt}</span></h1>
                    <p>{this.blog.content}</p>
                    <p>Replies: {this.blog.entries.length}
                    </p>
                </div>
                <div>
                    { 
                        this.blog.entries.map((item) => {
                            return <EntryItem key={item.id} entry={item} />;
                        })
                    }
                </div>
            </div>
        );
    };

}

//<BlogItem key={this.props.match.params.id} blog={this.blog} />

const mapStateToProps = (state) => {
    return {
        blogs: state.blogs
    };
};

export default connect(mapStateToProps)(BlogPage);