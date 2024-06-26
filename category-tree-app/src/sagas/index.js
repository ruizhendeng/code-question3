import { all } from 'redux-saga/effects';
import watchCategorySaga from './categorySaga';
// Root saga that combines all watcher sagas
export default function* rootSaga() {
    // Use 'all' to run multiple sagas concurrently
    yield all([watchCategorySaga()]);
}
