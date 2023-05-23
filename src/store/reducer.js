import { GET_COMMENTS_SUCCESS, GET_POSTS_SUCCESS, GET_USERS_SUCCESS } from './actions';

const myReducer = (state = { 
    isLoading: true, 
    isLoadingComments:true, 
    posts: [], 
    comments: [], 
    users: [] 
}, action
) => {
    switch (action.type) {
        case GET_POSTS_SUCCESS:
            return { ...state, posts: action.posts, isLoading: false };
        case GET_COMMENTS_SUCCESS:
            return { ...state, comments: action.comments, isLoadingComments: false };
        case GET_USERS_SUCCESS:
            return { ...state, users: action.users, isLoading: false };
        default: 
            return {...state};
    }
};

export default myReducer;