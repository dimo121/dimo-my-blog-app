import uuid from 'uuid';

export const createEntry = ( {  createdAt = 0, 
                                title = '', 
                                content = '' } , blog_id = 0) => {
    return {
        type: 'CREATE_ENTRY',
        entry : {
            id : uuid(),
            blog_id,
            createdAt,
            title,
            content
        }
    };
} 

export const deleteEntry = (id) => {
    return {
        type: 'DELETE_ENTRY',
        id
    };
}

