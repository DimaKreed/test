import {
  forwardRef, useEffect, useImperativeHandle, useState,
} from 'react';
import objectsService from '../../services/objectsService';
import Object from './Object';
import './Objects.css';

const Objects = forwardRef((props, ref) => {
  const [objects, setObjects] = useState([]);

  const getObjects = () => objectsService.getObjects()
    .then((res) => {
      setObjects(res.data.reverse());
    })
    .catch((err) => console.error(err));

  const sortAll = async () => {
    try {
      await objectsService.sortObjects(objects);
    } catch (error) {
      console.error({ error });
    } finally {
      await getObjects();
    }
  };

  const sortUnsorted = async () => {
    try {
      await objectsService.sortObjects(objects.filter((obj) => !obj.sortStats.length));
    } catch (error) {
      console.error({ error });
    } finally {
      await getObjects();
    }
  };

  useImperativeHandle(ref, () => ({
    getObjects() {
      getObjects();
    },
    sortAll() { sortAll(); },
    sortUnsorted() { sortUnsorted(); },
  }));

  useEffect(() => {
    getObjects();
  }, []);

  return (
    <div className="wrapper">
      <div className="middle">
        {objects.map((object) => (
          <Object
            object={object}
            key={object._id}
            getObjects={getObjects}
          />
        ))}
      </div>
    </div>
  );
});

export default Objects;
