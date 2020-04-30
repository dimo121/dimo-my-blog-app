import { connect } from 'react-redux';
import React from 'react';


class EntryItem extends React.Component {
    
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="entryContainer">
                <h1>{this.props.entry.title}<span className="entryContainer__span">{this.props.entry.createdAt}</span></h1>
                <p>{this.props.entry.content}</p>
            </div>
        );
    }
};

// Create blog page to redirect to, will render blog item and entries underneath that
// needs option to reply to blog, also show number of entries on blog container

export default connect()(EntryItem);