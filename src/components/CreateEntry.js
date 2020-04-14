import { connect } from 'react-redux';
import { createEntry } from '../actions/entries';
import EntryFormPage from './EntryFormPage';
import React from 'react';

class CreateEntry extends React.Component {
    
    componentDidMount() {
        const { blog_id } = this.props.location.state;
        this.blog_id = blog_id;
        console.log(blog_id);
    }
    
    render(){
        
        return (
            <div className="create__container">
                <h1>Create entry</h1>
                <EntryFormPage onSubmit={(entry) => {
                    this.props.dispatch(createEntry(entry, this.blog_id));
                    this.props.history.push('/');
                }}/>
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    return{
        filters: state.filters
    }
}

export default connect()(CreateEntry);
//connect this component to redux store and pass onSubmit as props to entryformpage. 
//onSubmit whould call action to store with the entry object being passed as argument.