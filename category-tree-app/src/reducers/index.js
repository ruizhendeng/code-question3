import { combineReducers } from 'redux';
import categoryReducer from './categoryReducer';
// Combine all reducers into a single root reducer
const rootReducer = combineReducers({
    category: categoryReducer,
});

export default rootReducer;
