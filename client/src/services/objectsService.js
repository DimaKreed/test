import axiosM3Instance from '../configs/axios';

export default {
  getObjects: () => axiosM3Instance.get('/'),
  generateObjects: (maxDepth, rootKeyCount) => axiosM3Instance.post('/', { maxDepth, rootKeyCount }),
  sortObjects: (objects) => axiosM3Instance.post('/sort', { objects: objects.map((obj) => ({ ...obj.object, _id: obj._id })) }),
};
