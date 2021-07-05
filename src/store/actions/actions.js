import * as types from "./actionTypes";
import * as albumApi from "../../apiServices/albumApi";

export function loadAlbumListSuccess(response) {
  return { type: types.GET_ALBUM_LIST, response };
}
export function getAllAlbumList() {
  return (dispatch) =>
    albumApi
      .getAlbumList()
      .then((res) => {
        dispatch(loadAlbumListSuccess(res));
      })
      .catch((error) => {
        console.log(error, "errror");
        throw error;
      });
}
