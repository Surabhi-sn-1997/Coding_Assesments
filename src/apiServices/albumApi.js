import "cross-fetch/polyfill";
import { handleResponse, handleError, BASE_URL } from "./apiUtils";
export function getAlbumList() {
  return fetch(`${BASE_URL}/photos`)
    .then((res) => res.json().then(handleResponse))
    .catch(handleError);
}
