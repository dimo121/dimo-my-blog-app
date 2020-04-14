import React from 'react';
import EntryFormPage from './EntryFormPage';
import { connect } from 'react-redux';
import { createBlog } from '../actions/blogs';

const CreateBlog = (props) => (
            <div className="create__container">
                <h1>Create blog</h1>
                <EntryFormPage onSubmit={(blogEntry) => {
                    props.dispatch(createBlog(blogEntry));
                    props.history.push('/');
                }}/>
            </div>
);

export default connect()(CreateBlog);
