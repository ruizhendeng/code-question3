import {
    FETCH_CATEGORIES_REQUEST,
    FETCH_CATEGORIES_SUCCESS,
    FETCH_CATEGORIES_FAILURE,
} from '../actions/categoryActions';
// Define the initial state for the categories reducer
const initialState = {
    categories: { children: [] },
    loading: false,
    error: null,
};
// Categories reducer function to handle different action types
const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CATEGORIES_REQUEST:
            return { ...state, loading: true };
        case FETCH_CATEGORIES_SUCCESS:
            console.log('Fetched categories:', action.payload);
            return { ...state, loading: false, categories: action.payload || { children: [] } };
        case FETCH_CATEGORIES_FAILURE:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

export default categoryReducer;
