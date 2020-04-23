const blogsDefaultState = [];

export default (state = blogsDefaultState, action) => {
    switch(action.type){
        case 'CREATE_BLOG':
            return [
                ...state,
                action.blog
            ];
        case 'CREATE_ENTRY':
            const index = state.findIndex((item) => item.id == action.entry.blog_id);
            state[index]['entries'].push(action.entry);
            console.log(state);
            return state;
        case 'DELETE_BLOG':
            return state.filter((blog) => blog.id != action.id);
        case 'SET_BLOGS':
            return [
                ...action.blogs
            ];
        default:
            return state; 
    }
}