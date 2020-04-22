import uuid from 'uuid';
import database from '../firebase/firebase';

const createEntry = (entry) => ({
    type: 'CREATE_ENTRY',
    entry
});

export const startCreateEntry = ( {  content = '',
                                    createdAt = 0, 
                                    title = '' 
                                } , blog_id = 0) => {
    return (dispatch) => {

        const entry = { blog_id, content, createdAt, title };
        
        return database.ref('blogs/'+blog_id+'/entries').push(entry).then((ref) => {
            dispatch(createEntry({
                id: ref.key,
                ...entry
            }));
        });
    };
}; 

export const deleteEntry = (id) => {
    return {
        type: 'DELETE_ENTRY',
        id
    };
}

