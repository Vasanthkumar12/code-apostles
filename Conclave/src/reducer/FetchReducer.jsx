

// import { FETCH_SUCCESS, FETCH_ERROR, SET_FILTER } from "./actions";

// export const initialState = {
//     loading: true,
//     error: null,
//     post: null,
//     selectedInterest: "All", // Store selected filter
// };

// export const FetchReducer = (state, action) => {
//     switch (action.type) {
//         case FETCH_SUCCESS:
//             return { ...state, post: action.payload, loading: false };
//         case FETCH_ERROR:
//             return { ...state, error: action.payload, loading: false };
//         case SET_FILTER:
//             return { ...state, selectedInterest: action.payload }; // Update filter
//         default:
//             return state;
//     }
// };






import { FETCH_SUCCESS, FETCH_ERROR, SET_FILTER, SET_CURRENT_USER } from "./actions";

export const initialState = {
    loading: true,
    error: null,
    post: null,
    selectedInterest: "All",
    currentUserId: null,
};

export const FetchReducer = (state, action) => {
    switch (action.type) {
        case FETCH_SUCCESS:
            return { ...state, post: action.payload, loading: false };
        case FETCH_ERROR:
            return { ...state, error: action.payload, loading: false };
        case SET_FILTER:
            return { ...state, selectedInterest: action.payload };
        case SET_CURRENT_USER:
            return { ...state, currentUserId: action.payload };
        default:
            return state;
    }
};