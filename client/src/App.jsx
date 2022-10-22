import { useRef } from 'react';
import './App.css';

import { Objects, ObjectsControlPanel } from './components';

function App() {
  const objectsRef = useRef();
  return (
    <div className="App">
      <ObjectsControlPanel objectsRef={objectsRef} />
      <Objects ref={objectsRef} />
    </div>
  );
}

export default App;
