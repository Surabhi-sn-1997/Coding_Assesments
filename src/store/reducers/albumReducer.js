import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function getAlbumList(state = initialState, action) {
  switch (action.type) {
    case types.GET_ALBUM_LIST:
      return {
        ...state,
        albumList: (action && action.response) || [],
      };

    default:
      return state;
  }
}
