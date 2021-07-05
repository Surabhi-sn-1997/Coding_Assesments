export const BASE_URL = "https://jsonplaceholder.typicode.com";
export function handleResponse(response) {
  if (response.length) {
    return response;
  }
}
export function handleError(error) {
  console.log("error====", error);
  return error;
}
