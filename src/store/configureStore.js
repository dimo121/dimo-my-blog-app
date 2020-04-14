import { createStore, combineReducers } from 'redux';
import blogsReducer from '../reducers/blogs';
import filtersReducer from '../reducers/filters';

export default () => {

    const store = createStore(
        combineReducers({
            blogs: blogsReducer,
            filters: filtersReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    return store;

};

/*

*/