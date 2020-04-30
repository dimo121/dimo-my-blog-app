import React from 'react';
import { connect } from 'react-redux';
import BlogItem from './BlogItem';
import EntryItem from './Entryitem';

class BlogPage extends React.Component{
    constructor(props){
        super(props);
        this.blog = {}
    }

    componentDidMount(){
        
    }

    render(){
        const index = this.props.blogs.findIndex((item) => item.id == this.props.match.params.id);
        console.log(index);
        this.blog = this.props.blogs[index];
        console.log(this.blog);
        return (
            <div>
                <h1>Results :</h1>
                { 
                    this.blog.entries.map((item) => {
                        console.log(item);
                        //return <EntryItem key={item.id} entry={item} />;
                    })
                }
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