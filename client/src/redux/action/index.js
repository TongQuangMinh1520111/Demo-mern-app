import { createActions } from "redux-actions";

export const getPost = createActions({
  getPostRequest: undefined,
  getPostSuccess: (payload) => payload,
  getPostFailure: (err) => err,
});
