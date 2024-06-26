import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import {
    FETCH_CATEGORIES_REQUEST,
    fetchCategoriesSuccess,
    fetchCategoriesFailure,
} from '../actions/categoryActions';
// Generator function to handle the fetch categories saga
function* fetchCategoriesSaga() {
    try {
        // Make an HTTP GET request to fetch categories
        const response = yield call(axios.get, 'http://localhost:8080/categories');
        // Dispatch a success action with the fetched data
        yield put(fetchCategoriesSuccess(response.data));
    } catch (error) {
        yield put(fetchCategoriesFailure(error.message));
    }
}
// Watcher saga to watch for FETCH_CATEGORIES_REQUEST action
export default function* watchCategorySaga() {
    // Take the latest FETCH_CATEGORIES_REQUEST action and run fetchCategoriesSaga
    yield takeLatest(FETCH_CATEGORIES_REQUEST, fetchCategoriesSaga);
}
