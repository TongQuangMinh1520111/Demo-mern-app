import { takeLatest, call } from "redux-saga/effects";
import *as actions from '../action'
import *as api from '../../api'
function* fetchPostSaga(action) {
  const posts= yield call(api.fetchPost);
  console.log('[posts]', posts)
}
function* mySaga() {
  yield takeLatest(actions.getPost.getPostRequest, fetchPostSaga);
}

//generator func ES6

export default mySaga;
