import axios from 'axios';
import apiEndPoints from '../../../../routes/apiEndPoints';

export const getNavigation = () => {
  return axios.get(apiEndPoints.fetchHeader);
};
