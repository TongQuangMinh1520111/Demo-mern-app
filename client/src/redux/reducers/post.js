import { INIT_STATE } from "../../constant";
import { getPost, getType } from "../action";

export default function postsReducers(state = INIT_STATE.posts, action) {
  switch (action.type) {
    case getType(getPost.getPostRequest()):
      return {
        ...state,
        isloading: true,
      };
    case getType(getPost.getPostSuccess()):
      return {
        ...state,
        isloading: false,
        data: action.payload,
      };
    case getType(getPost.getPostFailure()):
      return {
        ...state,
        isloading: false,
      };
    default:
      return state;
  }
}
