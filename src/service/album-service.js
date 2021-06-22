import axios from 'axios';

const getAlbumList = async () => {
  const resp = await axios.get(
    'https://jsonplaceholder.typicode.com/users/1/albums'
  );
  return resp.data;
};

const getAlbum = async (id) => {
  const resp = await axios.get(
    `https://jsonplaceholder.typicode.com/users/1/albums/${id}`
  );
  return resp.data;
};

const getAlbumImageURL = (id) => {
  return `https://jsonplaceholder.typicode.com/albums/1/photos/${id}.png`;
};

export { getAlbumList, getAlbum, getAlbumImageURL };
