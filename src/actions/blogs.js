//import uuid from 'uuid';
import database from '../firebase/firebase';

const createBlog = (blog) => ({
    type: 'CREATE_BLOG',
    blog
})

export const startCreateBlog = ( {   title = '', 
                                content = '', 
                                createdAt = 0,
                                entries = [] } = {}) => {
    return (dispatch) => {
        const blog = { title, content, createdAt, entries };
        return database.ref('blogs').push(blog).then((ref) => {
            dispatch(createBlog({
                id: ref.key,
                ...blog
            }));
        });
    };
};

export const deleteBlog = (id) => {
    return {
        type: 'DELETE_BLOG',
        id
    }
};

const setBlogs = (blogs) => ({
    type: 'SET_BLOGS',
    blogs
});

export const startSetBlogs = () => {
    return (dispatch) => {
        const blogs = [];
        return database.ref('blogs').once('value').then((snapshot) => {
            snapshot.forEach((childSnapshot) => {
                //firebase does not register empty entries array
                //firebase store array as object
                blogs.push({
                    entries: [],
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });
            dispatch(setBlogs(blogs));
        });
    };
};
