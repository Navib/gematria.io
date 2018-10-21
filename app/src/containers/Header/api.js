import axios from 'axios';

export const getNavigation = () => {
  return axios.get('https://api.myjson.com/bins/9ixjs');
};
