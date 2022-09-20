import { createActions } from "redux-actions";


export const getType = (reduxActions)=> {
  return reduxActions.type;
}

export const getPost = createActions({
  getPostRequest: undefined,
  getPostSuccess: (payload) => payload,
  getPostFailure: (err) => err,
});
