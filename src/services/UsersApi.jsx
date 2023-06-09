import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const KEY_API = '33612698-29a0e4fa17aff9da96c8a261f';
export const PER_PAGE = 6;

export async function fetchImages(searchText, page = 1) {
  const URL = `${BASE_URL}?q=${searchText}&page=${page}&key=${KEY_API}&image_type=photo&orientation=horizontal&per_page=${PER_PAGE}`;
  const response = await axios.get(URL);
  return response.data;
}