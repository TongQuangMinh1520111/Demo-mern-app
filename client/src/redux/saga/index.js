import { takeLatest, call } from "redux-saga/effects";
import
function* fetchPostSaga(action) {
  const posts= yield call()
}
function* mySaga() {
  yield takeLatest(actions.getPost.getPostRequest, fetchPostSaga);
}

//generator func ES6

export default mySaga;
