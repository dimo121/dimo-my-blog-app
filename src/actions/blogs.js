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

/*

no longer need for this action as blog_id is passed as Link prop
export const changeActiveBlog = (blog_id) => {
    return {
        type: 'CHANGE_ACTIVE_BLOG',
        blog_id: blog_id
    }
};

*/