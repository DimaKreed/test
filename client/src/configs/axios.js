import axios from 'axios';
import configs from './common';

const axiosM3Instance = axios.create({ baseURL: configs.M3URL });

export default axiosM3Instance;
