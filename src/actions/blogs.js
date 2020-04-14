import uuid from 'uuid';

export const createBlog = ( {   title = '', 
                                content = '', 
                                createdAt = 0 } = {}) => {
    return {
        type : 'CREATE_BLOG',
        blog: {
            id: uuid(),
            title,
            content,
            createdAt,
            entries : []
        }
    }
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