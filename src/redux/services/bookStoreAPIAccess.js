import axios from 'axios';

const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/vCoj0jFdW5XyCwCMME2t/books';

const get = () => axios.get(URL);

const create = (data) => axios.post(URL, data);

const remove = (id) => axios.delete(`${URL}/${id}`);

const booksService = {
  get,
  create,
  remove,
};

export default booksService;
