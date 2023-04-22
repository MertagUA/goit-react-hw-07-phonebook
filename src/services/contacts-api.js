import axios from 'axios';

//https://641bfdd29b82ded29d5d49e1.mockapi.io/

axios.defaults.baseURL = 'https://643e9957c72fda4a0bfb73d9.mockapi.io/api/v1';
// axios.defaults.baseURL = 'https://641bfdd29b82ded29d5d49e1.mockapi.io';

export async function fetchContacts() {
  const { data } = await axios.get('/contacts');
  return data;
}

export async function addContacts({ name, phone }) {
  const response = await axios.post('/contacts/', { name, phone });
  return response.data;
}

export async function deleteContacts(id) {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
}
