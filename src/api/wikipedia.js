import axios from 'axios';

// https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=programming

export default axios.create({
  baseURL: 'https://en.wikipedia.org/w/api.php',
  params: {
    action: 'query',
    list: 'search',
    format: 'json',
    origin: '*',
  },
});